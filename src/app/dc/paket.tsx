"use client";
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
    <section id="paket" className="p-5">
      <h2 className="text-2xl font-bold font-poppins">
        <span className="px-2 bg-gradient-to-r from-amber-200 to-yellow-400">
          Program
        </span>{" "}
        Desember Ceria
      </h2>
      <p className="text-md text-slate-600">
        Liburan sambil belajar bahasa Inggris di Kampung Inggris LC{" "}
        <b>bareng 1.000 siswa lainnya</b>
      </p>

      <div className="flex gap-4 py-5 overflow-scroll mt-4">
        <div>
          <div className="relative w-[250px] ">
            <h3 className="absolute -top-4 left-[50%] translate-x-[-50%] font-bold bg-white uppercase rounded-full border-black  border-[1px] w-fit px-2 py-1">
              Program 1 Minggu
            </h3>
            <div className="rounded-[10px] border-black  border-[1px] text-center py-5">
              <p className="text-lg">Harga Normal</p>
              <p className="text-3xl font-bold line-through italic">
                Rp. 1.050.000
              </p>
              <p className="text-lg text-primaryLC font-bold mt-4">
                Special Price
              </p>
              <p className="text-4xl text-yellow-400 text-stroke font-poppins font-bold">
                Rp. 990.000
              </p>
              <p className="text-lg font-bold border-black border-[1px] bg-green-400 w-fit mx-auto rounded-[10px] px-4 py-1 mt-2">
                DP: Rp. 198.000
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-[250px] ">
            <h3 className="absolute -top-4 left-[50%] translate-x-[-50%] font-bold bg-white uppercase rounded-full border-black  border-[1px] w-fit px-2 py-1">
              Program 2 Minggu
            </h3>
            <div className="rounded-[10px] border-black  border-[1px] text-center py-5">
              <p className="text-lg">Harga Normal</p>
              <p className="text-3xl font-bold line-through italic">
                Rp. 1.750.000
              </p>
              <p className="text-lg text-primaryLC font-bold mt-4">
                Special Price
              </p>
              <p className="text-4xl text-yellow-400 text-stroke font-poppins font-bold">
                Rp. 1.700.000
              </p>
              <p className="text-lg font-bold border-black border-[1px] bg-green-400 w-fit mx-auto rounded-[10px] px-4 py-1 mt-2">
                DP: Rp. 340.000
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs">
        <b>Tanggal Mulai:</b> 16, 23, 30 Desember 2024
      </p>
      <p className="text-xs">Min. Kelas 5 SD - Umum</p>
      <Button
        className="bg-primaryLC text-white font-bold mt-5"
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
    </section>
  );
}
