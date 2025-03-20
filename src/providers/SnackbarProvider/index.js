"use client";
import { SnackbarProvider as NotistackProvider } from "notistack";
import { ReactNode } from "react";

export default function SnackbarProvider({ children }) {
  return (
    <NotistackProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "top", horizontal: "right" }} // Change position
      autoHideDuration={3000} // Auto dismiss after 3 seconds
    >
      {children}
    </NotistackProvider>
  );
}
