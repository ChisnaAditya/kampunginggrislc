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
import HTMLReactParser from "html-react-parser/lib/index";

export const metadata: Metadata = {
    title: "Program IEP (Intensive English Program) - Kampung Inggris LC",
    description: "Program IEP (Intensive English Program) Kampung Inggris LC dirancang untuk kamu yang ingin meningkatkan kemampuan bahasa Inggris secara general mulai dari dasar. Kamu akan dilatih untuk percaya diri dan aktif berbicara bahasa Inggris. Peserta mampu merespon kalimat yang diucapkan oleh native speaker (by audio/video), mampu membuat mapping point dan rangkuman untuk dipresentasikan di depan publik.",
    verification: {
        google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA"
    },
}

function TabelHarga() {
    const harga = [
        {
            name: 'Intensive',
            prices: [
                {
                    duration: '3 bulan',
                    rupiah: 'Rp. 4.200.000'
                },
                {
                    duration: '2 bulan',
                    rupiah: 'Rp. 2.975.000'
                },
                {
                    duration: '1 bulan',
                    rupiah: 'Rp. 1.600.000'
                },
                {
                    duration: '2 minggu',
                    rupiah: 'Rp. 950.000'
                },
            ],
            fasilitas: [
                'Camp/asrama English Area',
                'Assessment Test',
                'Qualified & Experienced Teacher',
                '4x Main Class & 2x Camp Class',
                'Senin – Jumat',
                'Extra Program',
                'Modul Pembelajaran',
                'Kaos LC, Sertifikat LC',
                'Grammar, Speaking, Pronunciation',
            ],
            notes: ``,
            populer: false,
            link: `https://cs.kampunginggrislc.com?paket=intensive`,
        },
    ]
    return (
        <div className='flex flex-col items-center lg:flex-row lg:items-start gap-[20px]'>
            {harga.map((item, index) => (
                <div key={index} className='flex flex-col justify-between w-[400px]  rounded-xl shadow-lg bg-white p-4 overflow-hidden'>
                    <div className='relative'>
                        {item.populer && <div className='absolute top-[10px] left-[110px] transform rotate-45 text-center bg-secondaryLC shadow-lg p-1 w-full'>POPULER</div>}
                        {/* <h3 className='text-icon text-center text-primaryLC'>{item.name}</h3> */}
                        <div className="flex flex-col items-center py-2 my-2 border-[1px]">
                            {item.prices.map((price, indexx) => (
                                <div key={indexx} className="flex items-center justify-between px-2 gap-10 w-full ">
                                    <p>{price.duration}</p>
                                    <p className="harga">{price.rupiah}</p>
                                </div>
                            ))
                            }
                        </div>
                        <div className="">
                            <p className='text-left font-bold'>Fasilitas</p>
                            <ul>
                                {item.fasilitas.map((i, indexxx) => (
                                    <li key={indexxx} className="flex items-center space-x-1 text-left">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>{HTMLReactParser(i)}</span>
                                    </li>
                                ))
                                }
                            </ul>
                            <p className='text-left py-6'>{HTMLReactParser(item.notes)}</p>
                        </div>
                    </div>
                    <div >
                        <Link
                            className="btn bg-primaryLC hover:bg-red-600 hover:font-bold text-white w-full rounded-2xl "
                            href={item.link}
                        >
                            Daftar Program
                        </Link>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default function Intensive() {
    return (
        <div className="">
            <nav className="z-[2] hidden lg:flex lg:items-center w-full h-[100px] bg-black text-white text-[18px] font-normal">
                <div className="basis-2/6 container lg:pl-[150px]">
                    <Image alt="logo" src="/logo-black.webp" width={100} height={100} />
                </div>
                <ul className="flex justify-center items-center gap-6 basis-4/6">
                    <Link href="#overview"><p className="hover:text-primaryLC">Gambaran Umum</p></Link>
                    <Link href="#benefits"><p className="hover:text-primaryLC">Keuntungan</p></Link>
                    <Link href="#keseruan"><p className="hover:text-primaryLC">Galeri</p></Link>
                    <Link href="#alumni"><p className="hover:text-primaryLC">Alumni Kami</p></Link>
                    <Link href="#tutor"><p className="hover:text-primaryLC">Tutor Kami</p></Link>
                    <Link href="#goals"><p className="hover:text-primaryLC">Target Kami</p></Link>
                    <Link href="#tabel-program">
                        <button className="btn bg-primaryLC hover:bg-primaryLC/80 hover:font-bold text-white w-40 border-none rounded-2xl">
                            Daftar Program
                        </button>
                    </Link>
                </ul>
            </nav>
            {/* Start Hero */}
            <div className="flex flex-col lg:flex-row w-full lg:h-screen bg-white">
                <div className="z-[2] container flex flex-col justify-center basis-1/2 py-5 lg:pl-[150px] ">
                    <h1 className="text-[28px] lg:text-[48px] text-black font-extrabold leading-tight lg:leading-[58.09px]"> <span className="italic text-primaryLC">Upgrade English Skills </span> untuk Peluang yang Lebih Baik</h1>
                    <p className="text-[16px] lg:text-[32px] text-black font-light lg:leading-[38.73px] py-5">
                        Investasi terbaik untuk masa
                        depan yang lebih cerah, belajar
                        bahasa Inggris secara intensif
                        di LC <span className="italic font-extralight">can open new doors.</span></p>
                    <Link aria-label="link-registrasi" href="https://cs.kampunginggrislc.com/?cabang=pare">
                        <button aria-label="btn-registrasi" className="hidden lg:btn lg:bg-primaryLC hover:bg-primaryLC/80 lg:text-white  lg:text-[24px] lg:rounded-full border-none w-[367px]">JOIN NOW</button>
                    </Link>
                </div>
                <div className="basis-1/2 pb-10">
                    <Image alt="Intensive English Program - jumbotron mobile" src='/hero-iep.png' width={720} height={676} className="lg:mx-auto" priority />
                    <div className="px-5">
                        <Link aria-label="link-registrasi" href="https://cs.kampunginggrislc.com/?cabang=pare">
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
                            <h2 className="text-[18px] lg:text-[24px] font-bold text-primaryLC">Gambaran Umum</h2>
                            <h2 className="text-[24px] leading-[1.3em] lg:text-[32px] font-bold">Apakah kamu <span className="italic">gap year student</span> yang ingin membuat waktu <span className="italic">break</span> kamu produktif dan bermanfaat untuk masa depan kamu?
                                <br />
                                <span className="italic">Here’s your chance!</span>
                            </h2>
                            <p className="text-[16px] lg:text-[18px] mt-5">Atau kamu adalah profesional atau karyawan di suatu perusahaan yang ingin <span className="italic">upgrade English skills</span> untuk meraih peluang karier yang lebih baik?</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px] italic"><span className="font-bold">Intensive English Program</span> is exactly what you need.</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px]">Program ini dirancang khusus untuk kamu yang ingin meningkatkan <span className="italic">English skills</span> dari <span className="italic">basic</span>.</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px]">LC menawarkan metode <span className="italic">English boarding course</span> yang dilengkapi dengan <span className="italic">English area</span> yang memungkinkan kamu tidak hanya belajar teori, namun juga praktik <span className="italic">speaking</span> langsung sehingga kamu percaya diri mengaplikasikan <span className="italic">English skills</span> kamu dalam kehidupan sehari-hari dengan efektif.</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px]">Tersedia berbagai pilihan paket, mulai dari program 2 minggu, program 1 bulan, program 2 bulan, hingga program 3 bulan.</p>
                            <br />
                            <p className="text-[16px] lg:text-[18px]">Bergabunglah dengan LC dan upgrade <span className="italic">English skills</span> kamu untuk masa depan yang lebih baik!</p>
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
                    <div id="keseruan" className="keseruan">
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
                            <h1 id="tutor"></h1>
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
                            <h1 id="goals"></h1>
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
                <div className="hidden lg:block lg:overflow-x-scroll">
                    <Tabels />
                </div>
                <div className="lg:hidden">
                    <TabelHarga />
                </div>
            </div>
            <div className="container flex flex-col items-center justify-center py-20">
                <article className="prose text-center mb-10 lg:mb-20">
                    <h1 id="faq"></h1>
                    <h1 className="text-[24px] lg:text-[32px]"><span className="italic">Frequently Asked Questions</span> <br />(FAQ) </h1>
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
