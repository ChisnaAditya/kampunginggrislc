"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListContent() {
    const [overviewActive, setOverviewActive] = useState("");
    const [benefitsActive, setBenefitsActive] = useState("");
    const [galleryActive, setGalleryActive] = useState("");
    const [alumniActive, setAlumniActive] = useState("");
    const [fasilitasActive, setFasilitasActive] = useState("");

    const listenScroll = () => {
        if (window.scrollY <= 1200) {
            setOverviewActive("border-primaryLC")
        } else {
            setOverviewActive("")
        }

        if (window.scrollY > 1200 && window.scrollY < 1900) {
            setBenefitsActive("border-primaryLC")
        } else {
            setBenefitsActive("")
        }

        if (window.scrollY > 1900 && window.scrollY < 2600) {
            setGalleryActive("border-primaryLC")
        } else {
            setGalleryActive("")
        }

        if (window.scrollY > 2600 && window.scrollY < 2800) {
            setAlumniActive("border-primaryLC")
        } else {
            setAlumniActive("")
        }

        if (window.scrollY > 2800 && window.scrollY < 3500) {
            setFasilitasActive("border-primaryLC")
        } else {
            setFasilitasActive("")
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScroll);
    });

    return (
        <aside>
            <div className="text-[24px] font-bold mb-5 italic">English Master Program</div>
            <ul className="text-[#7A7979] text-[18px]">
                <li className="flex items-center">
                    <div className={`border-l-4 ${overviewActive} py-5 px-3`}></div>
                    <Link href="#overview">
                        <p>Gambaran Umum</p>
                    </Link>
                </li>
                <li className="flex items-center">
                    <div className={`border-l-4 ${benefitsActive} py-5 px-3`}></div>
                    <Link href="#keuntungan">
                        <p>Keuntungan</p>
                    </Link>
                </li>
                <li className="flex items-center">
                    <div className={`border-l-4 ${galleryActive} py-5 px-3`}></div>
                    <Link href="#galeri">
                        <p>Galeri</p>
                    </Link>
                </li>
                <li className="flex items-center">
                    <div className={`border-l-4 ${alumniActive} py-5 px-3`}></div>
                    <Link href="#alumni">
                        <p>Alumni Kami</p>
                    </Link>
                </li>
                <li className="flex items-center">
                    <div className={`border-l-4 ${fasilitasActive} py-5 px-3`}></div>
                    <Link href="#fasilitas">
                        <p>Fasilitas</p>
                    </Link>
                </li>
                <li className="mt-5">
                    <Link href="https://registrasi.kampunginggris.id/?br_code=PARE">
                        <button className="btn bg-primaryLC hover:bg-primaryLC/80 hover:font-bold text-white w-40 rounded-2xl">
                            Daftar Sekarang
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
