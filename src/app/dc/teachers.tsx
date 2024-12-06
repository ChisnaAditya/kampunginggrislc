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
    <section className="p-5 py-20 max-w-6xl mx-auto">
      <div className="text-center space-y-2">
        <div className="">Jangan Ragu!</div>
        <h2 className="text-3xl lg:text-4xl font-semibold font-poppins">
          Teachers yang akan Mendampingimu
        </h2>
        <p className="text-black/70 pb-2 lg:pt-2 lg:text-lg xl:text-xl max-w-lg mx-auto">
          Adalah pengajar <b>terbaik dan berpengalaman</b> yang memastikanmu
          dapet pembelajaran yang top-notch
        </p>
      </div>

      <div className="my-10 flex overflow-scroll gap-4 lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-100px),transparent_100%)] no-scrollbar">
        {tutor.map((item, index) => (
          <div key={index}>
            <div className="w-[250px] lg:w-[350px]">
              <Image alt="" src={item} width={1280} height={1280} />
            </div>
          </div>
        ))}
      </div>
      <p className="my-4 text-primaryLC font-bold">
        Geser ke kanan yaa &#10158;
      </p>

      <div className="min-h-[300px]">
        <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-full min-h-[200px] pt-5 lg:pt-10 rounded-[20px] shadow-lg bg-neutral-800">
          <div className="mx-auto space-y-4 p-5 lg:p-0 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold font-poppins text-yellow-400">
              Saatnya bikin liburanmu luar biasa!
            </h2>
            <p className="text-sm lg:text-lg text-white lg:max-w-lg">
              Daftar sekarang, lancar English kemudian!
            </p>
            <Button
              className="bg-primaryLC text-white lg:text-xl font-bold w-full lg:w-fit"
              onClick={() => {
                window.location.href = "#paket";
                window.gtag("event", "CTA_MsZizi");
              }}
            >
              Yuk Daftar
            </Button>
          </div>
          <div>
            <Image
              alt="logo lc"
              src="/icon/dc/zizi cta.png"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="text-center space-y-2 pt-20">
        <div className="mt-10">Biar Makin Yakin!</div>
        <h2 className="text-3xl lg:text-4xl font-semibold font-poppins">
          Ini dia, Kata Almuni
        </h2>
        <p className="mb-10 text-black/70 pb-4 lg:pt-2 lg:text-lg xl:text-xl max-w-xl mx-auto">
          yang sudah merasakan asyiknya liburan di LC buat{" "}
          <b>upgrade English skills</b> mereka saat liburan. Meet our
          inspirational students!
        </p>

        <YoutubePlayer videoId="bBK-SDOjnjg?si=TpgHoNMMvzfNJoXr" />
      </div>
    </section>
  );
}
