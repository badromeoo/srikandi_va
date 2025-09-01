// src/components/AboutUs.tsx
import Image from "next/image";
import Link from "next/link";

export function AboutUs() {
  return (
    <>
      {/* ===== SEKSI PERTAMA: GAMBAR KIRI, TEKS KANAN ===== */}
      <section id="about-us" className="w-full bg-white py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex justify-center">
              <Image alt="Ibu Rumah Tangga Bekerja" className="rounded-xl w-full h-auto sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]" src="/images/gambarwanita_aboutus.png" width={700} height={500} />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <Link href="/tentang-kami">
                  <div className="inline-flex items-center justify-center w-[130px] h-[30px] rounded-xl bg-transparent border-1 border-[#A11692] px-3 py-1 text-[16px] text-[#A11692] transition-colors hover:bg-[#A11692]/10">
                    <p className="font-suwargi">Tentang kami</p>
                  </div>
                </Link>
                <h2 className="text-2xl 2xl:text-4xl xl:text-[36px] text[#404040] lg:text-4xl md:text-4xl sm:text-5xl   mt-5 ">
                  <span className={`  font-bold `}>Berawal dari</span> <span className="font-suwargi text-[#F45866]">Ibu Rumah Tangga</span> <br /> <span className={` font-bold `}>yang Kesulitan Mencari</span>
                  <br />
                  <span className="font-suwargi text-[#F45866] ">Pekerjaan yang Layak</span>
                </h2>
                <p className={` max-w-[600px] font-light text-gray-500 md:text-xl/relaxed tracking-wider lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400`}>
                  Banyak ibu rumah tangga yang kesulitan mencari pekerjaan layak karena terbatasnya peluang dan perusahaan yang lebih mengutamakan talenta muda. <br /> <br /> Kami hadir untuk memberikan solusi dengan menciptakan peluang
                  kerja sebagai asisten virtual, memungkinkan ibu rumah tangga memanfaatkan pengalaman dan waktu luang mereka tanpa meninggalkan peran sebagai ibu dan pengurus rumah tangga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEKSI KEDUA: TEKS KIRI, GAMBAR KANAN ===== */}
      <section className="w-full bg-white py-12 md:py-24 lg:py-32 dark:bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="lg:order-last flex justify-center">
              <Image alt="Meningkatkan Produktivitas" className="rounded-xl w-full h-auto sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]" src="/images/gambarwanita_aboutus.png" width={700} height={500} />
            </div>
            {/* Kolom Teks */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h2 className=" text-2xl 2xl:text-4xl xl:text-[36px] lg:text-4xl md:text-4xl sm:text-5xl  ">
                  <span className={` font-bold `}>Membantu</span>
                  <span className="font-suwargi text-[#F45866] "> Ibu Rumah Tangga</span> <span className={` font-bold `}>dan Meningkatkan </span>
                  <span className={`font-suwargi text-[#F45866]`}>Produktivitasmu</span>
                </h2>
                <p className={` max-w-[600px] font-light tracking-wider text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400`}>
                  Tugas-tugas kecil yang sering terabaikan bisa menghambat produktivitas. Dengan merekrut asisten virtual, kamu bisa mendelegasikan pekerjaan tersebut dan fokus pada hal-hal yang lebih penting. <br /> <br /> Kami ada untuk
                  membantu ibu rumah tangga terampil, memberikan dukungan efisien dan meningkatkan produktivitasmu.
                </p>
                <Link className="inline-flex h-10 items-center justify-center rounded-md bg-[#A11692] px-8 text-sm font-bold text-gray-50 shadow transition-colors hover:bg-gray-900/90" href="/request">
                  Hubungi kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
