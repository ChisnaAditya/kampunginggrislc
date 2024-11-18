import ButtonConfetti from "@/components/Button/ButtonConfetti";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#F5D062]">
      <section className="relative bg-dc min-h-[720px] lg:min-h-screen">
        <Image
          alt="desember ceria"
          src="/hero/dc/jam dc.png"
          width={200}
          height={200}
          className="hidden lg:block absolute right-[75%] bottom-1/2 w-auto h-auto animate-infinite-floating"
        />
        <Image
          alt="desember ceria"
          src="/hero/dc/bola dc.png"
          width={200}
          height={200}
          className="hidden lg:block absolute right-0 lg:top-[20%] xl:w-[300px] animate-infinite-floating"
        />
        <Image
          alt="desember ceria"
          src="/hero/dc/cacing dc.png"
          width={200}
          height={200}
          className="hidden lg:block absolute right-[10%] bottom-[50%] xl:w-[300px] animate-infinite-floating"
        />
        <Image
          alt="desember ceria"
          src="/hero/dc/bola kecil dc.png"
          width={200}
          height={200}
          className="hidden lg:block absolute right-[70%] bottom-[30%] w-[100px] animate-infinite-floating"
        />
        <div className="p-5 space-y-4 lg:space-y-6 xl:space-y-10 lg:pt-10">
          <h1 className="text-[28px] lg:text-4xl xl:text-5xl font-bold font-poppins text-center leading-[1.2] lg:max-w-3xl xl:max-w-4xl mx-auto">
            Liburan Asik: <span className="text-primaryLC">Belajar</span>,{" "}
            <span className="text-primaryLC">Berteman</span>, dan{" "}
            <span className="text-primaryLC">Bersenang-senang</span> Cuma di
            Kampung Inggris LC!
          </h1>
          <p className="text-lg lg:text-xl text-center max-w-lg mx-auto">
            Nikmati momen liburan tak terlupakan bersama teacher asik, teman
            baru dari seluruh Indonesia,{" "}
            <b>
              bonus <i>outbound ke Simpang Lima Gumul!</i>
            </b>
          </p>
          <div className="flex flex-col items-center">
            <ButtonConfetti />
            <p className="text-xs p-2">*Kuota terbatas setiap detiknya</p>
          </div>
        </div>
      </section>
    </div>
  );
}
