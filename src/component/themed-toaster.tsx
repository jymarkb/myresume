"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

const ThemedToaster = () => {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster
      richColors
      theme={(resolvedTheme as "light" | "dark") ?? "dark"}
    />
  );
};

export default ThemedToaster;
