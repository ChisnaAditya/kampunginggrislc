import ListContent from "./listcontent"
import Benefits from "./benefits";
import Goals from "./goals";
import Tabels from "./tabels";
import FAQ from "./faq";
import { Metadata } from "next";
import Link from "next/link";
import Alumni from "./alumni";

export const metadata: Metadata = {
    title: "Intensive English Program - Kampung Inggris LC",
    description: "Intensive English Program Kampung Inggris LC dirancang untuk kamu yang ingin meningkatkan kemampuan bahasa Inggris secara general mulai dari dasar. Kamu akan dilatih untuk percaya diri dan aktif berbicara bahasa Inggris. Peserta mampu merespon kalimat yang diucapkan oleh native speaker (by audio/video), mampu membuat mapping point dan rangkuman untuk dipresentasikan di depan publik.",
    verification: {
        google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA"
    },
}

export default function Intensive() {
    return (
        <div>
            {/* Start Hero */}
            <div className="flex bg-jumbotron bg-secondaryLC w-full h-[676px]">
                <div className="flex flex-col justify-center basis-1/2 pl-[150px]">
                    <h1 className="text-[48px] text-black font-extrabold leading-[58.09px]">Kamu Mau Mahir Bahasa Inggris Dalam Waktu Relatif Cepat?</h1>
                    <p className="text-[32px] text-black font-light leading-[38.73px] py-5">Yuk kursus Bahasa Inggris di LC untuk hasil yang lebih maksimal!</p>
                    <button className="hidden lg:btn lg:bg-primaryLC lg:text-white lg:text-[24px] lg:rounded-full border-none w-[367px]">JOIN NOW</button>
                </div>
                <div className="basis-1/2">

                </div>
            </div>
            {/* End Hero */}

            {/* Start Content */}
            <div className="px-[150px] mt-[91px] grid grid-cols-6">
                <div className="sticky self-start top-5 col-span-2">
                    <ListContent />
                </div>
                <div className="col-span-4">
                    <div className="overview">
                        <article className="">
                            <h1 id="overview"></h1>
                            <h3 className="text-[24px] font-bold text-primaryLC">Overview</h3>
                            <h2 className="text-[32px] font-bold">Ingin belajar English dari basic?
                                <br />
                                <span className="italic">Here’s your chance!</span>
                            </h2>
                            <p className="text-[18px] mt-5">Program intensif, dirancang khusus buat kamu yang ingin ningkatin skill English dari basic. Dengan konsep boarding course yang ditunjang English area, kamu bisa praktik setiap hari, banyak event yang menunjang ke-PD-anmu.</p>
                            <br />
                            <p className="text-[18px]">6 kali pertemuan dalam sehari, bikin skill-mu meningkat dalam waktu singkat. Banyak pilihan paket tersedia, mulai dari: 2 minggu, 1 bulan, 2 bulan, hingga 3 bulan.</p>
                        </article>
                    </div>
                    <div className="benefit">
                        <article className="mb-4">
                            <h1 id="benefits"></h1>
                            <h3 className="text-[24px] font-bold text-primaryLC mt-10">Benefits</h3>
                            <h2></h2>
                            <p></p>
                        </article>
                        <Benefits />
                    </div>
                    <div className="alumni">
                        <article className="">
                            <h1 id="alumni"></h1>
                            <h3 className="text-[24px] text-primaryLC font-bold mt-10">Alumni Kami</h3>
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
                            <h3 className="text-[24px] text-primaryLC font-bold">Tutor Kami</h3>
                            <h2></h2>
                            <p></p>
                        </article>
                        <div className="flex max-w-xl">
                            <Alumni />
                        </div>
                    </div>
                    <div className="Goals">
                        <article className="">
                            <h1 id="Goals"></h1>
                            <h3 className="text-[24px] text-primaryLC font-bold">Goals Program</h3>
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

            <div className="px-16 mt-10">
                <article className="text-center">
                    <h1></h1>
                    <h2 className="text-[32px] font-bold">
                        <span className="italic">Set Your English Journey</span>
                        <br />
                        Pilih Paket Belajarmu Di Sini!
                    </h2>
                </article>
                <Tabels />
            </div>
            <div className="container flex flex-col items-center justify-center py-20">
                <article className="prose text-center mb-20">
                    <h1 id="faq"></h1>
                    <h1>Frequently Asked Questions (FAQ) </h1>
                </article>
                <FAQ />
                <Link href='/tanyacs' ><button className="btn bg-primaryLC text-white mt-10">Hubungi CS Kami</button></Link>
            </div>
        </div >
    )
}
