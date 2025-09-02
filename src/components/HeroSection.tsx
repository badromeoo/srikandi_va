import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    // Hapus warna latar belakang dari sini
    <section className=" py-12 md:py-24 lg:py-10 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className=" grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className=" flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className={`  text-3xl text-[#404040] leading-[1] font-bold  sm:text-5xl tracking-[2px] xl:text-[55px]`}>
                {/* Gunakan font-heading yang sudah kita siapkan */}
                <span className="font-suwargi text-[#F45866] tracking-[2px]">Asisten Virtual </span>
                <br />
                Cerdas untuk Semua
                <span className="font-suwargi text-[#F45866] tracking-[2px]"> Kebutuhanmu</span>
              </h1>
              <Image src="/images/garisungu.svg" alt="" width={429.11} height={30} />
              <p className={`max-w-[600px] 2xl:mt-[50px] mt-[20px]  font-[300] text-gray-500 md:text-xl dark:text-gray-400 `}>
                Membantu meningkatkan produktivitas pebisnis dan professional dengan mengeliminasi tugas tugas prioritas rendah tapi memerlukan waktu untuk mengerjakannya.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#about-us"
                className={`inline-flex  w-[234px] h-[51] 2xl:mt-[50px] mt-[20px] items-center justify-center rounded-md bg-[#A11692] px-8 text-[15px] font-normal text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#A11692] dark:text-[#F9F7F3] dark:hover:bg-[#ae45a3] dark:focus-visible:ring-gray-300`}
              >
                Pelajari selengkapnya
              </Link>
            </div>
          </div>
          <div className="mt-[50px] md:mt-10 relative flex items-center justify-center">
            {/* Gambar utama */}
            <Image alt="Hero" className="rounded-xl object-cover" height="550" src="/images/gambarwanitahero.jpg" width="550" />
            <Image alt="Fitur Unggulan" className="absolute bottom-5 md:left-25 lg:left-5 xl:left-10 2xl:left-25" height="500" src="/images/centanghero.svg" width="289" />
          </div>
        </div>
      </div>
    </section>
  );
}
