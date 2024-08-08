"use client";
import Image from "next/image";
import Link from "next/link";
import paket_1 from "../../assets/paket/kampung-inggris-lc-paket-1-intensive-2-week.webp";
import paket_2 from "../../assets/paket/kampung-inggris-lc-paket-2-intensive-1-month.webp";
import paket_3 from "../../assets/paket/kampung-inggris-lc-paket-3-intensive-2-month.webp";
import paket_4 from "../../assets/paket/kampung-inggris-lc-paket-4-intensive-3-month.webp";
import paket_5 from "../../assets/paket/kampung-inggris-lc-paket-5-EM4.webp";
import paket_6 from "../../assets/paket/kampung-inggris-lc-paket-6-EM6.webp";
import paket_7 from "../../assets/paket/kampung-inggris-lc-paket-7-full-service.webp";
import paket_8 from "../../assets/paket/kampung-inggris-lc-paket-8-toefl.webp";
import kalender from "../../assets/kalender-akademik-2024.webp";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Program() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const handleChangeInput = (e: any) => {
    setCurrentProduct(e.target.value);
  };
  const pakets = [
    {
      img: paket_1,
      title: "Paket Intensive 2 Minggu",
      desc: "Program ini dirancang untuk kamu yang ingin meningkatkan kemampuan bahasa Inggris secara general mulai dari dasar dalam waktu 2 minggu. Dengan durasi yang relatif singkat kamu akan dilatih untuk percaya diri dan berbicara menggunakan bahasa Inggris secara sederhana.",
      price: "Rp. 950.000",
      link: "/intensive",
    },
    {
      img: paket_2,
      title: "Paket Intensive 1 Bulan",
      desc: "Program ini dirancang untuk kamu yang ingin meningkatkan kemampuan bahasa Inggris secara general mulai dari dasar dalam waktu 1 bulan. Dengan durasi 1 bulan, kamu akan dilatih untuk percaya diri. Peserta mampu membuat kalimat, mengungkapkan serta mengaplikasikannya dalam kehidupan sehari-hari dengan menggunakan bahasa inggris yang baik dan benar.",
      price: "Rp. 1.600.000",
      link: "/intensive",
    },
    {
      img: paket_3,
      title: "Paket Intensive 2 Bulan",
      desc: "Program ini dirancang untuk kamu yang ingin meningkatkan kemampuan bahasa Inggris secara general mulai dari dasar dalam waktu 2 bulan. Dengan durasi 2 bulan, kamu akan dilatih untuk percaya diri. Peserta mampu membuat kalimat, mengungkapkan serta mengaplikasikannya dalam kehidupan sehari-hari dengan menggunakan bahasa inggris yang baik dan benar.",
      price: "Rp. 2.975.000",
      link: "/intensive",
    },
    {
      img: paket_4,
      title: "Paket Intensive 3 Bulan",
      desc: "Program ini dirancang untuk kamu yang ingin meningkatkan kemampuan bahasa Inggris secara general mulai dari dasar dalam waktu 3 bulan. Dengan durasi 3 bulan, kamu akan dilatih untuk percaya diri dan aktif berbicara bahasa Inggris. Peserta mampu merespon kalimat yang diucapkan oleh native speaker (by audio/video), mampu membuat mapping point dan rangkuman untuk dipresentasikan di depan publik.",
      price: "Rp. 4.200.000",
      link: "/intensive",
    },
    {
      img: paket_5,
      title: "Paket English Master 4 Bulan",
      desc: "Paket ini cocok buat kamu yang mempunyai banyak waktu luang dan inggin belajar bahasa Inggris dari dasar secara lengkap, meliputi grammar, speaking, pronunciation dan vocabulary, yang dipadukan dengan camp english area. Sehingga kamu bisa praktik berbicara bahasa Inggris setiap hari bersama teman dan teacher camp. Goals dari paket ini adalah meningkatkan rasa percaya diri sehingga bisa lancar speaking. Diakhir program akan ada ujian praktik speaking yang dilakukan langsung ke Bali.",
      price: "Rp. 6.500.000",
      link: "/english-master",
    },
    {
      img: paket_6,
      title: "Paket English Master 6 Bulan",
      desc: "Paket ini cocok buat kamu yang mempunyai banyak waktu luang dan inggin belajar bahasa Inggris dari dasar secara lengkap, meliputi grammar, speaking, pronunciation dan vocabulary, yang dipadukan dengan camp english area. Sehingga kamu bisa praktik berbicara bahasa Inggris setiap hari bersama teman dan teacher camp. Goals dari paket ini adalah meningkatkan rasa percaya diri sehingga bisa lancar speaking. Diakhir program akan ada ujian praktik speaking yang dilakukan langsung ke Bali.",
      price: "Rp. 9.500.000",
      link: "/english-master",
    },
    {
      img: paket_7,
      title: "Paket Full Service 1 Bulan",
      desc: "Program ini dirancang untuk kamu yang ingin meningkatkan kemampuan bahasa Inggris secara general mulai dari dasar dalam waktu 1 bulan. Dengan durasi 1 bulan, kamu akan dilatih untuk percaya diri. Peserta mampu membuat kalimat, mengungkapkan serta mengaplikasikannya dalam kehidupan sehari-hari dengan menggunakan bahasa Inggris yang baik dan benar.",
      price: "Rp. 2.620.000",
      link: "https://cs.kampunginggrislc.com/",
    },
    {
      img: paket_8,
      title: "Paket TOEFL Mastery 1 Bulan",
      desc: "Peserta mampu mengerjakan soal-soal TOEFL ITP dengan mudah  menggunakan tips & trik yang sudah diajarkan",
      price: "Rp. 1.750.000",
      link: "https://cs.kampunginggrislc.com/",
    },
  ];

  const [urlParam, setUrlParam] = useState("");
  const searchParams = useSearchParams();
  const utm_source =
    searchParams.get("utm_source") ||
    ("program.kampunginggrislc.com" as string);
  const utm_medium = searchParams.get("utm_medium") || ("btntanyacs" as string);
  const utm_campaign =
    searchParams.get("utm_campaign") || ("organik" as string);

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
    <div
      id="program"
      className="container flex flex-col lg:flex-row items-center justify-center w-full min-h-screen py-10"
    >
      <div>
        <article className="prose flex flex-col w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            Pilih <span className="italic text-primaryLC">Paket Belajar</span>{" "}
            Sesuai Kebutuhanmu
          </h1>
        </article>
        <div className="w-full">
          <div className="flex flex-wrap-reverse items-center justify-center">
            <Link href={pakets[currentProduct].link} className="lg:hidden">
              <button className="btn btn-circle btn-wide bg-primaryLC text-white transition ease-in-out delay-150 hover:bg-primaryLC/80 hover:-translate-y-1 my-3">
                Detail Program
              </button>
            </Link>
            <Image
              alt="kampung inggris lc paket"
              src={pakets[currentProduct].img}
              className="lg:w-1/4 w-full object-cover object-center rounded border border-warning"
            />
            <article className="prose lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm">NAMA PROGRAM</h2>
              <h1 className="text-3xl font-medium mb-1">
                {pakets[currentProduct].title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </span>
              </div>
              <p className="text-sm leading-tight">
                {pakets[currentProduct].desc}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Pilihan</span>
                  <div className="relative">
                    <select
                      aria-label="pilihan paket"
                      onChange={handleChangeInput}
                      className="select select-bordered w-full max-w-xs"
                    >
                      {pakets.map((paket, index) => (
                        <option value={index} key={index}>
                          {paket.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium text-lg">
                  {pakets[currentProduct].price}
                </p>
                <div className="flex items-center justify-center">
                  <Link
                    href={`https://registrasi.kampunginggris.id/?br_code=PARE&${urlParam}`}
                    passHref={true}
                  >
                    <button className="btn btn-circle w-32 bg-secondaryLC text-black transition ease-in-out delay-150 hover:bg-secondaryLC/80 hover:-translate-y-1">
                      Daftar Sekarang
                    </button>
                  </Link>
                  <Link
                    href={pakets[currentProduct].link}
                    className="hidden lg:block"
                  >
                    <button className="btn btn-circle w-32 bg-primaryLC text-white transition ease-in-out delay-150 hover:bg-primaryLC/80 hover:-translate-y-1 my-3">
                      Detail Program
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Image
        alt="kalender akademik 2024"
        src={kalender}
        className="pt-10 md:w-1/4 md:pt-0"
      />
    </div>
  );
}
