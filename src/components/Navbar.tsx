// src/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="px-4 lg:px-40 h-14 flex items-center bg-[#EDF2F7]">
      <Link className="flex items-center justify-center" href="/">
        <Image className="mt-10" src="/images/logoNav.svg" alt="Srikandi VA" width={250} height={40} />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="inline-flex h-[51px] w-[168px] mt-10 items-center justify-center rounded-md bg-[#A11692] px-4 py-2 text-sm font-[15px] text-primary-foreground shadow transition-colors hover:bg-[#ae45a3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          href="/request"
        >
          Hubungi kami
        </Link>
      </nav>
    </header>
  );
}