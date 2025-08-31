// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Kolom Kiri: Teks */}
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Kerja Lebih <span className="font-suwargi text-[#F45866]">Efisien</span> dengan <span className="font-suwargi text-[#F45866]">Asisten Virtual</span> dan Tingkatkan{" "}
              <span className="font-suwargi text-[#F45866]">Produktivitas</span> Kerjamu
            </h2>
          </div>

          {/* Kolom Kanan: Tombol & Logo */}
          <div className="flex flex-col items-end justify-between">
            {/* Tombol dipindahkan ke atas */}
            <Link
              href="/request"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#A11692] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#A11692]/90"
            >
              Hubungi kami
            </Link>

            {/* Logo di bawah */}
            <Image
              alt="Logo Srikandi VA"
              className="h-auto w-[180px] sm:w-[250px] mt-8" // Menambahkan margin atas untuk jarak
              src="/images/srikandi-footer.svg"
              width={250}
              height={40}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}