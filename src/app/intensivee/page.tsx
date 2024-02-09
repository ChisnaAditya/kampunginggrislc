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
    title: "Program IEP (Intensive English Program) - Kampung Inggris LC",
    description: "Program IEP (Intensive English Program) Kampung Inggris LC dirancang untuk kamu yang ingin meningkatkan kemampuan bahasa Inggris secara general mulai dari dasar. Kamu akan dilatih untuk percaya diri dan aktif berbicara bahasa Inggris. Peserta mampu merespon kalimat yang diucapkan oleh native speaker (by audio/video), mampu membuat mapping point dan rangkuman untuk dipresentasikan di depan publik.",
    verification: {
        google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA"
    },
}

export default function Intensive() {
    return (
        <div className="">
            {/* Start Hero */}
            <div className="flex flex-col lg:flex-row w-full h-screen bg-white">
                <div className="container flex flex-col justify-center basis-1/2 lg:pl-[150px] ">
                    <h1 className="text-[32px] lg:text-[48px] text-black font-extrabold leading-tight lg:leading-[58.09px]"> <span className="italic text-primaryLC">Upgrade English Skills </span> untuk Peluang yang Lebih Baik</h1>
                    <p className="text-[24px] lg:text-[32px] text-black font-light lg:leading-[38.73px] py-5">
                        Investasi terbaik untuk masa
                        depan yang lebih cerah, belajar
                        bahasa Inggris secara intensif
                        di LC <span className="italic font-extralight">can open new doors.</span></p>
                    <Link aria-label="link-registrasi" href="https://registrasi.kampunginggris.id/?br_code=PARE">
                        <button aria-label="btn-registrasi" className="hidden lg:btn lg:bg-primaryLC hover:bg-primaryLC/80 lg:text-white  lg:text-[24px] lg:rounded-full border-none w-[367px]">JOIN NOW</button>
                    </Link>
                </div>
                <div className="basis-1/2 pb-10">
                    <Image alt="Intensive English Program - jumbotron mobile" src='/hero-iep.png' width={720} height={676} className="lg:mx-auto" />
                    <div className="px-5">
                        <Link aria-label="link-registrasi" href="https://registrasi.kampunginggris.id/?br_code=PARE">
                            <button aria-label="btn-registrasi" className="lg:hidden btn bg-primaryLC hover:bg-primaryLC/80 text-white text-[24px] rounded-full border-none w-full">JOIN NOW</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* End Hero */}

            {/* Start Content */}
            <div className="lg:px-[150px] mt-5 grid grid-cols-6">
                <div className="container col-span-6">
                    <div className="overview">
                        <article className="">
                            <h1 id="overview"></h1>
                            <h2 className="text-[18px] lg:text-[24px] font-bold text-primaryLC">Overview</h2>
                            <h2 className="text-[24px] lg:text-[32px] font-bold">Apakah kamu gap year student yang ingin membuat waktu break kamu produktif dan bermanfaat untuk masa depan kamu?
                                <br />
                                <span className="italic">Here’s your chance!</span>
                            </h2>
                            <p className="text-[16px] lg:text-[18px] mt-5">Atau kamu adalah profesional atau karyawan di suatu perusahaan yang ingin upgrade English skills untuk meraih peluang karier yang lebih baik?</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px]"><span className="font-bold italic">Intensive English Program</span> is exactly what you need.</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px]">Program ini dirancang khusus untuk kamu yang ingin meningkatkan English skills dari basic.</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px]">LC menawarkan metode English boarding course yang dilengkapi dengan English area yang memungkinkan kamu tidak hanya belajar teori, namun juga praktik speaking langsung sehingga kamu percaya diri mengaplikasikan English skills kamu dalam kehidupan sehari-hari dengan efektif.</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px]">Tersedia berbagai pilihan paket, mulai dari program 2 minggu, program 1 bulan, program 2 bulan, hingga program 3 bulan, yang dapat disesuaikan dengan jadwal dan kebutuhan kamu.</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px]">Bergabunglah dengan LC dan upgrade English skills kamu untuk masa depan yang lebih baik!</p>
                        </article>
                    </div>
                    <div className="benefit">
                        <article className="mb-4">
                            <h1 id="benefits"></h1>
                            <h2 className="text-[18px] lg:text-[24px] font-bold text-primaryLC mt-10">Benefits</h2>
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
                        <div className="flex">
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
                        <div className="flex">
                            <Tutor />
                        </div>
                    </div>
                    <div className="Goals">
                        <article className="">
                            <h1 id="Goals"></h1>
                            <h2 className="text-[18px] lg:text-[24px] text-primaryLC font-bold">Goals Program</h2>
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
                    <h1 className="text-[24px] lg:text-[32px]">Frequently Asked Questions <br />(FAQ) </h1>
                </article>
                <FAQ />
                <article className="text-center mt-10">
                    <h1></h1>
                    <h2 className="text-[24px] lg:text-[32px] font-bold mb-10">
                        <span className="italic">Mau tanya lebih lanjut tentang Intensive English Program?</span>
                    </h2>
                    <Link aria-label="link-tanyacs" href="https://kampunginggrislc.com/tanyacspare">
                        <button aria-label="btn-tanyacs" className="btn w-[180px] h-[50px] bg-primaryLC hover:bg-primaryLC/80 text-white rounded-2xl">Hubungi CS Kami</button>
                    </Link>
                </article>
            </div>
        </div >
    )
}
