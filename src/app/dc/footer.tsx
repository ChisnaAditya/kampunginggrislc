"use client";
import { Button } from "@nextui-org/button";

export default function FooterDC() {
  return (
    <section className="pt-20 bg-footer-dc">
      <div className="bg-red-400/80 min-h-[300px] flex flex-col items-center justify-center lg:justify-evenly px-4">
        <p className="max-w-lg text-center text-2xl lg:text-4xl text-slate-900 font-bold">
          Jangan sia-siakan liburanmu cuma buat rebahan.
        </p>
        <Button
          className="bg-secondaryLC text-black/70 lg:text-xl font-bold mt-5 lg:w-fit"
          onClick={() => (window.location.href = "#paket")}
        >
          Ayo Daftar Sekarang!
        </Button>
      </div>
      <div className=" relative  py-10">
        <p className="text-center text-xs px-10">
          Kampung Inggris LC @2024 All Right Reserved. Terms of use and Privacy
          Policy
        </p>
      </div>
    </section>
  );
}
