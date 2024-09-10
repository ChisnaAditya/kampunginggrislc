"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { useRef } from "react";

import CardTestimoni from "@/components/Programs/CardTestimoni";

export default function Alumni() {
  const swiperRef = useRef(null);
  const alumni = [
    {
      avatar: "/alumni/monica-alumni-kampung-inggris-lc.webp",
      testi:
        "Dulu sebelum tau LC, susah banget rasanya buat belajar English. Tapi, setelah gabung LC, belajar English jadi terasa lebih mudah dan menyenangkan. Thanks to ilmu yang diberikan LC, aku berhasil dapetin apa yang aku mau dan jadi bagian dari SUPER CREW!",
      name: "Monica",
      job: "Pramugari",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/bagus-alumni-kampung-inggris-lc.webp",
      testi:
        "Melangkah tanpa persiapan matang buat aku harus lapang dada. Aku ga nyerah dan akhirnya ambil kursus di LC buat persiapan pendaftaran tahun depannya. Ternyata worth it banget, I’ve got much experience. Finally, I got what I dreamed of!",
      name: "Bagus",
      job: "Polisi",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/rizka-windi-alumni-kampung-inggris-lc.webp",
      testi:
        "Awal masuk aku cupu ga bisa apa-apa. Dari LC aku dapet banyak ilmu, pengalaman, vocab baru, dan temen dari Sabang sampai Merauke. Alhamdulillah, sekarang aku bisa jadi bagian dari Best Crew in The World.",
      name: "Rizka Windi",
      job: "Pramugari",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/annisa-nurul-alumni-kampung-inggris-lc.webp",
      testi:
        "Bagi saya 4 bulan di LC terasa sangat cepat. Saya mendapat predikat member teraktif dan nilai yang baik. Setelah itu saya memberanikan diri real test TOEFL, untuk nguji kemampuan. Alhamdulillah hasilnya melebihi target.",
      name: "Annisa Nurul",
      job: "Beasiswa Turki",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/alief-rasyafara-alumni-kampung-inggris-lc.webp",
      testi:
        "Pengalaman yang saya dapatkan luar biasa dari basic sampai jadi English master. Selama di LC, Saya mendapat materi yang luar biasa dari teacher dan tutor. Dapet teman baru yang saling mendukung dari sabang - merauke.",
      name: "Alief Rasyafara",
      job: "Finalis Putra Kebudayaan Sulawesi Selatan 2018",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/elvira-alumni-kampung-inggris-lc.webp",
      testi:
        "Weekly meeting, gathering, yasinan, table manner, outbound, jalan-jalan ke Bali, best camp competition, dan banyak lagi kegiatan asik lainnya. Bikin pertemanan naik level jadi keluarga yang berjuang bareng buat bisa bahasa Inggris.",
      name: "Elvira R",
      job: "English Teacher & Penulis Buku",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/arbaz-alumni-kampung-inggris-lc.webp",
      testi:
        "Bagi saya LC itu tempat yang paling menyenangkan, di sana saya mendapatkan banyak hal baru; teman, pengalaman, dan yang paling penting saya belajar manajemen waktu dengan baik. Sangat berharga dan nggak bisa dilupain sampe sekarang.",
      name: "Mohamad Arbaz",
      job: "Pemeran FTV Indosiar",
      program: "Alumni Intensive Program",
    },
    {
      avatar: "/alumni/jarshaka-alumni-kampung-inggris-lc.webp",
      testi:
        "Saya ambil paket 2 bulan tapi nambah 1 bulan lagi, karena metode belajar di LC bagus banget, tutor yang asik, selain itu juga dapet teman yang super humble dari Sabang sampai Merauke.",
      name: "Jarshaka Syarif",
      job: "Aktor",
      program: "Alumni Intensive Program",
    },
    {
      avatar: "/alumni/mutia-alumni-kampung-inggris-lc.webp",
      testi:
        "LC memberikan banyak pengalaman baru yang belum pernah aku rasakan sebelumnya. Mulai dari ilmu, temen dan kelompoknya, dan kekeluargaannya tak terlupakan. Kedisiplinan dan English areanya super duper top banget.",
      name: "Mutia Koirun Nissa",
      job: "Putri Indonesia Sosmed (Jabar) 2018",
      program: "Alumni Intensive Program",
    },
    {
      avatar: "/alumni/rifa-alumni-kampung-inggris-lc.webp",
      testi:
        "Aku seneng banget bisa ke LC karena banyak pelajaran yang kuambil, temen dari seluruh Indonesia, manage keuangan, dan kemandirian. LC tuh kaya rumah kedua, semuanya berasa kaya keluarga.",
      name: "Rifa Dzahabiyyah",
      job: "Selebgram",
      program: "Alumni Intensive Program",
    },
    {
      avatar: "/alumni/naqita-alumni-kampung-inggris-lc.webp",
      testi:
        "Awalnya grammar saya masih berantakan, setelah gabung di Kampung Inggris LC saya merasakan banyak perubahan pada struktur kalimat bahasa Inggris.",
      name: "Naqita",
      job: "Selebgram TikTok",
      program: "Alumni Intensive Program",
    },
    {
      avatar: "/alumni/cut-putri-alumni-kampung-inggris-lc.webp",
      testi:
        "Menurutku yang paling seru itu kewajiban untuk speaking English, karena aku bisa practice dan ningkatin kemampuanku untuk komunikasi sehari-hari. Materi speaking, grammar, dan pronunciation. Well, 3 minggu di LC ga cukup harus nambah lagi.",
      name: "Cut Putri Firlianda",
      job: "Duta Genre Putri Aceh 2020",
      program: "Alumni Intensive Program",
    },
  ];

  return (
    <div className="py-10 w-full px-4">
      <p>ALUMNI</p>
      <h2 className="text-3xl sm:text-4xl py-2 max-w-lg">
        Pernah Belajar di{" "}
        <span className="font-bold text-primaryLC">Kampung Inggris</span> LC
      </h2>
      <p className="">
        dan <i>dapetin</i> inspirasi dari sini{" "}
      </p>
      <div className="scrollbar flex gap-[20px] overflow-x-auto w-full py-6">
        {alumni.map((item, index) => (
          <CardTestimoni
            key={index}
            avatar={item.avatar}
            name={item.name}
            job={item.job}
            program={item.program}
            testi={item.testi}
          />
        ))}
      </div>
    </div>
  );
}
