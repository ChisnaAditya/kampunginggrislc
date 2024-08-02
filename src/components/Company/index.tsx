"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";
import partnership_1 from "../../assets/kampung-inggris-lc-pare-partnership-1.webp";
import partnership_2 from "../../assets/kampung-inggris-lc-pare-partnership-2.webp";
import partnership_3 from "../../assets/kampung-inggris-lc-pare-partnership-3.webp";
import partnership_4 from "../../assets/kampung-inggris-lc-pare-partnership-4.webp";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Company() {
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

  const sendEventCS = () => {
    window.gtag("event", "btnCS-3", {
      posisi: "Partnership",
    });
    window.location.href = `https://cs.kampunginggrislc.com/?cabang=pare&${urlParam}`;
  };

  const sendEventRegister = () => {
    window.gtag("event", "btnRegister-3", {
      posisi: "Partnership",
    });
    window.location.href = `https://registrasi.kampunginggris.id/?br_code=PARE&${urlParam}`;
  };

  useEffect(() => {
    setUrlParam(
      `utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
    );
    setToLocalStorage();
  }, [utm_source, utm_medium, utm_campaign]);

  return (
    <div className="py-20 flex flex-col items-center justify-center gap-4">
      <article className="prose text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          Mereka Sudah Belajar di
          <span className="italic text-primaryLC"> Kampung Inggris LC</span>
        </h1>
      </article>

      <div className="container py-10">
        <Swiper
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <Image
              alt="kampung inggris lc partnership"
              src={partnership_1}
              className="rounded-box"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="kampung inggris lc partnership"
              src={partnership_2}
              className="rounded-box"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="kampung inggris lc partnership"
              src={partnership_3}
              className="rounded-box"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="kampung inggris lc partnership"
              src={partnership_4}
              className="rounded-box"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <article className="prose">
        <h1 className="text-2xl text-center">Sekarang Giliranmu</h1>
      </article>

      <div className="arrow flex items-center justify-center w-full">
        <svg
          className="animate-bounce fill-base-content"
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          width="30"
          viewBox="0 0 448 512"
        >
          <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
        </svg>
      </div>
      <div className="btns flex flex-col lg:flex-row items-center justify-center gap-4">
        {/* <Link href={`https://registrasi.kampunginggris.id/?br_code=PARE&${urlParam}`} > */}
        <button
          onClick={sendEventRegister}
          className="btn btn-circle btn-wide bg-secondaryLC text-black transition ease-in-out delay-150 hover:bg-secondaryLC/80 hover:-translate-y-1"
        >
          Daftar Sekarang
        </button>
        {/* </Link> */}

        {/* <Link href={`https://cs.kampunginggrislc.com/?cabang=pare&${urlParam}`} > */}
        <button
          onClick={sendEventCS}
          className="btn btn-circle btn-wide bg-primaryLC text-white transition ease-in-out delay-150 hover:bg-primaryLC/80 hover:-translate-y-1"
        >
          Konsultasi CS
        </button>
        {/* </Link> */}
      </div>
      <div className="container divider"></div>
    </div>
  );
}
