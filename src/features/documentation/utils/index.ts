import type { CloudName } from "@/server/interfaces";

export const getCloudDisplayName = (cloudName: CloudName): string => {
  const names: Record<CloudName, string> = {
    drive: "Google Drive",
    onedrive: "OneDrive",
    dropbox: "Dropbox",
    mega: "MEGA",
    icloud: "iCloud",
    box: "Box",
    pcloud: "pCloud",
    mediafire: "MediaFire",
    amazon: "Amazon Drive",
    yandex: "Yandex Disk",
    nextcloud: "Nextcloud",
    owncloud: "ownCloud",
  };
  return names[cloudName] || cloudName;
};

export const formatFileSize = (size: {
  total: number;
  type: "kb" | "mb" | "gb" | "tb";
}) => {
  return `${size.total.toLocaleString()} ${size.type.toUpperCase()}`;
};

export const getSizeColor = (size: {
  total: number;
  type: "kb" | "mb" | "gb" | "tb";
}) => {
  const { total, type } = size;

  let sizeInMB = total;
  if (type === "kb") sizeInMB = total / 1024;
  else if (type === "gb") sizeInMB = total * 1024;
  else if (type === "tb") sizeInMB = total * 1024 * 1024;

  if (sizeInMB < 10) return "text-white";
  if (sizeInMB < 100) return "text-green-600";
  if (sizeInMB < 1000) return "text-blue-600";
  return "text-orange-500";
};

export const getFileTypeIcon = (fileType: "zip" | "tar" | "7z" | "rar") => {
  const iconProps = "h-4 w-4";

  switch (fileType.toLowerCase()) {
    case "zip":
      return {
        icon: "Package",
        className: `${iconProps}`,
      };
    case "rar":
      return {
        icon: "FileArchive",
        className: `${iconProps}`,
      };
    case "7z":
      return {
        icon: "Archive",
        className: `${iconProps}`,
      };
    case "tar":
      return {
        icon: "FolderArchive",
        className: `${iconProps}`,
      };
    default:
      return {
        icon: "FileArchive",
        className: `${iconProps}`,
      };
  }
};

export const getFileTypeColor = (fileType: "zip" | "tar" | "7z" | "rar") => {
  switch (fileType.toLowerCase()) {
    case "zip":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "rar":
      return "bg-red-50 text-red-700 border-red-200";
    case "7z":
      return "bg-green-50 text-green-700 border-green-200";
    case "tar":
      return "bg-orange-50 text-orange-700 border-orange-200";
    default:
      return "bg-muted/20 text-muted-foreground border-muted";
  }
};

export const getFileTypeDescription = (
  fileType: "zip" | "tar" | "7z" | "rar",
) => {
  switch (fileType.toLowerCase()) {
    case "zip":
      return "Format kompresi universal, kompatibel dengan semua sistem operasi";
    case "rar":
      return "Format kompresi tinggi dengan fitur recovery, memerlukan WinRAR atau 7-Zip";
    case "7z":
      return "Format kompresi tinggi dari 7-Zip dengan rasio kompresi terbaik";
    case "tar":
      return "Format arsip Unix/Linux, sering dikombinasikan dengan gzip atau bzip2";
    default:
      return "File arsip terkompresi";
  }
};

export const getCloudIconAndColor = (cloudName: CloudName) => {
  const iconProps = "h-4 w-4";

  switch (cloudName) {
    case "drive":
      return {
        icon: "HardDrive",
        className: `${iconProps} text-blue-600`,
        color: "text-blue-600",
        bgColor: "bg-blue-50 border-blue-200 text-blue-700",
      };
    case "onedrive":
      return {
        icon: "Cloud",
        className: `${iconProps} text-blue-700`,
        color: "text-blue-700",
        bgColor: "bg-blue-50 border-blue-200 text-blue-700",
      };
    case "dropbox":
      return {
        icon: "Package",
        className: `${iconProps} text-blue-500`,
        color: "text-blue-500",
        bgColor: "bg-blue-50 border-blue-200 text-blue-600",
      };
    case "mega":
      return {
        icon: "Shield",
        className: `${iconProps} text-red-600`,
        color: "text-red-600",
        bgColor: "bg-red-50 border-red-200 text-red-700",
      };
    case "icloud":
      return {
        icon: "Cloud",
        className: `${iconProps} text-gray-600`,
        color: "text-gray-600",
        bgColor: "bg-gray-50 border-gray-200 text-gray-700",
      };
    case "box":
      return {
        icon: "Package",
        className: `${iconProps} text-blue-800`,
        color: "text-blue-800",
        bgColor: "bg-blue-50 border-blue-200 text-blue-800",
      };
    case "pcloud":
      return {
        icon: "Cloud",
        className: `${iconProps} text-purple-600`,
        color: "text-purple-600",
        bgColor: "bg-purple-50 border-purple-200 text-purple-700",
      };
    case "mediafire":
      return {
        icon: "Zap",
        className: `${iconProps} text-orange-600`,
        color: "text-orange-600",
        bgColor: "bg-orange-50 border-orange-200 text-orange-700",
      };
    case "amazon":
      return {
        icon: "HardDrive",
        className: `${iconProps} text-yellow-600`,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50 border-yellow-200 text-yellow-700",
      };
    case "yandex":
      return {
        icon: "Globe",
        className: `${iconProps} text-red-500`,
        color: "text-red-500",
        bgColor: "bg-red-50 border-red-200 text-red-600",
      };
    case "nextcloud":
      return {
        icon: "Cloud",
        className: `${iconProps} text-blue-600`,
        color: "text-blue-600",
        bgColor: "bg-blue-50 border-blue-200 text-blue-700",
      };
    case "owncloud":
      return {
        icon: "Cloud",
        className: `${iconProps} text-indigo-600`,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50 border-indigo-200 text-indigo-700",
      };
    default:
      return {
        icon: "Cloud",
        className: `${iconProps} text-primary`,
        color: "text-primary",
        bgColor: "bg-muted/20 border-muted text-muted-foreground",
      };
  }
};
