export const processCloudinaryUrl = (
  url: string | undefined | null,
): string | null => {
  if (!url) return null;

  // Return the original Cloudinary URL for direct usage
  return url;
};

// Extract filename from Cloudinary URL
export const extractCloudinaryFileName = (
  url: string | undefined | null,
): string => {
  if (!url) return "gallery-image.jpg";

  try {
    // Cloudinary URL structure:
    // https://res.cloudinary.com/[cloud_name]/image/upload/[transformations]/[public_id].[format]

    // Remove query parameters if any
    const baseUrl = url.split("?")[0];
    if (!baseUrl) return "gallery-image.jpg";

    // Split by '/' and get the last part which should contain public_id and format
    const urlParts = baseUrl.split("/");
    const lastPart = urlParts[urlParts.length - 1];

    // Check if it has file extension
    if (lastPart?.includes(".")) {
      return lastPart;
    }

    // If no extension found, try to get public_id and add default extension
    if (lastPart) {
      return `${lastPart}.jpg`;
    }

    // Fallback filename
    return "gallery-image.jpg";
  } catch (error) {
    console.error("Error extracting Cloudinary filename:", error);
    return "gallery-image.jpg";
  }
};

// Get optimized Cloudinary URL for download (original quality)
export const getCloudinaryDownloadUrl = (
  url: string | undefined | null,
): string | null => {
  if (!url) return null;

  try {
    // Check if it's a Cloudinary URL
    if (!url.includes("res.cloudinary.com")) {
      return url; // Return original URL if not Cloudinary
    }

    // Parse Cloudinary URL to get parts
    const urlParts = url.split("/");
    const uploadIndex = urlParts.findIndex((part) => part === "upload");

    if (uploadIndex === -1) {
      return url; // Return original if structure is unexpected
    }

    // Reconstruct URL without transformations for original quality
    const baseUrlParts = urlParts.slice(0, uploadIndex + 1);
    const publicIdParts = urlParts.slice(uploadIndex + 1);

    // Remove any transformation parameters and keep only the public_id
    const publicId = publicIdParts[publicIdParts.length - 1];

    // Check if publicId exists
    if (!publicId) {
      return url; // Return original if no public_id found
    }

    // Construct download URL with original quality and attachment flag
    const downloadUrl = [
      ...baseUrlParts,
      "fl_attachment", // Force download instead of display
      "q_auto:best", // Best quality
      publicId,
    ].join("/");

    return downloadUrl;
  } catch (error) {
    console.error("Error processing Cloudinary download URL:", error);
    return url; // Return original URL if processing fails
  }
};

// Function to handle downloading the image from Cloudinary
export const handleCloudinaryDownload = async (
  imageUrl?: string | null,
): Promise<void> => {
  if (!imageUrl) {
    console.warn("No image URL provided for download");
    return;
  }

  const processedUrl = processCloudinaryUrl(imageUrl);
  if (!processedUrl) {
    console.warn("Failed to process Cloudinary URL");
    return;
  }

  try {
    // Get optimized download URL
    const downloadUrl = getCloudinaryDownloadUrl(processedUrl);

    if (!downloadUrl) {
      throw new Error("Failed to generate download URL");
    }

    // Fetch the image from Cloudinary
    const response = await fetch(downloadUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();

    // Create a temporary link element
    const downloadLink = document.createElement("a");
    const blobUrl = URL.createObjectURL(blob);
    downloadLink.href = blobUrl;

    // Set download filename
    const fileName = extractCloudinaryFileName(imageUrl);
    downloadLink.download = fileName;

    // Trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Clean up
    URL.revokeObjectURL(blobUrl);

    // console.log(`Cloudinary image downloaded: ${fileName}`);
  } catch (error) {
    // console.error("Error downloading Cloudinary image:", error);
    // You might want to add a toast notification here
    throw error; // Re-throw for handling in component if needed
  }
};

// Alternative: Direct download via Cloudinary's built-in download feature
export const handleCloudinaryDirectDownload = async (
  imageUrl?: string | null,
): Promise<void> => {
  if (!imageUrl) {
    console.warn("No image URL provided for direct download");
    return;
  }

  try {
    // Get download URL with attachment flag
    const downloadUrl = getCloudinaryDownloadUrl(imageUrl);

    if (!downloadUrl) {
      throw new Error("Failed to generate download URL");
    }

    // Open download URL in new window/tab
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.target = "_blank";
    downloadLink.rel = "noopener noreferrer"; // Security best practice
    downloadLink.download = extractCloudinaryFileName(imageUrl);

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    console.log("Cloudinary direct download initiated");
  } catch (error) {
    console.error("Error with Cloudinary direct download:", error);
    // Fallback to regular download
    try {
      await handleCloudinaryDownload(imageUrl);
    } catch (fallbackError) {
      console.error("Fallback download also failed:", fallbackError);
      throw new Error("Both direct and fallback download methods failed");
    }
  }
};

// Type-safe helper to check if URL is valid Cloudinary URL
export const isCloudinaryUrl = (
  url: string | undefined | null,
): url is string => {
  return Boolean(
    url && typeof url === "string" && url.includes("res.cloudinary.com"),
  );
};

// Utility function to validate download requirements
export const canDownloadImage = (
  imageUrl: string | undefined | null,
): boolean => {
  if (!imageUrl) return false;

  try {
    // Basic URL validation
    new URL(imageUrl);
    return true;
  } catch {
    return false;
  }
};
