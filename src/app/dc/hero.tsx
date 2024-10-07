import ButtonConfetti from "@/components/Button/conffetiButton";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-amber-200 to-yellow-400">
      <section className="bg-dc">
        <div className="pt-4">
          <Image
            alt="desember ceria"
            src="/hero/hero dc.png"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <div className="p-5 space-y-5">
          <h1 className="text-3xl font-bold font-poppins">
            Liburan Asik: <span className="text-primaryLC">Belajar</span>,{" "}
            <span className="text-primaryLC">Berteman</span>, dan{" "}
            <span className="text-primaryLC">Bersenang-senang</span> Cuma di
            Kampung Inggris LC!
          </h1>
          <p className="text-lg">
            Nikmati momen liburan tak terlupakan bersama teacher asik, teman
            baru dari seluruh Indonesia, bonus outbound super fun!
          </p>
          <div>
            <ButtonConfetti />
            <p className="text-xs p-2">*Kuota terbatas setiap detiknya</p>
          </div>
        </div>
      </section>
    </div>
  );
}
