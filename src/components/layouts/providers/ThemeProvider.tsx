import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mount, setMount] = React.useState<boolean>(false);
  React.useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return <>{children}</>;
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
