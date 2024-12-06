"use client";
import YoutubePlayer from "@/components/YoutubePlayer";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const keseruan = [
  {
    src: "/keseruan/dc/keasyikan 8.webp",
    desc: "Outing ke SLG",
  },
  {
    src: "/keseruan/dc/keasyikan 9.webp",
    desc: "Outing ke SLG",
  },
  {
    src: "/keseruan/dc/keasyikan 1.webp",
    desc: "Outing ke SLG",
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
  const [urlParam, setUrlParam] = useState("");
  const searchParams = useSearchParams();
  const utm_source = searchParams.get("utm_source") || ("" as string);
  const utm_medium = searchParams.get("utm_medium") || ("" as string);
  const utm_campaign = searchParams.get("utm_campaign") || ("" as string);

  const setToLocalStorage = () => {
    if (localStorage.getItem("utm_source") !== null) {
      localStorage.setItem("utm_source", utm_source);
    }
    if (localStorage.getItem("utm_source") !== null) {
      localStorage.setItem("utm_medium", utm_medium);
    }
    if (localStorage.getItem("utm_source") !== null) {
      localStorage.setItem("utm_campaign", utm_campaign);
    }
  };

  useEffect(() => {
    setUrlParam(
      `utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
    );
    setToLocalStorage();
  }, [utm_source, utm_medium, utm_campaign]);

  return (
    <div className="relative overflow-hidden lg:p-20 bg-neutral-50">
      <iframe
        src="https://lottie.host/embed/8cce7197-7d42-4f34-b332-582ca760e1c1/s4fLLFLI40.json"
        className="absolute left-0 scale-[2]"
      ></iframe>
      <iframe
        src="https://lottie.host/embed/8cce7197-7d42-4f34-b332-582ca760e1c1/s4fLLFLI40.json"
        className="absolute right-0 scale-[2]"
      ></iframe>

      <section className="lg:w-1/2 flex flex-col lg:flex-row items-center justify-center p-5 max-w-6xl mx-auto shadow-2xl rounded-lg lg:p-20 lg:mb-20">
        <div className="space-y-2 lg:space-y-6 xl:space-y-8 text-center">
          <h2 className=" font-poppins text-black/80 px-2 bg-secondaryLC">
            Liburan Hampir Tiba!
          </h2>
          <p className="text-3xl lg:text-3xl xl:text-4xl font-bold font-poppins text-black">
            Gimana kalo <span className="text-primaryLC">liburan</span> kali ini
            kamu coba hal yang Anti Mainstream?
          </p>
          <p className=" lg:text-lg xl:text-xl text-black/50 pb-10">
            Daripada <i>boring</i> di rumah kan mending kamu gabung{" "}
            <b className="text-primaryLC">program liburan</b> ke LC aja. Selesai
            liburan, kamu lancar ngomong bahasa Inggris! 🤩
          </p>
          <iframe
            width="100%"
            height="500"
            src="https://youtube.com/embed/nsjrbJSugxw?si=dmAt48RndV7PHbpk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Button
            className="bg-primaryLC text-white lg:text-xl font-bold w-full"
            onClick={() => {
              window.location.href = "#paket";
              window.gtag("event", "CTA_AfterVideo");
            }}
          >
            Yuk Daftar
          </Button>
        </div>
      </section>

      <div className="px-5a py-10 space-y-1 max-w-6xl mx-auto text-center">
        <div className="lg:text-xl">Yuk Lihat!</div>
        <h2 className="text-3xl lg:text-4xl font-bold font-poppins">
          Betapa Asyiknya
        </h2>
        <p className="text-black/70 lg:pt-2 lg:text-lg xl:text-xl max-w-lg mx-auto">
          Liburan sambil belajar di <b>Kampung Inggris LC</b> bareng 1.000 siswa
          lainnya 🤩
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
        Geser ke kanan yaa &#10158;
      </p>

      <p className="text-lg italic font-poppins text-black/80 text-center max-w-lg mx-auto px-4 pt-20">
        Tuh lihat, asyik banget kan liburan di Kampung Inggris LC. Kapan lagi
        liburan ketemu <b>teman baru dari seluruh Indonesia</b> 🥳
      </p>
    </div>
  );
}
