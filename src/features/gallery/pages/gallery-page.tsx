import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { toast } from "sonner";
import {
  api,
  canDownloadImage,
  handleCloudinaryDownload,
  isCloudinaryUrl,
} from "@/utils";
import { GalleryGrid, ImageViewer } from "../components";
import type { Gallery } from "../types";
import { useState } from "react";
import { motion } from "framer-motion";

export const GalleryPage = () => {
  const { data: gallery, isLoading: isGalleryLoading } =
    api.gallery.getAll.useQuery();

  const [viewerState, setViewerState] = useState<{
    isOpen: boolean;
    currentImage: Gallery | null;
  }>({
    isOpen: false,
    currentImage: null,
  });

  const handleViewImage = (item: Gallery) => {
    setViewerState({
      isOpen: true,
      currentImage: item,
    });
  };

  const handleCloseViewer = () => {
    setViewerState({
      isOpen: false,
      currentImage: null,
    });
  };

  const downloadImage = async (imageUrl?: string | null): Promise<void> => {
    // Early validation
    if (!imageUrl) {
      console.error("No image URL provided for download");
      toast.error("Unable to download: No image URL available");
      return;
    }

    // Validate if URL can be downloaded
    if (!canDownloadImage(imageUrl)) {
      console.error("Invalid image URL provided:", imageUrl);
      toast.error("Unable to download: Invalid image URL");
      return;
    }

    // Optional: Check if it's a Cloudinary URL for better handling
    if (!isCloudinaryUrl(imageUrl)) {
      console.warn(
        "Non-Cloudinary URL detected, proceeding with standard download",
      );
      toast.warning("Non-Cloudinary URL detected, proceeding with download");
    }

    // Show loading toast
    const loadingToast = toast.loading("Downloading image...");

    try {
      await handleCloudinaryDownload(imageUrl);
      // console.log("Proses");

      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Image downloaded successfully!");

      // console.log("Image download completed successfully");
    } catch (error) {
      // Dismiss loading toast
      toast.dismiss(loadingToast);

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Failed to download image:", errorMessage);

      // Show error toast with detailed message
      toast.error(`Download failed: ${errorMessage}`, {
        description:
          "Please try again or contact support if the issue persists.",
      });
    }
  };

  // Type-safe wrapper for gallery items
  const handleDownloadImage = async (item: Gallery) => {
    const imageUrl = item.image;
    // console.log(imageUrl);
    await downloadImage(imageUrl);
  };

  return (
    <PageContainer withHeader withFooter title="Gallery">
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading className="mb-20 text-center">Gallery</Heading>
        </motion.div>

        <GalleryGrid
          galleryItems={gallery}
          onViewImage={handleViewImage}
          onDownloadImage={handleDownloadImage}
          isGalleryLoading={isGalleryLoading}
        />

        {/* Image Viewer */}
        <ImageViewer
          isOpen={viewerState.isOpen}
          onClose={handleCloseViewer}
          currentImage={viewerState.currentImage}
          galleryItems={gallery}
          onDownloadImage={handleDownloadImage}
        />
      </SectionContainer>
    </PageContainer>
  );
};
