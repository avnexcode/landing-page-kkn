import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import { Toaster as Sooner } from "sonner";
import { Loader } from "../elements";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

type AppProviderProps = {
  children: React.ReactNode;
  className?: string;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <main className={cn(poppins.className)}>
      <Suspense fallback={<Loader />}>
        <Providers>{children}</Providers>
      </Suspense>
      <Sooner position="top-center" />
    </main>
  );
};
