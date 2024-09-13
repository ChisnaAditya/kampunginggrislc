"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ArrorLeft = () => {
  return (
    <div className="w-[30px] bg-white p-1 rounded-full">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default function Banner2() {
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
    <div className="flex flex-col sm:items-center justify-center sm:rounded-xl shadow-xl bg-pattern-banner2 bg-no-repeat bg-cover">
      <div className="p-4 sm:p-0 flex flex-col items-center">
        <h2 className="text-2xl text-center first-letter:sm:text-4xl font-bold text-white">
          Siap mahir berbahasa Inggris?
        </h2>
        <p className=" text-lg sm:text-xl pt-2 text-white text-center text-sm">
          Yuk, daftar sekarang dengan menghubungi CS
        </p>
        <Button
          className="text-lg sm:text-xl text-white rounded-full py-6 px-3 mt-5 font-medium bg-primaryLC"
          endContent={<ArrorLeft />}
          onPress={() =>
            (window.location.href = `https://cs.kampunginggrislc.com/?${urlParam}&utm_content=vip&paket=vip`)
          }
        >
          Daftar Sekarang
        </Button>
      </div>
      <div className="relative w-[200px] sm:w-fit mx-auto sm:mx-0">
        <Image
          alt=""
          src="/Konsultasi Gratis.png"
          width={400}
          height={400}
          className="drop-shadow-2xl"
        />
        <Image
          alt=""
          src="/icon-banner-1.png"
          width={100}
          height={100}
          className="absolute bottom-0 lg:bottom-64 right-0 drop-shadow-2xl animate-infinite-floating"
        />
      </div>
    </div>
  );
}
