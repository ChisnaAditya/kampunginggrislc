"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";

const keseruan = [
  {
    src: "/keseruan/dc/keasyikan 1.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/dc/keasyikan 2.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/dc/keasyikan 3.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/dc/keasyikan 4.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/dc/keasyikan 5.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/dc/keasyikan 6.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/dc/keasyikan 7.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/dc/keasyikan 8.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/dc/keasyikan 9.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/dc/keasyikan 10.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/dc/keasyikan 11.webp",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/em/1.png",
    desc: "Game Asyik",
  },
  {
    src: "/keseruan/em/2.png",
    desc: "After Weekly Exam",
  },
  {
    src: "/keseruan/em/3.png",
    desc: "Yel-Yel Competition",
  },
  {
    src: "/keseruan/em/4.png",
    desc: "Konser Asyik",
  },
  {
    src: "/keseruan/em/5.png",
    desc: "Class Meeting",
  },
  {
    src: "/suasana/em/4.png",
    desc: "Grammar Class",
  },
  {
    src: "/suasana/em/2.png",
    desc: "Speaking Class",
  },
  {
    src: "/suasana/em/3.png",
    desc: "Pronunciation Class",
  },
  {
    src: "/suasana/em/5.png",
    desc: "Study Club",
  },
  {
    src: "/suasana/em/6.png",
    desc: "Belajar di Eastern Point",
  },
  {
    src: "/suasana/em/7.png",
    desc: "Belajar di Hall",
  },
  {
    src: "/fasilitas/em/7.png",
    desc: "Taman LC",
  },
  {
    src: "/fasilitas/em/8.png",
    desc: "Kilometer 0 LC",
  },
  {
    src: "/fasilitas/em/2.png",
    desc: "Frontliner LC",
  },
];

function CardPhoto(props: any) {
  return (
    <div className="" aria-hidden={props.isHidden}>
      <div className="w-[200px] lg:w-[300px]">
        <Image
          alt="fasilitas kampung inggris lc pare"
          src={props.src}
          width={720}
          height={450}
          className="rounded-xl"
          loading="lazy"
        />
        <p className="text-center text-sm text-slate-500 mt-2">{props.desc}</p>
      </div>
    </div>
  );
}

export default function Banner() {
  return (
    <div className="relative overflow-hidden lg:p-20 lg:mb-10 lg:[mask-image:_linear-gradient(to_top,transparent_0,_black_200px,_black_calc(100%-100px),transparent_100%)] bg-neutral-50">
      <iframe
        src="https://lottie.host/embed/8cce7197-7d42-4f34-b332-582ca760e1c1/s4fLLFLI40.json"
        className="absolute left-0 scale-[2]"
      ></iframe>
      <iframe
        src="https://lottie.host/embed/8cce7197-7d42-4f34-b332-582ca760e1c1/s4fLLFLI40.json"
        className="absolute right-0 scale-[2]"
      ></iframe>

      <section className="flex flex-col lg:flex-row items-center p-5 max-w-6xl mx-auto shadow-2xl rounded-lg lg:p-20 lg:mb-20">
        <div className="lg:w-1/2 space-y-2 lg:space-y-6 xl:space-y-8">
          <h2 className="w-fit font-poppins text-black/80 px-2 bg-secondaryLC">
            Liburan Hampir Tiba!
          </h2>
          <p className="text-2xl lg:text-3xl xl:text-4xl font-bold font-poppins text-black">
            Gimana kalo <span className="text-primaryLC">liburan</span> kali ini
            kamu coba hal yang Anti Mainstream?
          </p>
          <p className="text-sm lg:text-lg xl:text-xl text-black/50 pb-10">
            Daripada <i>boring</i> di rumah kan mending kamu gabung{" "}
            <b className="text-primaryLC">program liburan</b> ke LC aja. Selesai
            liburan, kamu lancar ngomong bahasa Inggris! 🤩
          </p>
          <Button
            className="bg-primaryLC text-white lg:text-xl font-bold w-full lg:w-fit"
            onClick={() => (window.location.href = "#paket")}
          >
            Yuk Daftar
          </Button>
        </div>
        <div className="lg:w-1/2 flex items-end justify-end">
          <Image
            alt=""
            src="/hero/dc/zizi banner dc.png"
            width={500}
            height={500}
            className="hidden lg:block"
          />
        </div>
      </section>

      <div className="p-5 max-w-6xl mx-auto">
        <div className="lg:text-xl">Coba Lihat!</div>
        <h2 className="text-3xl lg:text-4xl font-semibold font-poppins">
          Betapa Asyiknya
        </h2>
        <p className="text-black/70 lg:pt-2 text-sm lg:text-lg xl:text-xl max-w-lg">
          Liburan sambil belajar di <b>Kampung Inggris LC</b> bareng 1.000 siswa
          lainnya🤩
        </p>
      </div>

      <div className="p-5 max-w-6xl mx-auto space-y-5 lg:space-y-10 overflow-scroll sm:overflow-hidden w-full sm:first-letter:max-w-7xl sm:[mask-image:_linear-gradient(to_left,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)] no-scrollbar">
        <div className="flex gap-4 sm:animate-infinite-scroll-x">
          {keseruan.slice(0, 12).map((item, index) => (
            <div key={index + 1}>
              <CardPhoto src={item.src} desc={item.desc} />
            </div>
          ))}
          {keseruan.slice(0, 12).map((item, index) => (
            <div key={index + 3}>
              <CardPhoto src={item.src} desc={item.desc} isHidden={"true"} />
            </div>
          ))}
        </div>
        <div className="flex gap-4 sm:animate-infinite-scroll-x-reverse lg:mb-20">
          {keseruan.slice(12, 25).map((item, index) => (
            <div key={index + 5}>
              <CardPhoto src={item.src} desc={item.desc} />
            </div>
          ))}
          {keseruan.slice(12, 25).map((item, index) => (
            <div key={index + 7}>
              <CardPhoto src={item.src} desc={item.desc} isHidden={"true"} />
            </div>
          ))}
        </div>
      </div>
      <p className="px-5 max-w-6xl mx-auto mt-4 text-primaryLC font-bold">
        Swipe &#10158;
      </p>
    </div>
  );
}
