"use client";

import Image from "next/image";
import Link from "next/link";
import monica from "../../assets/alumni/1.png";
import alief from "../../assets/alumni/5.png";
import arbaz from "../../assets/alumni/7.png";
import cutputri from "../../assets/alumni/12.png";

export default function Testimonials() {
  const testies = [
    {
      img: monica,
      name: "Monica",
      job: "Pramugari",
      program: "Alumni Program EM",
      title: "Aku Berhasil Dapetin Apa yang Aku Mau",
      text: "Dulu sebelum tau LC, susah banget rasanya buat belajar English. Tapi, setelah gabung LC, belajar English jadi terasa lebih mudah dan menyenangkan. Thanks to ilmu yang diberikan LC, aku berhasil dapetin apa yang aku mau dan jadi bagian dari SUPER CREW!",
      link: "zE6Xr5o2axc",
    },
    {
      img: arbaz,
      name: "Albir",
      job: "",
      program: "Alumni Holiday Ceria - 2 Minggu",
      title: "Dateng Aja Dulu Nanti Bakalan Suka",
      text: "Awalnya saya ga begitu suka belajar bahasa Inggris. Semenjak join di LC belajar Bahasa Inggris jadi menyenangkan. Rencananya mau ambil kelas intensive buat belajar lebih lagi buat bekal sekolah di luar negeri.",
      link: "x54B_M3IojU",
    },
    {
      img: cutputri,
      name: "Riski Khairatunnisa",
      job: "",
      program: "Alumni Intensive 1 Bulan",
      title: "More than Just Learning",
      text: "Penerapan English area 24 hours itu bikin kita terbiasa berbahasa Inggris. Di sini tu kita ga cuma belajar bahasa Inggris tapi juga banyak hal lainnya, jadi kamu tunggu apa lagi Come and join us!",
      link: "qc8UMu5M9i0",
    },
    {
      img: alief,
      name: "Pak Simon, Pak Eduard, dan Pak Yayang",
      job: "",
      program: "Alumni Intensive 2 Minggu",
      title: "Learning Knows No Age",
      text: "Awalnya malu karena sudah berumur, tapi setelah 1-2 hari kita lewati semuanya friendly jadi kita bisa enjoy. Bahasa Inggris itu perlu di era global ini. Apalagi pergaulan kita sebagai pelaut bukan hanya di lokal, kita bergaul dengan orang dari banyak negara. Improve bahasa Inggris sangat menunjang pekerjaan kita.",
      link: "Db5MjB0Xcvg",
    },
  ];
  return (
    <div className="container flex flex-col items-center bg-base-200 py-10">
      <article className="prose pb-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          83.333+ Member Membuktikannya
        </h1>
      </article>
      <div className="container carousel p-2 space-x-4">
        {testies.map((testi, index) => (
          <div key={index + 1} className="carousel-item">
            <div className="card card-compact w-60 md:w-[28rem] bg-base-100 shadow-sm border overflow-hidden">
              <article className="card-body">
                <h1 className="font-bold text-primaryLC">{testi.title}</h1>
                <p className="text-xs">{testi.text}</p>
              </article>
              <div className="flex p-4 justify-between bg-base-300">
                <div className="flex items-center gap-2">
                  <Image
                    alt="kampung inggris lc testimonial"
                    className="w-12 h-12 bg-center bg-cover rounded-full"
                    src={testi.img}
                    width={50}
                    height={50}
                  />
                  <article>
                    <h3 className="text-xs font-bold">{testi.name}</h3>
                    <p className="text-xs">{testi.program}</p>
                  </article>
                </div>
                <div>
                  <Link
                    href={`https://www.youtube.com/watch?v=${testi.link}`}
                    className="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#FF3D00"
                        d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                      ></path>
                      <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
