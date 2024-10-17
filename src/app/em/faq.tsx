"use client";

import { useState } from "react";
import Image from "next/image";
function Card(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="max-w-3xl p-5 rounded-xl shadow-lg bg-white mx-auto"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-4 items-center justify-between cursor-pointer">
        <h3 className="font-semibold text-lg">{props.title}</h3>
        <p>-</p>
      </div>
      <div
        className={`${
          isOpen ? "max-h-80" : "max-h-0"
        } transition-all duration-500 overflow-hidden`}
      >
        <p className="pt-4 max-w-lg">{props.desc}</p>
      </div>
    </div>
  );
}
export default function FAQ() {
  const content = [
    {
      title: "Berapa usia minimal untuk join program?",
      content: "Minimal untuk SMA dan maksimal usia 30 tahun",
    },
    {
      title: "Apakah english master dapat Real Test TOEFL?",
      content:
        "Real test toefl hanya bisa kamu dapatin jika kamu ambil program English Master Plus 6 Bulan",
    },
    {
      title: "Fasilitas apa saja yang didapat program ini?",
      content:
        "Selain fasilitas belajar yang lengkap, program ini juga menyediakan asrama, toolkit belajar, akomodasi selama di Bali dan REAL TEST TOEFL untuk program english master plus.",
    },
    {
      title: "Kapan kursus di Kampung Inggris LC dimulai?",
      content:
        "Setiap bulan dibuka 2 gelombang yaitu di hari Senin yang terdekat dengan tanggal 10 atau 25 setiap bulannya. (Kecuali di program english master plus hanya buka di periode 10)",
    },
    {
      title: "Apa saja materi yang diajarkan di program ini?",
      content:
        "Materi yang diajarkan meliputi grammar, speaking, pronunciation, vocabulary, dan TOEFL untuk program 6 bulan.",
    },
    {
      title: "Bagaimana frekuensi praktik harian dalam program ini?",
      content:
        "Praktik bahasa Inggris dapat dilakukan setiap saat, baik saat belajar maupun di asrama, karena diterapkan sistem English Area selama 24/7.",
    },
    {
      title: "Di mana lokasi gedung belajar dan asrama?",
      content:
        "Lokasi gedung belajar dan asrama terletak di Kampung Inggris LC, Jl. Langkat No.88, Singgahan, Pelem, Kec. Pare, Kabupaten Kediri, Jawa Timur 64213.",
    },
    {
      title: "Ada berapa kali pertemuan dalam 1 minggu?",
      content: `Perhari akan ada 2x kelas asrama dan 4x kelas utama dengan materi yang sudah terintegrasi.
            Untuk 1 minggu ada 5 hari efektif yaitu dari Senin-Kamis (materi) dan Jum’at (ujian). 
            Di hari Sabtu digunakan untuk kegiatan extra program sedangkan Minggu libur. Sehingga dalam 1 minggu akan ada 24 kali pembelajaran dan ujian dengan materi yang berbeda`,
    },
    {
      title: "Fasilitas campnya apa saja di program ini?",
      content:
        "Fasilitas campnya semua sama yaitu kasur, bantal, lemari, kipas angin, dan kamar mandi. per kamar akan di isi 3-4 orang tergantung luas kamar.",
    },
    {
      title: "Apakah ada fasilitas penjemputan di program ini?",
      content:
        "Kami menyediakan fasilitas penjemputan di beberapa lokasi dengan ada tambahan biaya.",
    },
    {
      title: "Apakah bisa request 1 kamar dengan teman/saudara?",
      content:
        "Maaf, peserta tidak diperbolehkan request kamar agar bisa saling sosialisasi satu sama lain, selain itu pembagian kelasnya akan diatur oleh tim kami berdasarkan hasil assessment test.",
    },
    {
      title: "Apa perbedaan EM 4 bulan atau EMP 6 bulan?",
      content:
        "Tentu semakin lama durasi maka materinya semakin detail dan levelnya akan semakin naik. Untuk EM 4 bulan & EMP 6 bulan ada benefit tambahan study tour ke Bali selama 5 hari. Sedangkan,  program EMP 6 Bulan mendapat Materi TOEFL ITP sekaligus real Test TOEFL ITP",
    },
    {
      title: "Bagaimana transportasi selama kursus di Kampung Inggris LC?",
      content:
        "Peserta bisa menyewa sepeda atau bisa berjalan kaki bersama peserta lainnya.",
    },
    {
      title: "Apakah bisa dapat sertifikat di program ini?",
      content:
        "Bisa. Peserta akan dapat sertifikat program dan tambahan sertifikat TOEFL ITP khusus EMP 6 bulan.",
    },
    {
      title: "Bagaimana akomodasi selama trip ke Bali?",
      content:
        "Akomodasi sudah termasuk dalam biaya program. Transport, penginapan dan konsumsi sudah ditanggung.",
    },
  ];
  return (
    <div id="faq" className="p-4 pb-20">
      <h2 className="text-3xl sm:text-4xl text-center pt-20 pb-10">
        Frequently Asked Questions <br />
        (FAQ)
      </h2>
      <div>
        <Image alt="" src="" />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {content.map((item, index) => (
          <div key={index} className="">
            <Card title={item.title} desc={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
}
