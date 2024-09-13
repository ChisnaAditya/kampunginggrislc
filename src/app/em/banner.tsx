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
    <div className="flex flex-col sm:flex-row sm:items-center justify-center my-20 sm:rounded-xl shadow-xl bg-pattern-banner bg-no-repeat bg-cover">
      <div className="p-4 sm:p-0">
        <h2 className="text-2xl first-letter:sm:text-4xl font-bold text-white">
          Mau Tanya Lebih Lanjut?
        </h2>
        <p className="hidden sm:block text-xl sm:text-2xl pt-2 text-white">
          Hubungi Kami
        </p>
        <Button
          className="text-lg sm:text-xl text-white rounded-full py-6 px-3 mt-5 font-medium bg-green-600"
          endContent={<ArrorLeft />}
          onPress={() =>
            (window.location.href = `https://cs.kampunginggrislc.com/?${urlParam}&utm_content=em&paket=em/emp`)
          }
        >
          Konsultasi Gratis
        </Button>
      </div>
      <div className="relative">
        <Image
          alt=""
          src="/Konsultasi Gratis.png"
          width={300}
          height={300}
          className="drop-shadow-2xl mx-auto"
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
