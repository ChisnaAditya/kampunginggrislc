import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row lg:px-10 items-center justify-center bg-gradient-to-r from-yellow-300 to-amber-400">
      <div className="lg:w-full flex flex-col gap-4 p-4 max-w-xl md:max-w-2xl">
        <p className="bg-gradient-to-r from-slate-400 via-red-300 to-amber-200 bg-clip-text text-transparent">
          #DrivesYourSuccess
        </p>
        <h1 className="text-3xl lg:text-4xl font-semibold leading-[1.2em] sm:leading-[1.3em]">
          Belajar Bahasa Inggris dari{" "}
          <span className="text-white bg-red-600 px-2">Basic</span> hingga{" "}
          <span className="text-white bg-red-600 px-2">Mahir</span> di
          Lingkungan yang Mendukung
        </h1>
        <p className="text-lg">
          Gak cuma teori, nikmati praktik bahasa Inggris setiap hari + BONUS
          LIBURAN KE BALI DAN REAL TEST TOEFL ITP
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <Link href="#paket">
            <button className="rounded-full w-full text-white font-medium bg-red-600 text-xl px-5 py-2">
              Join Now
            </button>
          </Link>
          <Link href="#overview">
            <button className="rounded-full w-full bg-transparent border-[1px] border-black text-xl font-medium px-5 py-2">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-full drop-shadow-2xl animate-appearance-in pt-5 ">
        <Image
          alt="hero image program english master kampung inggris lc"
          src="/hero/hero-em-gapyear.webp"
          width={500}
          height={500}
          className="rounded-xl w-[300px] lg:w-[500px] mx-auto"
          priority
        />
      </div>
    </section>
  );
}
