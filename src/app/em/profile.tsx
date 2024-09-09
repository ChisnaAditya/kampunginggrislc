import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
export default function Profile() {
  return (
    <section className="flex items-center justify-center gap-10 pb-32 my-20 bg-pattern-profile-em [mask-image:_linear-gradient(to_bottom,transparent_0,_black_10px,_black_calc(100%-100px),transparent_100%)]">
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
          {/* <Button className="text-white font-medium bg-red-600 text-2xl px-16 py-6">
            Daftar Sekarang
          </Button> */}
          <Button
            className="bg-transparent border-[1px] border-black text-xl font-medium px-10 py-3"
            endContent
          >
            Konsultasi Gratis
          </Button>
        </div>
      </div>
      <div>
        <Image
          alt="program english master kampung inggris lc"
          src="/keseruan/em/1.webp"
          width={500}
          height={500}
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
