// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-white py-12 md:py-16">
      {/* 1. Gunakan flexbox untuk menata kolom kiri dan kanan */}
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-16">
        
        {/* Kolom Kiri: Teks */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Kerja Lebih <span className="font-suwargi text-[#F45866]">Efisien</span> dengan
            <br />
            <span className="font-suwargi text-[#F45866]">Asisten Virtual</span> dan Tingkatkan <span className="font-suwargi text-[#F45866]">Produktivitas</span> Kerjamu
          </h2>
        </div>

        {/* Kolom Kanan: Tombol & Logo */}
        <div className="flex flex-col items-end gap-y-6">
          <Link
            href="/request"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#A11692] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#A11692]/90"
          >
            Hubungi kami
          </Link>
          <Image
            alt="Logo Srikandi VA"
            className="h-auto mt-5 w-[180px] sm:w-[250px]"
            src="/images/srikandi-footer.svg"
            width={250}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
}