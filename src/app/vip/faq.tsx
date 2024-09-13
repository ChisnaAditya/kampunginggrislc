"use client";

import { useState } from "react";
import Image from "next/image";
function Card(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="p-5 rounded-xl shadow-lg bg-white mx-auto"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-4 items-center justify-between cursor-pointer">
        <h3 className="font-semibold md:text-xl lg:text-2xl">{props.title}</h3>
        <p>-</p>
      </div>
      <div
        className={`${
          isOpen ? "max-h-80" : "max-h-0"
        } transition-all duration-500 overflow-hidden`}
      >
        <p className="pt-4">{props.desc}</p>
      </div>
    </div>
  );
}
export default function FAQ() {
  const content = [
    {
      title: "Apakah bisa bayar DP dulu?",
      content:
        "yups selain cara pendaftaran dan pembayaran yang sangat mudah, kamu bisa juga boking kuotamu dengan bayar dp terlebih dahulu, hanya 20% doang kog bayar DP nya.",
    },
    {
      title: "Kapan pendaftarannya dibuka?",
      content:
        "Untuk pendaftaran sudah kita buka dari jauh2 hari, dan kamu bisa daftar secara Online. tapi untuk start program akan dimulai pada hari senin terdekat dengan tanggal 10 disetiap bulannya.",
    },
    {
      title: "Lokasinya di mana?",
      content:
        "Alamat lengkapnya ada di Jl. Langkat No.88, Singgahan, Pelem, Kec. Pare, Kabupaten Kediri, Jawa Timur 64213",
    },
    {
      title: "Bahasa Inggris saya Basic apakah bisa daftar?",
      content:
        "Justru itu prioritas kami kak, membantu temen2 yang bahasa Inggrisnya masih basic atau dari nol sekaligus dengan belajar step by step sampai bisa lancar dan PD ngomong Inggris.",
    },
    {
      title: "Apakah sudah disediakan asrama?",
      content:
        "Yups bener banget kak karna kita fokus membangun lingkungan berbahasa inggris jadi kami juga menyediakan asrama sekaligus tutor kece sebagai teman praktek ngomong inggris di camp.",
    },
    {
      title: "Disana banyak temenya atau tidak?",
      content:
        "Jangan takut nggk punya teman kak, karna yang datang kesini banyak juga yang dari luar jawa. dan yang pasti asyik2 karna punya tujuan yg sama yaitu belajar bahasa inggris.",
    },
    {
      title: "Jam berapa aja belajarnya?",
      content:
        "setiap hari akan ada 6x pertemuan perhari mulai dari kelas vocab setelah sholat shubuh, dilanjutkan 4x pertemuan main class (kelas speaking 2x grammar dan pronunciation) mulai jam 7/8 sampai jam 3 an, dan dilanjutkan kelas malam dicamp, biasanya setelah sholat magrib.",
    },
  ];
  return (
    <div id="faq" className=" p-10">
      <h2 className="text-3xl sm:text-4xl text-center pb-10">
        Frequently Asked Questions <br />
        (FAQ)
      </h2>
      <div>
        <Image alt="" src="" />
      </div>
      <div className="grid grid-cols-1  gap-4">
        {content.map((item, index) => (
          <div key={index} className="">
            <Card title={item.title} desc={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
}
