"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";

const keseruan = [
  {
    src: "/keseruan/em/1.png",
    desc: "Game",
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
    desc: "Konser Agustusan",
  },
  {
    src: "/keseruan/em/5.png",
    desc: "Class Meeting",
  },
  {
    src: "/fasilitas/em/7.png",
    desc: "Taman Kampung Inggris LC",
  },
  {
    src: "/fasilitas/em/8.png",
    desc: "Monumen Kampung Inggris LC",
  },
  {
    src: "/fasilitas/em/2.png",
    desc: "Frontliner Kampung Inggris LC",
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
      </div>
    </div>
  );
}
export default function Banner() {
  return (
    <div className="relative overflow-hidden lg:p-20 lg:mb-20 lg:[mask-image:_linear-gradient(to_top,transparent_0,_black_200px,_black_calc(100%-100px),transparent_100%)] bg-neutral-200">
      <iframe
        src="https://lottie.host/embed/8cce7197-7d42-4f34-b332-582ca760e1c1/s4fLLFLI40.json"
        className="absolute left-0 scale-[2]"
      ></iframe>
      <iframe
        src="https://lottie.host/embed/8cce7197-7d42-4f34-b332-582ca760e1c1/s4fLLFLI40.json"
        className="absolute right-0 scale-[2]"
      ></iframe>
      <section className="flex flex-col lg:flex-row items-center p-5 max-w-7xl mx-auto shadow-2xl rounded-lg lg:p-20 lg:mb-20 bg-neutral-100">
        <div className="lg:w-1/2 space-y-2 lg:space-y-6 xl:space-y-8">
          <h2 className="w-fit font-poppins text-black/80 px-2 bg-secondaryLC">
            Liburan Hampir Tiba!
          </h2>
          <p className="text-2xl lg:text-3xl xl:text-4xl font-bold font-poppins text-black">
            Gimana kalo <span className="text-primaryLC">liburan kali ini</span>{" "}
            kamu coba hal yang Anti Mainstream?
          </p>
          <p className="text-xs lg:text-lg xl:text-xl text-black/50">
            Daripada <i>boring</i> di rumah kan mending kamu gabung{" "}
            <b className="text-primaryLC">program liburan</b> ke LC aja. Selesai
            liburan, kamu lancar ngomong bahasa Inggris! 🤩
          </p>
          <Button
            className="bg-primaryLC text-white lg:text-xl font-bold mt-5"
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
      <div className="p-5 space-y-5 lg:space-y-10 overflow-scroll sm:overflow-hidden w-full sm:first-letter:max-w-7xl sm:[mask-image:_linear-gradient(to_left,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
        <div className="flex gap-4 sm:animate-infinite-scroll-x">
          {keseruan.slice(0, 4).map((item, index) => (
            <div key={index + 1}>
              <CardPhoto src={item.src} desc={item.desc} />
            </div>
          ))}
          {keseruan.slice(0, 4).map((item, index) => (
            <div key={index + 3}>
              <CardPhoto src={item.src} desc={item.desc} isHidden={"true"} />
            </div>
          ))}
        </div>
        <div className="flex gap-4 sm:animate-infinite-scroll-x-reverse lg:mb-20">
          {keseruan.slice(4, 8).map((item, index) => (
            <div key={index + 5}>
              <CardPhoto src={item.src} desc={item.desc} />
            </div>
          ))}
          {keseruan.slice(4, 8).map((item, index) => (
            <div key={index + 7}>
              <CardPhoto src={item.src} desc={item.desc} isHidden={"true"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
