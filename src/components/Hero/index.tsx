"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Hero() {
  const [urlParam, setUrlParam] = useState("");
  const searchParams = useSearchParams();
  const utm_source =
    searchParams.get("utm_source") ||
    ("program.kampunginggrislc.com" as string);
  const utm_medium = searchParams.get("utm_medium") || ("btntanyacs" as string);
  const utm_campaign =
    searchParams.get("utm_campaign") || ("organik" as string);

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

  const sendEventCS = () => {
    window.gtag("event", "btnCS-1", {
      posisi: "Hero",
    });
    window.location.href = `https://cs.kampunginggrislc.com/?cabang=pare&${urlParam}`;
  };

  const sendEventRegister = () => {
    window.gtag("event", "btnRegister-1", {
      posisi: "Hero",
    });
    window.location.href = `https://registrasi.kampunginggris.id/?br_code=PARE&${urlParam}`;
  };

  useEffect(() => {
    setUrlParam(
      `utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
    );
    setToLocalStorage();
  }, [utm_source, utm_medium, utm_campaign]);

  return (
    <div className="hero min-h-screen bg-fixed bg-center bg-cover bg-[url('/background.webp')]">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70" />
      <div className="hero-content text-center z-[2]">
        <article className="prose lg:text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            83.333+ Member LC
            <span className="text-primaryLC italic">
              {" "}
              Telah Membuktikannya
            </span>{" "}
            <br />
            Sekarang Giliran Kamu!
          </h1>
          <p className="text-white text-lg sm:text-xl lg:text-2xl">
            Kampung Inggris LC lebih dari sekadar tempat kursus Bahasa Inggris.{" "}
            <br /> Language Center adalah tempat bertumbuh dan meraih impian. 53
            ribu ++ member dari seluruh Indonesia sudah merasakan baik dan
            asiknya metode unik yang diterapkan di LC.
          </p>
          <div className="btns flex flex-col lg:flex-row items-center justify-center gap-4">
            {/* <Link href={`https://registrasi.kampunginggris.id/?br_code=PARE&${urlParam}`}> */}
            <button
              onClick={sendEventRegister}
              className="btn btn-circle btn-wide bg-secondaryLC text-black transition ease-in-out delay-150 hover:bg-secondaryLC/80 hover:-translate-y-1"
            >
              Daftar Sekarang
            </button>
            {/* </Link> */}

            {/* <Link href={`https://cs.kampunginggrislc.com/?cabang=pare&${urlParam}`}> */}
            <button
              onClick={sendEventCS}
              className="btn btn-circle btn-wide bg-primaryLC text-white transition ease-in-out delay-150 hover:bg-primaryLC/80 hover:-translate-y-1"
            >
              Konsultasi CS
            </button>
            {/* </Link> */}
          </div>
          <div className="divider"></div>
          <Link href="#program">
            <h2 className="text-white text-center">Learn More</h2>
          </Link>
          <div className="arrow flex items-center justify-center w-full">
            <svg
              className="animate-bounce fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 448 512"
            >
              <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
            </svg>
          </div>
        </article>
      </div>
    </div>
  );
}
