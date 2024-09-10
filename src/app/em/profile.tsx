"use client";

import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ArrorLeft = () => {
  return (
    <div className="w-[30px] bg-white p-1 rounded-full">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-infinite-slide-left"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M5 12H19M19 12L13 6M19 12L13 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default function Profile() {
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
    <section className="flex flex-col sm:flex-row items-center justify-center gap-10 p-4 sm:pb-32 sm:my-20 bg-pattern-profile-em [mask-image:_linear-gradient(to_bottom,transparent_0,_black_10px,_black_calc(100%-100px),transparent_100%)]">
      <div className="flex flex-col">
        <p className="pt-5">KENALIN NIH</p>
        <h2 className="text-3xl sm:text-4xl font-bold max-w-lg">
          Kampung Inggris LC
        </h2>
        <p className="max-w-xl text-lg mt-4">
          Lembaga kursus bahasa inggris yang bukan hanya berfokus pada pemberian
          materi saja, tapi juga{" "}
          <span className="text-slate-50 bg-primaryLC px-4">menekankan</span>{" "}
          pada <span className="text-slate-50 bg-primaryLC px-4">praktik</span>.
        </p>
        <p className="max-w-xl text-lg mt-4">
          Karena kami sadar untuk menguasai bahasa itu{" "}
          <span className="text-slate-50 bg-primaryLC px-4">bukan</span> hanya{" "}
          <span className="text-slate-50 bg-primaryLC px-4">sekedar teori</span>{" "}
          saja tapi harus dibiasakan untuk praktik setiap hari,
        </p>
        <p className="max-w-xl text-lg mt-4">
          dan praktik bareng teman saja nggak cukup tapi harus berada di
          lingkungan yang tepat dan dengan teman yang sudah bisa dan siap saling
          mendukung.
        </p>
        <div className="flex gap-4 w-full mt-10">
          <Button
            className="bg-transparent border-[1px] border-black text-xl font-medium sm:px-10 sm:py-3"
            endContent={<ArrorLeft />}
            onPress={() =>
              (window.location.href = `https://cs.kampunginggrislc.com/?${urlParam}&utm_content=em&paket=em/emp`)
            }
          >
            Konsultasi Gratis
          </Button>
        </div>
      </div>
      <div>
        <Image
          alt="program english master kampung inggris lc"
          // src="/keseruan/em/1.webp"
          src="/background.webp"
          width={700}
          height={700}
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
