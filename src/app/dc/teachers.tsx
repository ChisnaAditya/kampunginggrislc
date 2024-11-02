"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import YoutubePlayer from "@/components/YoutubePlayer";

export default function Teacher() {
  const tutor = [
    "/tutor/em/16.png",
    "/tutor/em/11.png",
    "/tutor/em/10.png",
    "/tutor/em/17.png",
    "/tutor/em/12.png",
    "/tutor/em/13.png",
    "/tutor/em/14.png",
    "/tutor/em/15.png",
  ];

  return (
    <section className="p-5 max-w-7xl mx-auto">
      <div className="">
        <div className="">Jangan Ragu!</div>
        <h2 className="text-3xl lg:text-4xl font-semibold font-poppins">
          Teachers Kami
        </h2>
        <p className="text-black/70 pb-2 lg:pt-2 text-sm lg:text-lg xl:text-xl">
          Adalah pengajar <b>terbaik dan berpengalaman</b> yang memastikanmu
          dapet pembelajaran yang top-notch.
        </p>
      </div>

      <div className="flex overflow-scroll gap-4 lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-100px),transparent_100%)] no-scrollbar">
        {tutor.map((item, index) => (
          <div key={index}>
            <div className="w-[250px] lg:w-[350px]">
              <Image alt="" src={item} width={1280} height={1280} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-primaryLC font-bold">Swipe &#10158;</p>

      <div className="relative min-h-[300px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full lg:w-full min-h-[200px] py-5 lg:py-10 rounded-[20px] shadow-lg px-5 lg:px-20 max-w-5xl bg-neutral-800">
          <div className="hidden lg:block">
            <div>
              <Image
                alt="logo lc"
                src="/icon/dc/zizi cta.png"
                width={250}
                height={250}
                className="absolute bottom-0 left-20"
              />
            </div>
          </div>
          <div className="z-10 lg:mr-20 mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold font-poppins text-yellow-400">
              Saatnya bikin liburanmu luar biasa!
            </h2>
            <p className="text-md lg:text-lg text-white lg:max-w-lg">
              Jangan sia-siakan liburanmu cuma buat rebahan. Daftar sekarang,
              lancar English kemudian!
            </p>
            <Button
              className="bg-primaryLC text-white lg:text-xl font-bold mt-5 w-full lg:w-fit"
              onClick={() => (window.location.href = "#paket")}
            >
              Yuk Daftar
            </Button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="">Biar Makin Yakin!</div>
        <h2 className="text-3xl lg:text-4xl font-semibold font-poppins">
          Nih, ada nih
        </h2>
        <p className="text-black/70 pb-4 lg:pt-2 text-sm lg:text-lg xl:text-xl">
          Cerita inspiratif dari members LC yang mutusin buat{" "}
          <b>upgrade English skills</b> mereka saat liburan. Meet our
          inspirational students!
        </p>

        <YoutubePlayer videoId="bBK-SDOjnjg?si=TpgHoNMMvzfNJoXr" />
      </div>
    </section>
  );
}
