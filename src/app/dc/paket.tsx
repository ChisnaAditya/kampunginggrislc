"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function Paket() {
  const [urlParam, setUrlParam] = useState("");
  const searchParams = useSearchParams();
  const utm_source = searchParams.get("utm_source") || ("" as string);
  const utm_medium = searchParams.get("utm_medium") || ("" as string);
  const utm_campaign = searchParams.get("utm_campaign") || ("" as string);

  const targetDate = "2024–10–10T00:00:00";

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
    <section id="paket" className="relative max-w-7xl mx-auto mt-10 ">
      <hr className="lg:my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

      <div className="flex flex-col items-center justify-center p-5">
        <div className="mt-10 text-center space-y-2">
          <div className="">Khusus buat kamu</div>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins">
            Dapatkan Extra Diskon
          </h2>
          <p className="text-black/70 pb-4 lg:pt-2 lg:text-lg xl:text-xl max-w-xl mx-auto">
            buat kamu yang <b>daftar bertiga</b> yang mau{" "}
            <b>ngajak bestie-nya</b> untuk daftar program liburan Desember Ceria
            bareng
          </p>
        </div>
        <Image
          alt="promo 3in1 desember ceria"
          src={"/icon/dc/promo3in1.webp"}
          width={500}
          height={500}
          className="my-1 mx-auto"
        />
        <p className="py-5 text-center">
          Info lebih lanjut tanyakan ke CS kami yaaa
        </p>
        <Button
          size="lg"
          className="bg-emerald-600 text-white lg:text-xl font-bold w-fit"
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
          Tanya Promo Diskon
        </Button>
      </div>

      <div className="px-5 pt-20 lg:text-center">
        <div className="text-center">
          <div className="">Harga Program</div>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins">
            Desember Ceria
          </h2>
          <p className="text-black/70 pb-4 lg:pt-2 lg:text-lg xl:text-xl">
            Yang bisa kamu pilih sesuai kebutuhanmu
          </p>
        </div>

        <div className="flex flex-wrap lg:justify-center gap-10 py-5 mt-4 no-scrollbar">
          <div className="w-full lg:w-fit">
            <div className="relative w-full lg:w-[400px]">
              <h3 className="absolute -top-4 left-[50%] translate-x-[-50%] font-bold text-sm lg:text-xl text-center text-primaryLC bg-white uppercase rounded-full border-black  border-[1px] w-[250px] lg:w-3/4 px-8 py-1">
                Program 1 Minggu
              </h3>
              <div className="rounded-[10px] border-black  border-[1px] text-center py-5 lg:py-10 lg:space-y-4">
                <p className="text-lg lg:text-xl pt-2">Harga Normal</p>
                <p className="text-3xl lg:text-4xl font-bold line-through italic">
                  Rp1.150.000
                </p>
                <p className="text-lg lg:text-2xl text-emerald-700 font-bold">
                  Special Price
                </p>
                <p className="text-4xl lg:text-5xl text-yellow-400 text-stroke font-poppins font-bold">
                  Rp1.050.000
                </p>
                <p className="text-lg lg:text-2xl font-bold border-black border-[1px] bg-green-400 w-fit mx-auto rounded-[10px] px-4 py-1 mt-2">
                  DP: 210.000
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-fit">
            <div className="relative w-full lg:w-[400px]">
              <h3 className="absolute -top-4 left-[50%] translate-x-[-50%] font-bold text-sm lg:text-xl text-center text-primaryLC bg-white uppercase rounded-full border-black  border-[1px] w-[250px] lg:w-3/4 px-8 py-1">
                Program 2 Minggu
              </h3>
              <div className="rounded-[10px] border-black  border-[1px] text-center py-5 lg:py-10 lg:space-y-4">
                <p className="text-lg lg:text-xl pt-2">Harga Normal</p>
                <p className="text-3xl lg:text-4xl font-bold line-through italic">
                  Rp1.850.000
                </p>
                <p className="text-lg lg:text-2xl text-emerald-600 font-bold">
                  Special Price
                </p>
                <p className="text-4xl lg:text-5xl text-yellow-400 text-stroke font-poppins font-bold">
                  Rp1.750.000
                </p>
                <p className="text-lg lg:text-2xl font-bold border-black border-[1px] bg-green-400 w-fit mx-auto rounded-[10px] px-4 py-1 mt-2">
                  DP: Rp350.000
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs lg:text-xl">
          <b>Tanggal Mulai:</b> 16, 23, 30 Desember 2024
        </p>
        <p className="text-xs lg:text-xl">Min. Kelas 5 SD - Umum</p>
        <p className="text-3xl italic text-center my-5 text-primaryLC max-w-lg mx-auto">
          &quot;FYI: Tahun kemaren banyak siswa yang kehabisan kuota liburan di
          LC loh. Sayang bangettt kan 🥹&quot;
        </p>
        <p className="text-center lg:text-xl max-w-lg mx-auto">
          Daripada kamu bernasib sama, mending daftar program sekarang deh!{" "}
        </p>
      </div>

      <div className="p-5 flex flex-col items-center">
        <svg
          className=" fill-primaryLC w-[100px] lg:w-[70px] animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g data-name="Double down">
            <path d="M12 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 14.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 17z" />
            <path d="M12 13a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 12 13z" />
          </g>
        </svg>
        <Button
          size="lg"
          className="bg-primaryLC text-white lg:text-xl font-bold w-full lg:w-fit lg:mx-auto"
          onClick={() => {
            window.location.href = `https://registrasi.kampunginggris.id/?${urlParam}&utm_content=dc2024&br_code=pare`;
            window.gtag("event", "Click_Register", {
              event_category: "click",
              event_label: "Click_Register",
              value: 99,
            });
            console.log("clicked register");
          }}
        >
          Daftar Program di Sini
        </Button>
        <p className="py-10 text-center lg:text-xl max-w-lg mx-auto">
          Kalau kamu masih bingung <i>nentuin</i> pilihan program, Yuk
          konsultasi program dulu!
        </p>
        <svg
          className=" fill-emerald-500 w-[100px] lg:w-[70px] animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g data-name="Double down">
            <path d="M12 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 14.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 17z" />
            <path d="M12 13a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 12 13z" />
          </g>
        </svg>
        <Button
          size="lg"
          className="bg-emerald-600 text-white lg:text-xl font-bold w-full lg:w-fit lg:mx-auto"
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
          Konsultasi via Whatsapp
        </Button>

        <div className="text-center shadow-inner rounded-2xl bg-gradient-to-b from-[#fcce00b5] to-[#fca800d6] mt-20 lg:w-[350px] mx-auto">
          <Image
            alt="arning"
            src="/icon/dc/warning.png"
            width={150}
            height={150}
            className="mx-auto"
          />
          <p className="text-primaryLC text-4xl font-poppins font-bold animate-pulse">
            WARNING!
          </p>
          <p className="text- text-black text-center p-4">
            Untuk menjaga kualitas belajar, kami{" "}
            <b className="text-seconaryLC">MEMBATASI KUOTA</b> dan akan{" "}
            <b className="text-primaryLC">MENUTUP PENDAFTARAN</b> sewaktu-waktu
            jika kuota sudah terpenuhi.
          </p>
        </div>
        <p className="text-center mt-5 mb-20 max-w-lg">
          Saran kami, yuk amankan kuotamu sekarang juga dengan cara mendaftar
          dan membayar <b>DP 20%</b>.
        </p>
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
