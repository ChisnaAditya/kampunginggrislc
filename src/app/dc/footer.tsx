"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { secureHeapUsed } from "crypto";

export default function FooterDC() {
  return (
    <section className="bg-gradient-to-b from-[#fcce00b5] to-[#fca800d6]">
      <div className="bg-footer-dc relative  py-10 mt-40">
        <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[350px] lg:w-full min-h-[200px] py-5 lg:py-10 rounded-[20px] shadow-lg px-5 lg:px-20 max-w-5xl bg-neutral-800">
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
              Buruan Daftar, KUOTA TERBATAS
            </h2>
            <p className="text-md lg:text-lg text-white lg:max-w-lg">
              Jangan sia-siakan liburanmu. Daftar sekarang, lancar English
              kemudian!
            </p>
            <Button
              className="bg-primaryLC text-white lg:text-xl font-bold mt-5"
              onClick={() => (window.location.href = "#paket")}
            >
              Yuk Daftar
            </Button>
          </div>
        </div>
        <section className="max-w-7xl mx-auto pt-32 lg:pt-40 px-5">
          <p className="text-md text-black text-center">
            Untuk menjaga kualitas belajar, kami{" "}
            <b className="bg-black px-2 text-secondaryLC">MEMBATASI KUOTA</b>{" "}
            dan akan{" "}
            <b className="bg-black px-2 text-secondaryLC">
              MENUTUP PENDAFTARAN
            </b>{" "}
            sewaktu-waktu jika kuota sudah terpenuhi.
          </p>
          <p className="text-md text-black text-center">
            Saran kami, yuk{" "}
            <b className="text-primaryLC">amankan kuotamu sekarang </b>
            juga dengan cara mendaftar dan membayar{" "}
            <b className="text-primaryLC">DP 20%.</b>
          </p>
        </section>
        <p className="text-center text-xs pt-20 px-10">
          Kampung Inggris LC @2024 All Right Reserved. Terms of use and Privacy
          Policy
        </p>
      </div>
    </section>
  );
}
