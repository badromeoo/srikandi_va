// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; 
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Srikandi VA",
  description: "Virtual Assistant Service",
};




export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        
        {children}
      </body>
    </html>
  );
}