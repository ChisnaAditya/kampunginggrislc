"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Paket() {
  const [urlParam, setUrlParam] = useState("");
  const searchParams = useSearchParams();
  const utm_source = searchParams.get("utm_source") || ("" as string);
  const utm_medium = searchParams.get("utm_medium") || ("" as string);
  const utm_campaign = searchParams.get("utm_campaign") || ("" as string);

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

  useEffect(() => {
    setUrlParam(
      `utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
    );
    setToLocalStorage();
  }, [utm_source, utm_medium, utm_campaign]);

  return (
    <section id="paket" className="relative max-w-7xl mx-auto mt-10">
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <div className="p-5 lg:p-0 lg:text-center">
        <h2 className="text-2xl lg:text-4xl font-bold font-poppins">
          Program {"  "}
          <span className="px-2 bg-gradient-to-b from-amber-200 to-yellow-400">
            Desember Ceria
          </span>{" "}
        </h2>
        <p className="text-md lg:text-xl max-w-lg lg:mx-auto lg:mt-4 text-slate-600">
          Liburan sambil belajar bahasa Inggris di Kampung Inggris LC{" "}
          <b>bareng 1.000 siswa lainnya</b>
        </p>

        <div className="flex lg:justify-center gap-4 py-5 overflow-scroll mt-4">
          <div>
            <div className="relative w-[250px] lg:w-[400px]">
              <h3 className="absolute -top-4 left-[50%] translate-x-[-50%] font-bold text-sm lg:text-xl bg-white uppercase rounded-full border-black  border-[1px] w-fit px-8 py-1">
                Program 1 Minggu
              </h3>
              <div className="rounded-[10px] border-black  border-[1px] text-center py-5 lg:py-10 lg:space-y-4">
                <p className="text-lg lg:text-xl">Harga Normal</p>
                <p className="text-3xl lg:text-4xl font-bold line-through italic">
                  Rp1.050.000
                </p>
                <p className="text-lg lg:text-xl text-primaryLC font-bold mt-4">
                  Special Price
                </p>
                <p className="text-4xl lg:text-5xl text-yellow-400 text-stroke font-poppins font-bold">
                  Rp990.000
                </p>
                <p className="text-lg lg:text-2xl font-bold border-black border-[1px] bg-green-400 w-fit mx-auto rounded-[10px] px-4 py-1 mt-2">
                  DP: Rp198.000
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-[250px] lg:w-[400px]">
              <h3 className="absolute -top-4 left-[50%] translate-x-[-50%] font-bold text-sm lg:text-xl bg-white uppercase rounded-full border-black  border-[1px] w-fit px-8 py-1">
                Program 2 Minggu
              </h3>
              <div className="rounded-[10px] border-black  border-[1px] text-center py-5 lg:py-10 lg:space-y-4">
                <p className="text-lg lg:text-xl">Harga Normal</p>
                <p className="text-3xl lg:text-4xl font-bold line-through italic">
                  Rp1.750.000
                </p>
                <p className="text-lg lg:text-xl text-primaryLC font-bold mt-4">
                  Special Price
                </p>
                <p className="text-4xl lg:text-5xl text-yellow-400 text-stroke font-poppins font-bold">
                  Rp1.700.000
                </p>
                <p className="text-lg lg:text-2xl font-bold border-black border-[1px] bg-green-400 w-fit mx-auto rounded-[10px] px-4 py-1 mt-2">
                  DP: Rp340.000
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs lg:text-xl">
          <b>Tanggal Mulai:</b> 16, 23, 30 Desember 2024
        </p>
        <p className="text-xs lg:text-xl">Min. Kelas 5 SD - Umum</p>
        <Button
          className="bg-primaryLC text-white lg:text-xl font-bold mt-5"
          onClick={() => {
            window.location.href = `https://cs.kampunginggrislc.com/?${urlParam}&utm_content=dc2024&paket=desember ceria`;
            window.gtag("event", "Click_TanyaCS", {
              event_category: "click",
              event_label: "Click_TanyaCS",
              value: 99,
            });
            console.log("clicked tanyacs");
          }}
        >
          Daftar Program di Sini
        </Button>
        <p className="text-xs p-1">*Berlaku sampai 31 Oktober 2024</p>
      </div>
      <Image
        alt="desember ceria"
        src="/hero/dc/bola dc.png"
        width={200}
        height={200}
        className="hidden lg:block absolute right-0 bottom-[80%] w-[300px] animate-infinite-floating"
      />
      <Image
        alt="desember ceria"
        src="/hero/dc/bola kecil dc.png"
        width={200}
        height={200}
        className="hidden lg:block absolute right-[90%] bottom-[30%] w-[100px] animate-infinite-floating"
      />
    </section>
  );
}
