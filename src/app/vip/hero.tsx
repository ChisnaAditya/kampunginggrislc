"use client";
import Link from "next/link";
import YoutubePlayer from "@/components/YoutubePlayer";
import Bonus from "./bonus";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function HeroSection() {
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
    <section className="flex flex-col gap-10 items-center justify-between lg:py-20 max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col gap-4 p-4">
          <p className="hidden md:block bg-gradient-to-r from-slate-400 via-red-300 to-amber-200 bg-clip-text text-transparent">
            #DrivesYourSuccess
          </p>
          <h1 className="text-slate-100 text-3xl md:text-4xl lg:text-5xl max-w-2xl font-semibold leading-[1.2em] sm:leading-[1.3em]">
            {" "}
            <span className="bg-gradient-to-r from-rose-500 to-primaryLC bg-clip-text text-transparent">
              Kuasai {""}
            </span>
            Bahasa Inggris dalam 1 Bulan
          </h1>
          <p className="text-slate-100 max-w-xl text-lg">
            Kini Kampung Inggris LC (Language Center) punya{" "}
            <span className="font-bold bg-gradient-to-r from-rose-400 to-primaryLC bg-clip-text text-transparent">
              Program VIP {""}
            </span>
            yang memberikan pengalaman belajar lebih kontekstual dan berkualitas
          </p>
          <div className="flex gap-4 w-full">
            <div className="bg-gradient-to-r from-red-500 to-primaryLC rounded-full shadow-2xl">
              <button
                className="font-bold bg-gradient-to-r from-slate-50 to-white bg-clip-text text-transparent text-lg px-4 sm:text-xl p-2"
                onClick={() =>
                  (window.location.href = `https://cs.kampunginggrislc.com/?${urlParam}&utm_content=vip&paket=vip`)
                }
              >
                DAFTAR SEKARANG
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[720px] h-full animate-appearance-in p-4">
          <YoutubePlayer videoId="rafCHr2W2bo?si=1IhSqDzYlyY2eTnS" />
        </div>
      </div>
    </section>
  );
}
