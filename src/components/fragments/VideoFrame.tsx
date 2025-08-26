import { cn } from "@/lib/utils";

type VideoFrameProps = {
  className?: string;
  width?: number;
  height?: number;
  src: string;
  title: string;
  loading?: "lazy" | "eager";
  allowFullScreen?: boolean;
  frameBorder?: number;
} & React.IframeHTMLAttributes<HTMLIFrameElement>;

export const VideoFrame = ({
  className,
  width,
  height,
  src,
  title,
  loading = "lazy",
  allowFullScreen = true,
  frameBorder = 0,
  ...props
}: VideoFrameProps) => {
  const enhancedAllow = [
    "accelerometer",
    "autoplay",
    "clipboard-write",
    "encrypted-media",
    "gyroscope",
    "picture-in-picture",
    "web-share",
  ].join("; ");

  return (
    <iframe
      className={cn("aspect-video w-full rounded-md", className)}
      width={width}
      height={height}
      src={src}
      title={title}
      loading={loading}
      allow={enhancedAllow}
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen={allowFullScreen}
      frameBorder={frameBorder}
      sandbox="allow-scripts allow-same-origin allow-presentation"
      {...props}
    />
  );
};
