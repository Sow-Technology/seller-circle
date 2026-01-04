"use client";

import React from "react";
import ReduxProvider from "@/providers/ReduxProvider";
import SnackbarProvider from "@/providers/SnackbarProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/sonner";

export default function ClientProviders({ children }) {
  return (
    <ReduxProvider>
      <GoogleAnalytics gaId="G-1ZL0JJHHX9" />
      <SnackbarProvider>
        {children}
        <Toaster position={"top-center"} />
      </SnackbarProvider>
    </ReduxProvider>
  );
}
