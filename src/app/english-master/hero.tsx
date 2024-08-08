"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-gradient-to-b from-yellow-300 to-secondaryLC">
      <div className="w-full p-[1rem]">
        <article className="lg:pl-[5rem] lg:pt-[2rem]">
          <Image
            alt="logo kampung inggris lc"
            src="/Logo LC.png"
            className="mx-auto"
            width={100}
            height={100}
          />
          <h1 className="text-slate-900 font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-center lg:text-left">
            Belajar Bahasa Inggris dari{" "}
            <span className="text-primaryLC">Basic hingga Mahir</span>
          </h1>
          <p className="text-slate-900 font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-center lg:text-left">
            di Lingkungan yang Mendukung
          </p>
          <h2 className="py-4 text-lg sm:text-xl lg:text-2xl text-slate-800 text-center lg:text-left max-w-xl">
            Gak cuma teori, nikmati praktik bahasa Inggris setiap hari +{" "}
            <b className="font-bold">
              BONUS LIBURAN KE BALI DAN REAL TEST TOEFL ITP
            </b>
          </h2>
          <Link
            href="#overview"
            aria-label="overview"
            className="hidden text-center w-[300px] lg:btn lg:bg-primaryLC hover:bg-primaryLC/80 lg:text-white  lg:text-[24px] lg:rounded-2xl border-none"
          >
            JOIN NOW
          </Link>
        </article>
      </div>

      <Link
        href="#overview"
        aria-label="overview"
        className="lg:hidden w-[300px] mb-4 text-center text-bold bg-primaryLC hover:bg-primaryLC/80 text-slate-50 text-[24px] rounded-xl border-none"
      >
        JOIN NOW
      </Link>

      <div className="sm:hidden w-[80%] mx-auto overflow-hidden">
        <Image
          alt="hero image program em/emp kampung inggris lc"
          // src="/hero/hero-em-gapyear.webp"
          src="/hero/Hero Image EM mobile.webp"
          className="sm:scale-[1.01] xl:scale-[1.1]"
          width={405}
          height={512}
          priority
        />
      </div>

      <div className="hidden sm:block w-[80%] mx-auto overflow-hidden">
        <Image
          alt="hero image program em/emp kampung inggris lc"
          src="/hero/hero-em-gapyear.webp"
          // src="/hero/Hero Image EM mobile.webp"
          className="sm:scale-[1.01] xl:scale-[1.1]"
          width={810}
          height={1024}
          priority
        />
      </div>
    </div>
  );
}
