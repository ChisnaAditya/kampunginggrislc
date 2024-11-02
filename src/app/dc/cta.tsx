"use client";
import Image from "next/image";

export default function CTA() {
  return (
    <div
      className="lg:relative min-h-[150px] lg:min-h-[300px]"
      onClick={() => (window.location.href = "#paket")}
    >
      <Image
        alt="logo lc"
        src="/icon/dc/cta banner.jpg"
        width={500}
        height={500}
        className="cursor-pointer w-full rounded-lg shadow-2xl transition duration-200 ease-out transform translate-x-0 translate-y-0 hover:-translate-x-1 hover:-translate-y-1"
      />
    </div>
  );
}
