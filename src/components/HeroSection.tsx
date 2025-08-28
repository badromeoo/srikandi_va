// src/components/HeroSection.tsx (Perbaiki ini)
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";


const fontSuwargi = localFont({
  src: "../app/fonts/Suwargi.otf", 
  
});
export function HeroSection() {
  return (
    // Hapus warna latar belakang dari sini
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className=" grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className=" flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-[71px]">
                {/* Gunakan font-heading yang sudah kita siapkan */}
                <span className={` text-[#F45866] ${fontSuwargi.className} tracking-wide`}>Asisten Virtual </span>
                Cerdas untuk Semua
                <span className={` text-[#F45866] ${fontSuwargi.className} tracking-wide`}> Kebutuhanmu</span>
              </h1>
              <Image src="/images/garisungu.svg" alt="" width={429.11} height={30} />
              <p className="max-w-[600px] mt-[50px] text-gray-500 md:text-xl dark:text-gray-400 tracking-wide">
                Membantu meningkatkan produktivitas pebisnis dan professional dengan mengeliminasi tugas tugas prioritas rendah tapi memerlukan waktu untuk mengerjakannya.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/request"
                className="inline-flex w-[234px] h-[51] mt-[50px] items-center justify-center rounded-md bg-[#A11692] px-8 text-[15px] font-normal text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#A11692] dark:text-[#F9F7F3] dark:hover:bg-[#ae45a3] dark:focus-visible:ring-gray-300"
              >
                Pelajari selengkapnya
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Hero"
              className="rounded-xl object-cover"
              height="550"
              src="/images/gambarwanita.jpg"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  );
}