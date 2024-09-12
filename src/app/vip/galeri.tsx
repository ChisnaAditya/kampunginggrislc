"use client";
import Image from "next/image";
import { useState } from "react";

function CardPhoto(props: any) {
  return (
    <div className="" aria-hidden={props.isHidden}>
      <div className="w-[300px]">
        <Image
          alt="fasilitas kampung inggris lc pare"
          src={props.src}
          width={720}
          height={450}
          className="rounded-xl"
          loading="lazy"
        />
        <p className="text-center text-slate-500 mt-2">{props.desc}</p>
      </div>
    </div>
  );
}
const suasana = [
  {
    src: "/suasana/vip/1.png",
    desc: "Suasana Belajar VIP",
  },
  {
    src: "/suasana/em/4.png",
    desc: "Weekly Exam",
  },
  {
    src: "/suasana/vip/2.png",
    desc: "Speaking Class",
  },
  {
    src: "/suasana/vip/3.png",
    desc: "Pronunciation Class",
  },
  {
    src: "/suasana/vip/4.png",
    desc: "Listening Class",
  },
  {
    src: "/suasana/vip/5.png",
    desc: "Grammar Class",
  },
  {
    src: "/suasana/em/7.png",
    desc: "Belajar di Hall",
  },
  {
    src: "/suasana/em/5.png",
    desc: "Study Club",
  },
];
const fasilitas = [
  {
    src: "/fasilitas/vip/1.png",
    desc: "Asrama program VIP",
  },
  {
    src: "/fasilitas/vip/2.png",
    desc: "Back Drawer",
  },
  {
    src: "/fasilitas/vip/3.png",
    desc: "Spring Bed nyaman",
  },
  {
    src: "/fasilitas/vip/4.png",
    desc: "Meja belajar",
  },
  {
    src: "/fasilitas/vip/5.png",
    desc: "Terdapat meja belajar",
  },
  {
    src: "/fasilitas/vip/6.png",
    desc: "Asrama AC",
  },
  {
    src: "/fasilitas/vip/7.png",
    desc: "Kamar mandi shower",
  },
  {
    src: "/fasilitas/vip/8.png",
    desc: "Gambaran kamar mandi",
  },
];
const keseruan = [
  {
    src: "/keseruan/vip/1.png",
    desc: "Game",
  },
  {
    src: "/keseruan/vip/2.png",
    desc: "Outing ke SLG",
  },
  {
    src: "/keseruan/vip/3.png",
    desc: "Class Meeting",
  },
  {
    src: "/keseruan/vip/4.png",
    desc: "Game asik di SLG",
  },
  {
    src: "/keseruan/vip/5.png",
    desc: "Extra Program",
  },
  {
    src: "/keseruan/vip/6.png",
    desc: "LC Goes to SLG",
  },
  {
    src: "/keseruan/vip/7.png",
    desc: "Praktik Speaking di SLG",
  },
  {
    src: "/keseruan/vip/8.png",
    desc: "Keseruan di SLG",
  },
];

export default function Galeri() {
  const [activePhoto, setActivePhoto] = useState(suasana);

  return (
    <section className="flex flex-col items-center justify-center p-4 w-full">
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
          Suasana
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
      <div className="space-y-10 overflow-scroll sm:overflow-hidden w-full sm:first-letter:max-w-7xl sm:[mask-image:_linear-gradient(to_left,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
        <div className="flex gap-4 sm:animate-infinite-scroll-x">
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
        <div className="flex gap-4 sm:animate-infinite-scroll-x-reverse">
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
