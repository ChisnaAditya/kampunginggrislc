"use client";

import { Divider } from "@nextui-org/divider";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CardTestimoni = dynamic(() => import("./cardTestimoni"), {});

export default function TabelHarga() {
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

  const CheckIcon = () => {
    return (
      <svg
        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  };

  const XIcon = () => {
    return (
      <svg
        className="flex-shrink-0 w-5 h-5 text-red-600 dark:text-red-500"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
    );
  };

  const fasilitas = [
    `Camp/asrama English Area`,
    `Assessment Test`,
    `Qualified & Experienced Teacher`,
    `4x Main Class & 2x Camp Class`,
    `Senin – Jumat`,
    `Extra Program`,
    `Modul Pembelajaran`,
    `Kaos LC, Jaket LC, Batik`,
    `Grammar, Speaking, Pronunciation`,
    `Liburan ke Bali`,
  ];

  const testiEM = [
    {
      avatar: "/alumni/monica-alumni-kampung-inggris-lc.webp",
      testi:
        "Dulu sebelum tau LC, susah banget rasanya buat belajar English. Tapi, setelah gabung LC, belajar English jadi terasa lebih mudah dan menyenangkan. Thanks to ilmu yang diberikan LC, aku berhasil dapetin apa yang aku mau dan jadi bagian dari SUPER CREW!",
      name: "Monica",
      job: "Pramugari",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/rizka-windi-alumni-kampung-inggris-lc.webp",
      testi:
        "Awal masuk aku cupu ga bisa apa-apa. Dari LC aku dapet banyak ilmu, pengalaman, vocab baru, dan temen dari Sabang sampai Merauke. Alhamdulillah, sekarang aku bisa jadi bagian dari Best Crew in The World.",
      name: "Rizka Windi",
      job: "Pramugari",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/annisa-nurul-alumni-kampung-inggris-lc.webp",
      testi:
        "Bagi saya 4 bulan di LC terasa sangat cepat. Saya mendapat predikat member teraktif dan nilai yang baik. Setelah itu saya memberanikan diri real test TOEFL, untuk nguji kemampuan. Alhamdulillah hasilnya melebihi target.",
      name: "Annisa Nurul",
      job: "Beasiswa Turki",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/alief-rasyafara-alumni-kampung-inggris-lc.webp",
      testi:
        "Pengalaman yang saya dapatkan luar biasa dari basic sampai jadi English master. Selama di LC, Saya mendapat materi yang luar biasa dari teacher dan tutor. Dapet teman baru yang saling mendukung dari sabang - merauke.",
      name: "Alief Rasyafara",
      job: "Finalis Putra Kebudayaan Sulawesi Selatan 2018",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/elvira-alumni-kampung-inggris-lc.webp",
      testi:
        "Weekly meeting, gathering, yasinan, table manner, outbound, jalan-jalan ke Bali, best camp competition, dan banyak lagi kegiatan asik lainnya. Bikin pertemanan naik level jadi keluarga yang berjuang bareng buat bisa bahasa Inggris.",
      name: "Elvira R",
      job: "English Teacher & Penulis Buku",
      program: "Alumni English Master",
    },
    {
      avatar: "/alumni/bagus-alumni-kampung-inggris-lc.webp",
      testi:
        "Melangkah tanpa persiapan matang buat aku harus lapang dada. Aku ga nyerah dan akhirnya ambil kursus di LC buat persiapan pendaftaran tahun depannya. Ternyata worth it banget, I’ve got much experience. Finally, I got what I dreamed of!",
      name: "Bagus",
      job: "Polisi",
      program: "Alumni English Master",
    },
  ];

  const testiIntensive = [
    {
      avatar: "/alumni/arbaz-alumni-kampung-inggris-lc.webp",
      testi:
        "Bagi saya LC itu tempat yang paling menyenangkan, di sana saya mendapatkan banyak hal baru; teman, pengalaman, dan yang paling penting saya belajar manajemen waktu dengan baik. Sangat berharga dan nggak bisa dilupain sampe sekarang.",
      name: "Mohamad Arbaz",
      job: "Pemeran FTV Indosiar",
      program: "Alumni Intensive Program",
    },
    {
      avatar: "/alumni/jarshaka-alumni-kampung-inggris-lc.webp",
      testi:
        "Saya ambil paket 2 bulan tapi nambah 1 bulan lagi, karena metode belajar di LC bagus banget, tutor yang asik, selain itu juga dapet teman yang super humble dari Sabang sampai Merauke.",
      name: "Jarshaka Syarif",
      job: "Aktor",
      program: "Alumni Intensive Program",
    },
    {
      avatar: "/alumni/mutia-alumni-kampung-inggris-lc.webp",
      testi:
        "LC memberikan banyak pengalaman baru yang belum pernah aku rasakan sebelumnya. Mulai dari ilmu, temen dan kelompoknya, dan kekeluargaannya tak terlupakan. Kedisiplinan dan English areanya super duper top banget.",
      name: "Mutia Koirun Nissa",
      job: "Putri Indonesia Sosmed (Jabar) 2018",
      program: "Alumni Intensive Program",
    },
    {
      avatar: "/alumni/rifa-alumni-kampung-inggris-lc.webp",
      testi:
        "Aku seneng banget bisa ke LC karena banyak pelajaran yang kuambil, temen dari seluruh Indonesia, manage keuangan, dan kemandirian. LC tuh kaya rumah kedua, semuanya berasa kaya keluarga.",
      name: "Rifa Dzahabiyyah",
      job: "Selebgram",
      program: "Alumni Intensive Program",
    },
    {
      avatar: "/alumni/naqita-alumni-kampung-inggris-lc.webp",
      testi:
        "Awalnya grammar saya masih berantakan, setelah gabung di Kampung Inggris LC saya merasakan banyak perubahan pada struktur kalimat bahasa Inggris.",
      name: "Naqita",
      job: "Selebgram TikTok",
      program: "Alumni Intensive Program",
    },
    {
      avatar: "/alumni/cut-putri-alumni-kampung-inggris-lc.webp",
      testi:
        "Menurutku yang paling seru itu kewajiban untuk speaking English, karena aku bisa practice dan ningkatin kemampuanku untuk komunikasi sehari-hari. Materi speaking, grammar, dan pronunciation. Well, 3 minggu di LC ga cukup harus nambah lagi.",
      name: "Cut Putri Firlianda",
      job: "Duta Genre Putri Aceh 2020",
      program: "Alumni Intensive Program",
    },
  ];

  return (
    <div
      id="paket"
      className="flex flex-col lg:flex-row justify-between gap-4 mt-10"
    >
      <div className="lg:w-[60%] p-4 shadow-xl rounded-xl bg-white">
        <h2 className="text-2xl max-w-xs pb-5">
          Program <span className="font-bold">English Master</span>
        </h2>
        <p className="max-w-lg">
          Program dengan materi lengkap dari <i>Grammar</i>, <i>Speaking</i>,{" "}
          <i>Pronunciation</i>,<i>Vocabulary</i>, gratis praktik ke Bali, dan
          Real Test TOEFL ITP untuk program 6 bulan.
        </p>
        <div className="flex gap-4 pt-5 overflow-scroll">
          <div className="shadow-xl rounded-xl p-4">
            <div className="flex justify-between border-[1px] border-red-200 p-2 mb-5 w-[250px] sm:w-full">
              <div>
                <h3 className="text-2xl font-bold">EM</h3>
                <Divider />
              </div>
              <div className="flex flex-col items-end">
                <p className="font-semibold text-primaryLC">Rp6.500.000</p>
                <p>4 bulan</p>
              </div>
            </div>

            <div>
              <p className="font-medium pb-2">Fasilitas:</p>
              {fasilitas.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <CheckIcon />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
              <div className="mt-2 p-2 bg-red-100">
                <div className="flex gap-2 py-1 line-through">
                  <XIcon />
                  Academic English TOEFL
                </div>
                <div className="flex gap-2 py-1 line-through">
                  <XIcon />
                  Preparation Real
                </div>
                <div className="flex gap-2 py-1 line-through">
                  <XIcon />
                  Real Test TOEFL
                </div>
              </div>
            </div>

            <div className="pt-10">
              <button
                className="w-full text-primaryLC font-bold text-lg rounded-xl py-2 border-[1px] border-primaryLC"
                onClick={() => {
                  window.location.href = `https://cs.kampunginggrislc.com/?${urlParam}&utm_content=em&paket=em/emp`;
                  window.gtag("event", "Click_TanyaCS", {
                    event_category: "click",
                    event_label: "Click_TanyaCS",
                    value: 99,
                  });
                  console.log("clicked tanyacs");
                }}
              >
                Daftar Program
              </button>
            </div>
          </div>
          <div className="shadow-xl rounded-xl p-4">
            <div className="flex justify-between border-[1px] border-green-200 p-2 mb-5 w-[250px] sm:w-full">
              <div>
                <h3 className="text-2xl font-bold">EMP</h3>
                <Divider />
              </div>
              <div className="flex flex-col items-end">
                <p className="font-semibold text-green-600">Rp9.500.000</p>
                <p>6 bulan</p>
              </div>
            </div>

            <div>
              <p className="font-medium pb-2">Fasilitas:</p>
              {fasilitas.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <CheckIcon />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
              <div className="p-2 mt-2 bg-green-100 font-medium">
                <div className="flex gap-2 py-1">
                  <CheckIcon />
                  Academic English TOEFL
                </div>
                <div className="flex gap-2 py-1">
                  <CheckIcon />
                  Preparation Real
                </div>
                <div className="flex gap-2 py-1">
                  <CheckIcon />
                  Real Test TOEFL
                </div>
              </div>
            </div>

            <div className="pt-10">
              <button
                className="w-full text-primaryLC font-bold text-lg rounded-xl py-2 border-[1px] border-primaryLC"
                onClick={() => {
                  window.location.href = `https://cs.kampunginggrislc.com/?${urlParam}&utm_content=em&paket=em/emp`;
                  window.gtag("event", "Click_TanyaCS", {
                    event_category: "click",
                    event_label: "Click_TanyaCS",
                    value: 99,
                  });
                  console.log("clicked tanyacs");
                }}
              >
                Daftar Program
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] pt-10">
        <div className="flex items-center justify-between w-full bg-gradient-to-r from-yellow-300 to-amber-400 p-4">
          <div className="">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block w-[70px] animate-infinite-slide-left"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 12L10 6M4 12L10 18M4 12H14.5M20 12H17.5"
                  stroke="#1C274C"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:hidden w-[70px] animate-bounce"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 20L18 14M12 20L6 14M12 20L12 9.5M12 4V6.5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl text-right sm:text-3xl max-w-xs pb-2">
              Set Your <span className="font-bold">English</span> Journey
            </h2>
            <p className="text-right max-w-xs ">
              83.333++ Member sudah merasakan{" "}
              <span className="font-bold text-neutral-900">
                asiknya belajar
              </span>{" "}
              di Kampung Inggris LC
            </p>
          </div>
        </div>
        <div className="sm:max-h-[60vh] flex overflow-scroll sm:overflow-hidden sm:[mask-image:_linear-gradient(to_top,transparent_0,_black_20px,_black_calc(100%-100px),transparent_100%)]">
          <div className="flex sm:flex-col gap-4 p-4 sm:space-y-4 sm:animate-infinite-scroll-y ">
            {testiEM.map((item, index) => (
              <div key={index}>
                <CardTestimoni
                  avatar={item.avatar}
                  nama={item.name}
                  program={item.program}
                  testimoni={item.testi}
                  job={item.job}
                />
              </div>
            ))}
          </div>
          <div className="flex sm:flex-col gap-4 p-4 sm:space-y-4 sm:animate-infinite-scroll-y-reverse">
            {testiIntensive.map((item, index) => (
              <div key={item.name}>
                <CardTestimoni
                  avatar={item.avatar}
                  nama={item.name}
                  program={item.program}
                  testimoni={item.testi}
                  job={item.job}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
