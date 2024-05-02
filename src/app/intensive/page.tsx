import ListContent from "./listcontent"
import Benefits from "./benefits";
import Keseruan from "./keseruan";
import Alumni from "./alumni";
import Tutor from "./tutor";
import Goals from "./goals";
import Tabels from "./tabels";
import FAQ from "./faq";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Intensive English Program - Kampung Inggris LC",
    description: "Intensive English Program Kampung Inggris LC dirancang untuk kamu yang ingin meningkatkan kemampuan bahasa Inggris secara general mulai dari dasar. Kamu akan dilatih untuk percaya diri dan aktif berbicara bahasa Inggris. Peserta mampu merespon kalimat yang diucapkan oleh native speaker (by audio/video), mampu membuat mapping point dan rangkuman untuk dipresentasikan di depan publik.",
    verification: {
        google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA"
    },
}

export default function Intensive() {
    return (
        <div className="">
            {/* Start Hero */}
            <div className="flex flex-col items-center justify-center lg:flex-row w-full py-5 lg:h-screen bg-secondaryLC bg-none lg:bg-[url('/jumbotron.png')] lg:bg-cover">
                <div className="container flex flex-col justify-center basis-1/2 lg:pl-[150px] z-[2]">
                    <h1 className="text-[32px] lg:text-[48px] text-black font-extrabold leading-tight lg:leading-[58.09px]">Kamu Mau Mahir Bahasa Inggris Dalam Waktu Relatif Cepat?</h1>
                    <p className="text-[24px] lg:text-[32px] text-black font-light lg:leading-[38.73px] py-5">Yuk kursus Bahasa Inggris di LC untuk hasil yang lebih maksimal!</p>
                    <Link aria-label="link-registrasi" href="https://cs.kampunginggrislc.com/?cabang=pare">
                        <button aria-label="btn-registrasi" className="hidden lg:btn lg:bg-primaryLC hover:bg-primaryLC/80 lg:text-white  lg:text-[24px] lg:rounded-full border-none w-[367px]">JOIN NOW</button>
                    </Link>
                    <Image alt="Intensive English Program - jumbotron mobile" src='/jumbotron-mobile.png' width={500} height={500} className="lg:hidden" priority />
                    <Link aria-label="link-registrasi" href="https://cs.kampunginggrislc.com/?cabang=pare">
                        <button aria-label="btn-registrasi" className="lg:hidden btn bg-primaryLC hover:bg-primaryLC/80 text-white text-[24px] rounded-full border-none w-full">JOIN NOW</button>
                    </Link>
                </div>
                <div className="lg:basis-1/2">
                    {/* <Image alt="Intensive English Program - jumbotron mobile" src='/jumbotron-mobile.png' width={500} height={500} className="lg:hidden" priority /> */}
                    {/* <div className="px-5">
                        <Link aria-label="link-registrasi" href="https://cs.kampunginggrislc.com/?cabang=pare">
                            <button aria-label="btn-registrasi" className="lg:hidden btn bg-primaryLC hover:bg-primaryLC/80 text-white text-[24px] rounded-full border-none w-full">JOIN NOW</button>
                        </Link>
                    </div> */}
                </div>
            </div>
            {/* End Hero */}

            {/* Start Content */}
            <div className="z-[2] bg-[url('/ornamen-ramadhan.png')] bg-center bg-cover" />
            <div className="lg:px-[150px] lg:mt-[91px] mt-5 grid grid-cols-6">
                <div className="sticky self-start top-5 hidden lg:block lg:col-span-2">
                    <ListContent />
                </div>
                <div className="container col-span-6 lg:col-span-4">
                    <div className="overview">
                        <article className="">
                            <h1 id="overview"></h1>
                            <h2 className="text-[18px] lg:text-[24px] font-bold text-primaryLC">Gambaran Umum</h2>
                            <h2 className="text-[24px] lg:text-[32px] font-bold">Ingin belajar <span className="italic">English</span> dari <span className="italic">basic</span>?
                                <br />
                                <span className="italic">Here’s your chance!</span>
                            </h2>
                            <p className="text-[16px] lg:text-[18px] mt-5">Program intensif, dirancang khusus buat kamu yang ingin ningkatin skill <span className="italic">English</span> dari basic. Dengan konsep <span className="italic">boarding course</span> yang ditunjang <span className="italic">English area</span>, kamu bisa praktik setiap hari, banyak event yang menunjang ke-PD-anmu.</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px]">6 kali pertemuan dalam sehari, bikin skill-mu meningkat dalam waktu singkat. Banyak pilihan paket tersedia, mulai dari: 2 minggu, 1 bulan, 2 bulan, hingga 3 bulan.</p>
                        </article>
                    </div>
                    <div className="benefit">
                        <article className="mb-4">
                            <h1 id="benefits"></h1>
                            <h2 className="text-[18px] lg:text-[24px] font-bold text-primaryLC mt-10">Keuntungan</h2>
                            <h2></h2>
                            <p></p>
                        </article>
                        <Benefits />
                    </div>
                    <div className="keseruan">
                        <Keseruan />
                    </div>
                    <div className="alumni">
                        <article className="">
                            <h1 id="alumni"></h1>
                            <h2 className="text-[18px] lg:text-[24px] text-primaryLC font-bold mt-10">Alumni Kami</h2>
                            <h2></h2>
                            <p></p>
                        </article>
                        <div className="flex max-w-xl">
                            <Alumni />
                        </div>
                    </div>
                    <div className="Tutor">
                        <article className="">
                            <h1 id="Tutor"></h1>
                            <h2 className="text-[18px] lg:text-[24px] text-primaryLC font-bold">Tutor Kami</h2>
                            <h2></h2>
                            <p></p>
                        </article>
                        <div className="flex max-w-xl">
                            <Tutor />
                        </div>
                    </div>
                    <div className="Goals">
                        <article className="">
                            <h1 id="Goals"></h1>
                            <h2 className="text-[18px] lg:text-[24px] text-primaryLC font-bold">Target Kami</h2>
                            <h2></h2>
                            <p></p>
                        </article>
                        <div className="w-full">
                            <Goals />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Content */}

            <div className="lg:px-[150px] mt-10">
                <article className="text-center">
                    <h1></h1>
                    <h2 className="text-[24px] lg:text-[32px] font-bold">
                        <span className="italic">Set Your English Journey</span>
                        <br />
                        Pilih Paket Belajarmu Di Sini!
                    </h2>
                </article>
                <div className="overflow-x-scroll">
                    <Tabels />
                </div>
            </div>
            <div className="container flex flex-col items-center justify-center py-20">
                <article className="prose text-center mb-10 lg:mb-20">
                    <h1 id="faq"></h1>
                    <h1 className="text-[24px] lg:text-[32px] italic">Frequently Asked Questions <br />(FAQ) </h1>
                </article>
                <FAQ />
                <article className="text-center mt-10">
                    <h1></h1>
                    <h2 className="text-[24px] lg:text-[32px] font-bold mb-10">
                        <span>Mau tanya lebih lanjut tentang <span className="italic">Intensive English Program</span>?</span>
                    </h2>
                    <Link aria-label="link-tanyacs" href="https://cs.kampunginggrislc.com/?cabang=pare">
                        <button aria-label="btn-tanyacs" className="btn w-[180px] h-[50px] bg-primaryLC hover:bg-primaryLC/80 text-white rounded-2xl">Hubungi CS Kami</button>
                    </Link>
                </article>
            </div>
        </div >
    )
}
