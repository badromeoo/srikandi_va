import Image from "next/image";

const advantages = [
  {
    icon: "/images/icon-efisien-waktu.svg",
    title: "Efisien Waktu",
    description: "Lebih banyak memiliki waktu luang karena tidak perlu memikirkan tugas tugas kecil yang terbengkalai.",
  },
  {
    icon: "/images/icon-productivitas.svg",
    title: "Meningkatkan Produktivitas",
    description: "Bisa mengerjakan tugas lain yang lebih penting.",
  },
  {
    icon: "/images/icon-pekerjaan-tertata.svg",
    title: "Pekerjaan Tertata",
    description: "Bisa mengatur pekerjaan yang datang dan dibagi dengan asisten virtual.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="w-full bg-white py-12 md:py-24 lg:py-32 dark:bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Kolom Teks Kiri */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <div className="inline-block font-suwargi w-[126px] rounded-xl text-center border border-[#A11692] bg-transparent px-3 py-1 text-sm text-[#A11692]">Keuntungan</div>
              <h2 className="text-3xl  tracking-wide sm:text-5xl">
                <span className={` `}>Temukan</span> <span className="font-suwargi text-[#F45866]">Asisten Virtual</span> <span className={``}>yang Memenuhi</span> <span className="font-suwargi text-[#F45866] ">Kebutuhanmu</span>
              </h2>
              <p className="max-w-[600px] font-[400] md:text-xl/relaxed dark:text-gray-400">
                Asisten virtual bukan hanya untuk mengerjakan sedikit tugas kecil, tapi asisten virtual bisa juga membantu mengerjakan pekerjaan yang memakan waktu banyak sampai mengatur pekerjaan agar lebih mengehemat waktu.
              </p>
            </div>
          </div>

          {/* Kolom Daftar Keuntungan Kanan */}
          <div className="flex flex-col gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="flex items-start gap-4">
                <Image src={advantage.icon} alt={`${advantage.title} icon`} width={64} height={64} />
                <div className="grid gap-1">
                  <h3 className="text-lg ">{advantage.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-[400]">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
