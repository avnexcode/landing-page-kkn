import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useState } from "react";
import { HiddenComponentForm } from "./HiddenComponentForm";
import { useSearchParams } from "next/navigation";

type HiddenComponentProps = {
  setIsEnabled: (isEnabled: boolean) => void;
  password: string;
  label: string;
};

export const HiddenComponent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & HiddenComponentProps
>(({ className, children, setIsEnabled, password, label, ...props }, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const passwordParam = searchParams.get("pass");

  useEffect(() => {
    if (passwordParam === password) {
      setIsVisible(true);
      setIsEnabled(true);
    }
  }, [password, passwordParam, setIsEnabled]);

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      {isVisible ? (
        children
      ) : (
        <HiddenComponentForm
          setIsVisible={setIsVisible}
          setIsEnabled={setIsEnabled}
          password={password}
          label={label}
        />
      )}
    </div>
  );
});

HiddenComponent.displayName = "HiddenComponent";
