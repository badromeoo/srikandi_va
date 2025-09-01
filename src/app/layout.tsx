// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; 
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Srikandi VA",
  description: "Virtual Assistant Service",
};

const suwargiFont = localFont({
  src: '../../public/fonts/Suwargi.otf',
  variable: '--font-suwargi',
  display: 'swap',
});


export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" className={`${suwargiFont.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}