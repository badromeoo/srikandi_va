// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; 


export const metadata: Metadata = {
  title: "Srikandi VA",
  description: "Virtual Assistant Service",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}