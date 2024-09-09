import React from "react";
import Image from "next/image";

function CardPhoto(props: any) {
  return (
    <div key={props.keyy} className="w-full" aria-hidden={props.isHidden}>
      <div className="w-[300px]">
        <Image
          alt="fasilitas kampung inggris lc pare"
          src={props.src}
          width={720}
          height={450}
          className="rounded-xl w-[720px]"
          loading="lazy"
        />
      </div>
      <p className="text-center text-slate-500 mt-2">{props.desc}</p>
    </div>
  );
}

export default function Galeri() {
  const fasilitas = [
    {
      src: "/fasilitas/5.webp",
      desc: "Taman Kampung Inggris LC",
    },
    {
      src: "/fasilitas/em/1.webp",
      desc: "Hall Gedung Utama",
    },
    // {
    //     src: '/fasilitas/6.webp',
    //     desc: 'desc'
    // },
    {
      src: "/fasilitas/em/3.webp",
      desc: "Frontliner Kampung Inggris LC",
    },
    {
      src: "/fasilitas/em/4.webp",
      desc: "Lorong asrama",
    },
    {
      src: "/fasilitas/4.webp",
      desc: "Lab Bahasa",
    },
    // {
    //     src: '/fasilitas/em/5.webp',
    //     desc: 'desc'
    // },
    {
      src: "/fasilitas/em/6.webp",
      desc: "Lorong gedung belajar Southern Point",
    },
    {
      src: "/fasilitas/em/7.webp",
      desc: "Gedung belajar Eastern Point",
    },
    {
      src: "/fasilitas/8.webp",
      desc: "Gedung belajar Southern Point",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <p>SEPERTI INI KAN</p>
      <h2 className="text-3xl sm:text-4xl text-center max-w-lg">
        Suasana <span className="font-bold text-primaryLC">Pembelajaran</span>{" "}
        yang Kamu Inginkan?
      </h2>
      <div className="flex gap-4 py-4">
        <p className="px-4 py-2 rounded-2xl bg-slate-300">Suasana Belajar</p>
        <p className="px-4 py-2 rounded-2xl border-[1px]">Fasilitas</p>
        <p className="px-4 py-2 rounded-2xl border-[1px]">Keseruan</p>
      </div>
      <div className="space-y-10 overflow-hidden max-w-7xl [mask-image:_linear-gradient(to_left,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
        <div className="flex gap-10 animate-infinite-scroll-x">
          {fasilitas.slice(0, 4).map((item, index) => (
            <div key={index + 1}>
              <CardPhoto src={item.src} desc={item.desc} />
            </div>
          ))}
          {fasilitas.slice(0, 4).map((item, index) => (
            <div key={index + 3}>
              <CardPhoto src={item.src} desc={item.desc} isHidden={"true"} />
            </div>
          ))}
        </div>
        <div className="flex gap-10 animate-infinite-scroll-x-reverse">
          {fasilitas.slice(4, 8).map((item, index) => (
            <div key={index + 5}>
              <CardPhoto src={item.src} desc={item.desc} />
            </div>
          ))}
          {fasilitas.slice(4, 8).map((item, index) => (
            <div key={index + 7}>
              <CardPhoto src={item.src} desc={item.desc} isHidden={"true"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
