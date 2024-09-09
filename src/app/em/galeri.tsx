"use client";
import Image from "next/image";
import { useState } from "react";

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
const suasana = [
  {
    src: "/suasana/em/1.png",
    desc: "Hall Gedung Utama",
  },
  {
    src: "/suasana/em/2.png",
    desc: "Frontliner Kampung Inggris LC",
  },
  {
    src: "/suasana/em/3.png",
    desc: "Lorong asrama",
  },
  {
    src: "/suasana/em/4.png",
    desc: "Gedung belajar Southern Point",
  },
  {
    src: "/suasana/em/5.png",
    desc: "Lorong Southern Point",
  },
  {
    src: "/suasana/em/6.png",
    desc: "Lorong gedung belajar Eastern Point",
  },
  {
    src: "/suasana/em/7.png",
    desc: "Taman Kampung Inggris LC",
  },
  {
    src: "/suasana/em/8.png",
    desc: "Monumen Kampung Inggris LC",
  },
];
const fasilitas = [
  {
    src: "/fasilitas/em/1.png",
    desc: "Hall Gedung Utama",
  },
  {
    src: "/fasilitas/em/2.png",
    desc: "Frontliner Kampung Inggris LC",
  },
  {
    src: "/fasilitas/em/3.png",
    desc: "Lorong asrama",
  },
  {
    src: "/fasilitas/em/4.png",
    desc: "Gedung belajar Southern Point",
  },
  {
    src: "/fasilitas/em/5.png",
    desc: "Lorong Southern Point",
  },
  {
    src: "/fasilitas/em/6.png",
    desc: "Lorong gedung belajar Eastern Point",
  },
  {
    src: "/fasilitas/em/7.png",
    desc: "Taman Kampung Inggris LC",
  },
  {
    src: "/fasilitas/em/8.png",
    desc: "Monumen Kampung Inggris LC",
  },
];
const keseruan = [
  {
    src: "/keseruan/em/1.png",
    desc: "Hall Gedung Utama",
  },
  {
    src: "/keseruan/em/2.png",
    desc: "Frontliner Kampung Inggris LC",
  },
  {
    src: "/keseruan/em/3.png",
    desc: "Lorong asrama",
  },
  {
    src: "/keseruan/em/4.png",
    desc: "Gedung belajar Southern Point",
  },
  {
    src: "/keseruan/em/5.png",
    desc: "Lorong Southern Point",
  },
  {
    src: "/keseruan/em/6.png",
    desc: "Lorong gedung belajar Eastern Point",
  },
  {
    src: "/keseruan/em/7.png",
    desc: "Taman Kampung Inggris LC",
  },
  {
    src: "/keseruan/em/8.png",
    desc: "Monumen Kampung Inggris LC",
  },
];

export default function Galeri() {
  const [activePhoto, setActivePhoto] = useState(suasana);

  return (
    <section className="flex flex-col items-center justify-center">
      <p>SEPERTI INI KAN</p>
      <h2 className="text-3xl sm:text-4xl text-center max-w-lg">
        Suasana <span className="font-bold text-primaryLC">Pembelajaran</span>{" "}
        yang Kamu Inginkan?
      </h2>
      <div className="flex gap-4 py-4">
        <p
          onClick={() => setActivePhoto(suasana)}
          className={`cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-200 px-4 py-2 rounded-2xl border-[1px] ${
            activePhoto === suasana ? "bg-slate-300" : ""
          }`}
        >
          Suasana Belajar
        </p>
        <p
          onClick={() => setActivePhoto(fasilitas)}
          className={`cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-200 px-4 py-2 rounded-2xl border-[1px] ${
            activePhoto === fasilitas ? "bg-slate-300" : ""
          }`}
        >
          Fasilitas
        </p>
        <p
          onClick={() => setActivePhoto(keseruan)}
          className={`cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-200 px-4 py-2 rounded-2xl border-[1px] ${
            activePhoto === keseruan ? "bg-slate-300" : ""
          }`}
        >
          Keseruan
        </p>
      </div>
      <div className="space-y-10 overflow-hidden max-w-7xl [mask-image:_linear-gradient(to_left,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
        <div className="flex gap-10 animate-infinite-scroll-x">
          {activePhoto.slice(0, 4).map((item, index) => (
            <div key={index + 1}>
              <CardPhoto src={item.src} desc={item.desc} />
            </div>
          ))}
          {activePhoto.slice(0, 4).map((item, index) => (
            <div key={index + 3}>
              <CardPhoto src={item.src} desc={item.desc} isHidden={"true"} />
            </div>
          ))}
        </div>
        <div className="flex gap-10 animate-infinite-scroll-x-reverse">
          {activePhoto.slice(4, 8).map((item, index) => (
            <div key={index + 5}>
              <CardPhoto src={item.src} desc={item.desc} />
            </div>
          ))}
          {activePhoto.slice(4, 8).map((item, index) => (
            <div key={index + 7}>
              <CardPhoto src={item.src} desc={item.desc} isHidden={"true"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
