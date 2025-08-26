import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Download,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize,
  ImageIcon,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { Gallery } from "../types";

type ImageViewerProps = {
  isOpen: boolean;
  onClose: () => void;
  currentImage: Gallery | null;
  galleryItems?: Gallery[];
  onDownloadImage?: (item: Gallery) => Promise<void>;
  className?: string;
};

// Loading Component
const ImageLoader = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-background/50 absolute inset-0 flex items-center justify-center backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex flex-col items-center space-y-3">
        <Loader2 className="text-primary h-8 w-8 animate-spin" />
        <p className="text-muted-foreground text-sm">Loading image...</p>
      </div>
    </div>
  );
};

export const ImageViewer = ({
  isOpen,
  onClose,
  currentImage,
  galleryItems = [],
  onDownloadImage,
  className,
}: ImageViewerProps) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (currentImage && galleryItems.length > 0) {
      const index = galleryItems.findIndex(
        (item) => item.id === currentImage.id,
      );
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [currentImage, galleryItems]);

  useEffect(() => {
    if (!isOpen) {
      setZoom(1);
      setRotation(0);
      setIsFullscreen(false);
      setIsImageLoading(false);
      setLoadedImages(new Set());
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || isImageLoading) return; // Disable keyboard navigation while loading

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "+":
          handleZoomIn();
          break;
        case "-":
          handleZoomOut();
          break;
        case "r":
        case "R":
          handleRotate();
          break;
        case "f":
        case "F":
          setIsFullscreen(!isFullscreen);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex, zoom, isFullscreen, isImageLoading]);

  const handleImageNavigation = (newIndex: number) => {
    const targetImage = galleryItems[newIndex];
    if (!targetImage) return;

    // Show loading only if image hasn't been loaded before
    if (!loadedImages.has(targetImage.image)) {
      setIsImageLoading(true);
    }

    setCurrentIndex(newIndex);
    resetImageState();
  };

  const handlePrevious = () => {
    if (galleryItems.length > 1 && !isImageLoading) {
      const newIndex =
        currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
      handleImageNavigation(newIndex);
    }
  };

  const handleNext = () => {
    if (galleryItems.length > 1 && !isImageLoading) {
      const newIndex =
        currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
      handleImageNavigation(newIndex);
    }
  };

  const handleZoomIn = () => {
    if (!isImageLoading) {
      setZoom((prev) => Math.min(prev + 0.25, 3));
    }
  };

  const handleZoomOut = () => {
    if (!isImageLoading) {
      setZoom((prev) => Math.max(prev - 0.25, 0.5));
    }
  };

  const handleRotate = () => {
    if (!isImageLoading) {
      setRotation((prev) => (prev + 90) % 360);
    }
  };

  const resetImageState = () => {
    setZoom(1);
    setRotation(0);
  };

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages((prev) => new Set([...prev, imageSrc]));
    setIsImageLoading(false);
  };

  const handleImageError = () => {
    setIsImageLoading(false);
  };

  const handleDownload = async () => {
    if (isImageLoading) return;

    const imageToDownload = galleryItems[currentIndex];
    if (imageToDownload && onDownloadImage) {
      await onDownloadImage(imageToDownload);
    }
  };

  const displayImage = galleryItems[currentIndex] ?? currentImage;

  if (!displayImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "bg-background/95 border-0 p-0 backdrop-blur-sm",
          isFullscreen
            ? "h-screen max-h-screen w-screen max-w-screen"
            : "h-[90vh] max-h-[90vh] w-[95vw] max-w-[1400px]",
          "[&>button]:hidden",
          className,
        )}
      >
        {/* Header */}
        <DialogHeader className="from-background/90 absolute top-0 right-0 left-0 z-50 bg-gradient-to-b to-transparent p-4">
          <div className="text-foreground flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <DialogTitle className="max-w-md truncate text-lg font-semibold">
                {displayImage.title}
              </DialogTitle>
              <Badge
                variant="secondary"
                className="bg-secondary/20 text-foreground text-xs"
              >
                <ImageIcon className="mr-1 h-3 w-3" />
                {displayImage.orientation === "portrait"
                  ? "Portrait"
                  : "Landscape"}
              </Badge>
              {galleryItems.length > 1 && (
                <Badge
                  variant="secondary"
                  className="bg-secondary/20 text-foreground text-xs"
                >
                  {currentIndex + 1} / {galleryItems.length}
                </Badge>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-foreground hover:bg-muted/50 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        {/* Image Container */}
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          {/* Loading Component */}
          {isImageLoading && <ImageLoader />}

          <div
            className={cn(
              "relative transition-transform duration-200 ease-out",
              isImageLoading && "opacity-50",
            )}
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            <Image
              src={displayImage.image}
              alt={displayImage.title}
              width={1200}
              height={800}
              className="max-h-full max-w-full object-contain"
              draggable={false}
              loading="lazy"
              onLoad={() => handleImageLoad(displayImage.image)}
              onError={handleImageError}
            />
          </div>

          {/* Navigation Arrows */}
          {galleryItems.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                disabled={isImageLoading}
                className={cn(
                  "text-foreground hover:bg-muted/50 absolute top-1/2 left-4 h-12 w-12 -translate-y-1/2 cursor-pointer",
                  isImageLoading && "cursor-not-allowed opacity-50",
                )}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                disabled={isImageLoading}
                className={cn(
                  "text-foreground hover:bg-muted/50 absolute top-1/2 right-4 h-12 w-12 -translate-y-1/2 cursor-pointer",
                  isImageLoading && "cursor-not-allowed opacity-50",
                )}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>

        {/* Bottom Controls */}
        <div className="from-background/90 absolute right-0 bottom-0 left-0 z-50 bg-gradient-to-t to-transparent p-4">
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleZoomOut}
              disabled={zoom <= 0.5 || isImageLoading}
              className={cn(
                "text-foreground hover:bg-muted/50 cursor-pointer",
                isImageLoading && "cursor-not-allowed opacity-50",
              )}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>

            <div className="text-foreground min-w-[4rem] px-2 text-center text-sm">
              {Math.round(zoom * 100)}%
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleZoomIn}
              disabled={zoom >= 3 || isImageLoading}
              className={cn(
                "text-foreground hover:bg-muted/50 cursor-pointer",
                isImageLoading && "cursor-not-allowed opacity-50",
              )}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>

            <div className="bg-border mx-2 h-6 w-px" />

            <Button
              variant="ghost"
              size="icon"
              onClick={handleRotate}
              disabled={isImageLoading}
              className={cn(
                "text-foreground hover:bg-muted/50 cursor-pointer",
                isImageLoading && "cursor-not-allowed opacity-50",
              )}
            >
              <RotateCw className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => !isImageLoading && setIsFullscreen(!isFullscreen)}
              disabled={isImageLoading}
              className={cn(
                "text-foreground hover:bg-muted/50 cursor-pointer",
                isImageLoading && "cursor-not-allowed opacity-50",
              )}
            >
              <Maximize className="h-4 w-4" />
            </Button>

            {onDownloadImage && (
              <>
                <div className="bg-border mx-2 h-6 w-px" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDownload}
                  disabled={isImageLoading}
                  className={cn(
                    "text-foreground hover:bg-muted/50 cursor-pointer",
                    isImageLoading && "cursor-not-allowed opacity-50",
                  )}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
