"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListContent() {
  const [overviewActive, setOverviewActive] = useState("");
  const [benefitsActive, setBenefitsActive] = useState("");
  const [galleryActive, setGalleryActive] = useState("");
  const [alumniActive, setAlumniActive] = useState("");
  const [tutorActive, setTutorActive] = useState("");
  const [goalActive, setGoalActive] = useState("");

  const listenScroll = () => {
    if (window.scrollY <= 1000) {
      setOverviewActive("border-primaryLC")
    } else {
      setOverviewActive("")
    }

    if (window.scrollY > 1000 && window.scrollY < 1800) {
      setBenefitsActive("border-primaryLC")
    } else {
      setBenefitsActive("")
    }

    if (window.scrollY > 1800 && window.scrollY < 2200) {
      setGalleryActive("border-primaryLC")
    } else {
      setGalleryActive("")
    }

    if (window.scrollY > 2200 && window.scrollY < 2800) {
      setAlumniActive("border-primaryLC")
    } else {
      setAlumniActive("")
    }

    if (window.scrollY > 2800 && window.scrollY < 3500) {
      setTutorActive("border-primaryLC")
    } else {
      setTutorActive("")
    }

    if (window.scrollY > 3500) {
      setGoalActive("border-primaryLC")
    } else {
      setGoalActive("")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  });

  return (
    <aside>
      <h1></h1>
      <h3 className="text-[24px] font-bold mb-5">Intensive English Program</h3>
      <ul className="text-[#7A7979] text-[18px]">
        <li className="flex items-center">
          <div className={`border-l-4 ${overviewActive} py-5 px-3`}></div>
          <p>Overview</p>
        </li>
        <li className="flex items-center">
          <div className={`border-l-4 ${benefitsActive} py-5 px-3`}></div>
          <p>Benefits</p>
        </li>
        <li className="flex items-center">
          <div className={`border-l-4 ${galleryActive} py-5 px-3`}></div>
          <p>Gallery</p>
        </li>
        <li className="flex items-center">
          <div className={`border-l-4 ${alumniActive} py-5 px-3`}></div>
          <p>Alumni Kami</p>
        </li>
        <li className="flex items-center">
          <div className={`border-l-4 ${tutorActive} py-5 px-3`}></div>
          <p>Tutor Kami</p>
        </li>
        <li className="flex items-center">
          <div className={`border-l-4 ${goalActive} py-5 px-3`}></div>
          <p>Goals Kami</p>
        </li>
        <li className="mt-5">
          <Link href="#tabel-program">
            <button className="btn bg-primaryLC hover:bg-primaryLC/80 hover:font-bold text-white w-40 rounded-2xl">
              Daftar Program
            </button>
          </Link>
        </li>
        <li>
          <Link href="#faq">
            <button className="btn border-none shadow-none bg-transparent hover:bg-transparent hover:font-bold w-40 text-[#7A7979] text-[18px] font-light">
              FAQ
            </button>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
