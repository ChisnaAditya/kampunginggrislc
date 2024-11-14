"use client";
import Image from "next/image";

export default function CTA() {
  return (
    <div
      className="lg:relative min-h-[150px] lg:min-h-[300px] py-20"
      onClick={() => (window.location.href = "#paket")}
    >
      <Image
        alt="logo lc"
        src="/icon/dc/cta banner.jpg"
        width={500}
        height={500}
        className="cursor-pointer w-full"
      />
    </div>
  );
}
