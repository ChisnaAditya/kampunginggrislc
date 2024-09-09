import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-center justify-evenly sm:pt-20 bg-gradient-to-r from-yellow-300 to-amber-400">
      <div className="flex flex-col gap-4 p-4 sm:p-0">
        <p className="hidden sm:block bg-gradient-to-r from-slate-400 via-red-300 to-amber-200 bg-clip-text text-transparent">
          #DrivesYourSuccess
        </p>
        <h1 className="text-3xl sm:text-5xl max-w-xl font-semibold leading-[1.2em] sm:leading-[1.3em]">
          Belajar Bahasa Inggris dari{" "}
          <span className="text-white bg-red-600 px-2">Basic</span> hingga{" "}
          <span className="text-white bg-red-600 px-2">Mahir</span> di
          Lingkungan yang Mendukung
        </h1>
        <p className="max-w-xl text-lg">
          Gak cuma teori, nikmati praktik bahasa Inggris setiap hari + BONUS
          LIBURAN KE BALI DAN REAL TEST TOEFL ITP
        </p>
        <div className="flex gap-4 w-full">
          <Link href="#paket">
            <Button className="text-white font-medium bg-red-600 text-2xl sm:px-16 sm:py-6">
              Join Now
            </Button>
          </Link>
          <Link href="#overview">
            <Button
              className="bg-transparent border-[1px] border-black text-2xl font-medium sm:px-16 sm:py-6"
              endContent
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div className="drop-shadow-2xl animate-appearance-in">
        <Image
          alt="hero image program english master kampung inggris lc"
          src="/hero/hero-em-gapyear.webp"
          width={500}
          height={500}
          className="rounded-xl"
          priority
        />
      </div>
    </section>
  );
}
