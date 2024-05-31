import { Metadata } from "next";
import Image from "next/image";
import ListContent from "./listcontent";
import FAQ from "./faq";
import { CardTestimoni } from "@/components/Programs/CardTestimoni";
import { title, subtitle, text } from "@/components/primitives";
import Link from "next/link";
import HTMLReactParser from "html-react-parser/lib/index";

export const metadata: Metadata = {
    title: "English Master Program - Kampung Inggris LC",
    description: "Paket buat kamu yang mempunyai banyak waktu luang dan ingin belajar bahasa Inggris dari dasar secara lengkap. Diakhir program akan ada ujian praktik speaking yang dilakukan langsung ke Bali.",
    verification: {
        google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA"
    },
}

function HeroSection() {
    return (
        <div className="flex justify-between bg-secondaryLC w-full">
            <div className="w-full">
                <article className="pl-[10rem] pt-[5rem]">
                    <Image
                        alt="logo kampung inggris lc"
                        src='/logo-white.webp'
                        width={150}
                        height={150}
                        priority
                    />
                    <h1 className="text-[32px] lg:text-[48px] text-black font-extrabold leading-tight lg:leading-[58.09px]">Lingkungan Ideal untuk Menguasai Bahasa Inggris dari Dasar hingga Mahir!</h1>
                    <p className="text-[24px] lg:text-[32px] text-black font-light lg:leading-[38.73px] py-5">Gak cuma teori, nikmati praktik bahasa Inggris setiap hari + BONUS LIBURAN KE BALI DAN REAL TEST TOEFL ITP</p>
                    <button className="hidden lg:btn lg:bg-primaryLC hover:bg-primaryLC/80 lg:text-white  lg:text-[24px] lg:rounded-full border-none w-[367px]">JOIN NOW</button>
                </article>
            </div>
            <div className="w-full">
                <Image
                    alt="hero image program em/emp kampung inggris lc"
                    src='/hero/Hero Image EMEMP.png'
                    width={720}
                    height={450}
                    priority
                />
            </div>
        </div>
    )
}

function CardBenefits() {
    const content = [
        {
            icon: '/icon/A4@4x.webp',
            title: 'Asrama English Area',
            desc: 'Disini kamu bukan hanya belajar teori saja tapi juga bisa praktek ngomong setiap hari dengan teman di lingkungan yang mendukung.'
        },
        {
            icon: '/icon/A5@4x.webp',
            title: 'Teacher pendamping asrama',
            desc: 'Bukan hanya belajar bareng teman, tapi akan ada teachers yang akan membantu kamu praktek ngomong inggris, memberikan feedback jika kamu melakukan kesalahan.'
        },
        {
            icon: '/icon/A1@4x.webp',
            title: 'Pembelajaran Intensive',
            desc: 'Dengan pembelajaran intensive 6x pertemuan/hari di hari senin-jumat, bukan hanya mahir bahasa inggris tapi soft skill kedisiplinanmu juga akan terasah.'
        },
        {
            icon: '/icon/B6@4x.webp',
            title: 'Belajar All Skill',
            desc: 'Bukan hanya belajar speaking tapi juga skill grammar supaya tatanan bahasa kamu benar, pronunciation cara pengucapan yang benar, dan vocabulary untuk memperkaya kosakata bahasa inggris supaya praktek speaking lebih mudah. dan di kelas speaking, grammar, pronunciation dan vocab kamu akan belajar listening, speaking, reading dan juga writing.'
        },
        {
            icon: '/icon/B1@4x.webp',
            title: 'Exam setiap pekan',
            desc: 'Akan ada examination atau ujian setiap hari jumat, yang bertujuan untuk melihat perkembangan bahasa inggrismu selama satu minggu kebelakang, dan pemberian feedback yang harus kamu tingkatkan di minggu depan.'
        },
        {
            icon: '/icon/B5@4x.webp',
            title: 'Event Pendukung',
            desc: 'Bukan hanya belajar teori, di kampung inggris LC juga ada event yang bisa menunjang kemampuan publik speaking dan ke PD-an mu.'
        },
    ]
    return (
        <div className="flex flex-col gap-4">
            {content.map((item, index) => (
                <div key={index} className="flex gap-4">
                    <div className="w-[50px]">
                        <Image
                            alt="kampung inggris lc benefits"
                            width={50}
                            height={50}
                            src={item.icon}
                        />
                    </div>
                    <div className="w-full">
                        <h1 className="text-[18px] lg:text-[22px] text-center lg:text-left font-bold italic">{item.title}</h1>
                        <p className="text-[16px] lg:text-[18px]">{HTMLReactParser(item.desc)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

function TabelHarga() {
    const harga = [
        {
            name: 'English Master (EM)',
            prices: [
                {
                    duration: '4 bulan',
                    rupiah: 'Rp. 6.500.000'
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
                'Kaos LC, Jaket LC, Batik',
                'Grammar, Speaking, Pronunciation',
                'LIBURAN KE BALI',
            ],
            notes: ``,
            populer: false,
            link: `https://cs.kampunginggrislc.com?paket=em/emp`,
        },
        {
            name: 'English Master Plus (EMP)',
            prices: [
                {
                    duration: '6 bulan',
                    rupiah: 'Rp. 9.500.000'
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
                'Kaos LC, Jaket LC, Batik',
                'Grammar, Speaking, Pronunciation',
                'LIBURAN KE BALI',
                `Academic English`,
                `TOEFL Preparation`,
                `Real Test TOEFL`,
            ],
            notes: ``,
            populer: false,
            link: `https://cs.kampunginggrislc.com?paket=em/emp`,
        },
    ]
    return (
        <div className='flex flex-col items-center lg:flex-row lg:items-start gap-[20px]'>
            {harga.map((item, index) => (
                <div key={index} className='relative w-[450px] rounded-xl shadow-xl bg-white p-4 overflow-hidden'>
                    {item.populer && <div className='absolute top-[20px] left-[120px] transform rotate-45 text-center bg-secondaryLC shadow-lg p-1 w-full'>POPULER</div>}
                    <h3 className='text-icon text-center text-primaryLC'>{item.name}</h3>
                    <div className="flex flex-col items-center py-2 my-2 border-[1px]">
                        {item.prices.map((price, indexx) => (
                            <p key={indexx}>{price.duration} <span className='harga'>{price.rupiah}</span></p>
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
                    <Link
                        className="btn bg-primaryLC hover:bg-red-600 hover:font-bold text-white w-full rounded-2xl"
                        href={item.link}
                    >
                        Daftar Program
                    </Link>
                </div>
            ))
            }
        </div>
    )
}

const keseruan = [
    '/keseruan/em/1.webp',
    '/keseruan/em/2.webp',
    '/keseruan/em/3.webp',
    '/keseruan/em/4.webp',
    '/keseruan/em/5.webp',
    '/keseruan/em/6.webp',
    '/keseruan/em/7.webp',
    '/keseruan/em/8.webp',
    '/keseruan/em/9.webp',
    '/keseruan/em/10.webp',
    '/keseruan/em/11.webp',
]

const fasilitas = [
    '/fasilitas/5.webp',
    '/fasilitas/em/1.webp',
    '/fasilitas/6.webp',
    '/fasilitas/em/2.webp',
    '/fasilitas/em/3.webp',
    '/fasilitas/em/4.webp',
    '/fasilitas/em/5.webp',
    '/fasilitas/8.webp',
    '/fasilitas/em/6.webp',
    '/fasilitas/em/7.webp',
]

const alumni = [
    {
        avatar: '/alumni/monica-alumni-kampung-inggris-lc.webp',
        testi: 'Dulu sebelum tau LC, susah banget rasanya buat belajar English. Tapi, setelah gabung LC, belajar English jadi terasa lebih mudah dan menyenangkan. Thanks to ilmu yang diberikan LC, aku berhasil dapetin apa yang aku mau dan jadi bagian dari SUPER CREW!',
        name: 'Monica',
        job: 'Pramugari',
        program: 'Alumni English Master'
    },
    {
        avatar: '/alumni/bagus-alumni-kampung-inggris-lc.webp',
        testi: 'Melangkah tanpa persiapan matang buat aku harus lapang dada. Aku ga nyerah dan akhirnya ambil kursus di LC buat persiapan pendaftaran tahun depannya. Ternyata worth it banget, I’ve got much experience. Finally, I got what I dreamed of!',
        name: 'Bagus',
        job: 'Polisi',
        program: 'Alumni English Master'
    },
    {
        avatar: '/alumni/rizka-windi-alumni-kampung-inggris-lc.webp',
        testi: 'Awal masuk aku cupu ga bisa apa-apa. Dari LC aku dapet banyak ilmu, pengalaman, vocab baru, dan temen dari Sabang sampai Merauke. Alhamdulillah, sekarang aku bisa jadi bagian dari Best Crew in The World.',
        name: 'Rizka Windi',
        job: 'Pramugari',
        program: 'Alumni English Master'
    },
    {
        avatar: '/alumni/annisa-nurul-alumni-kampung-inggris-lc.webp',
        testi: 'Bagi saya 4 bulan di LC terasa sangat cepat. Saya mendapat predikat member teraktif dan nilai yang baik. Setelah itu saya memberanikan diri real test TOEFL, untuk nguji kemampuan. Alhamdulillah hasilnya melebihi target.',
        name: 'Annisa Nurul',
        job: 'Beasiswa Turki',
        program: 'Alumni English Master'
    },
    {
        avatar: '/alumni/alief-rasyafara-alumni-kampung-inggris-lc.webp',
        testi: 'Pengalaman yang saya dapatkan luar biasa dari basic sampai jadi English master. Selama di LC, Saya mendapat materi yang luar biasa dari teacher dan tutor. Dapet teman baru yang saling mendukung dari sabang - merauke.',
        name: 'Alief Rasyafara',
        job: 'Finalis Putra Kebudayaan Sulawesi Selatan 2018',
        program: 'Alumni English Master'
    },
    {
        avatar: '/alumni/elvira-alumni-kampung-inggris-lc.webp',
        testi: 'Weekly meeting, gathering, yasinan, table manner, outbound, jalan-jalan ke Bali, best camp competition, dan banyak lagi kegiatan asik lainnya. Bikin pertemanan naik level jadi keluarga yang berjuang bareng buat bisa bahasa Inggris.',
        name: 'Elvira R',
        job: 'English Teacher & Penulis Buku',
        program: 'Alumni English Master'
    },
    {
        avatar: '/alumni/arbaz-alumni-kampung-inggris-lc.webp',
        testi: 'Bagi saya LC itu tempat yang paling menyenangkan, di sana saya mendapatkan banyak hal baru; teman, pengalaman, dan yang paling penting saya belajar manajemen waktu dengan baik. Sangat berharga dan nggak bisa dilupain sampe sekarang.',
        name: 'Mohamad Arbaz',
        job: 'Pemeran FTV Indosiar',
        program: 'Alumni Intensive Program'
    },
    {
        avatar: '/alumni/jarshaka-alumni-kampung-inggris-lc.webp',
        testi: 'Saya ambil paket 2 bulan tapi nambah 1 bulan lagi, karena metode belajar di LC bagus banget, tutor yang asik, selain itu juga dapet teman yang super humble dari Sabang sampai Merauke.',
        name: 'Jarshaka Syarif',
        job: 'Aktor',
        program: 'Alumni Intensive Program'
    },
    {
        avatar: '/alumni/mutia-alumni-kampung-inggris-lc.webp',
        testi: 'LC memberikan banyak pengalaman baru yang belum pernah aku rasakan sebelumnya. Mulai dari ilmu, temen dan kelompoknya, dan kekeluargaannya tak terlupakan. Kedisiplinan dan English areanya super duper top banget.',
        name: 'Mutia Koirun Nissa',
        job: 'Putri Indonesia Sosmed (Jabar) 2018',
        program: 'Alumni Intensive Program'
    },
    {
        avatar: '/alumni/rifa-alumni-kampung-inggris-lc.webp',
        testi: 'Aku seneng banget bisa ke LC karena banyak pelajaran yang kuambil, temen dari seluruh Indonesia, manage keuangan, dan kemandirian. LC tuh kaya rumah kedua, semuanya berasa kaya keluarga.',
        name: 'Rifa Dzahabiyyah',
        job: 'Selebgram',
        program: 'Alumni Intensive Program'
    },
    {
        avatar: '/alumni/naqita-alumni-kampung-inggris-lc.webp',
        testi: 'Awalnya grammar saya masih berantakan, setelah gabung di Kampung Inggris LC saya merasakan banyak perubahan pada struktur kalimat bahasa Inggris.',
        name: 'Naqita',
        job: 'Selebgram TikTok',
        program: 'Alumni Intensive Program'
    },
    {
        avatar: '/alumni/cut-putri-alumni-kampung-inggris-lc.webp',
        testi: 'Menurutku yang paling seru itu kewajiban untuk speaking English, karena aku bisa practice dan ningkatin kemampuanku untuk komunikasi sehari-hari. Materi speaking, grammar, dan pronunciation. Well, 3 minggu di LC ga cukup harus nambah lagi.',
        name: 'Cut Putri Firlianda',
        job: 'Duta Genre Putri Aceh 2020',
        program: 'Alumni Intensive Program'
    },
]

export default function EnglishMaster() {
    return (
        <section>
            <HeroSection />
            <div className="flex justify-center w-[1300px] mx-auto mt-10">
                <div className="sticky self-start top-5 hidden lg:block">
                    <ListContent />
                </div>
                <div className="w-2/3 pl-20">
                    <div className="overview">
                        <h2 className={title()}>Gambaran Umum</h2>
                        <h3 className={subtitle()}>Apakah kamu termasuk kriteria dibawah ini?</h3>
                        <p className={text()}>Udah belajar bahasa inggris bertahun tahun tapi masih belum bisa!
                            Tau artinya kalau orang lain ngomong pakai bahasa inggris, tapi nggak bisa balasnya!
                            Udah tau teorinya tapi nggak punya teman prakteknya, alhasil lupa lagi dah!
                        </p>
                        <p className={text()}>
                            <span className="font-bold italic mt-4">Berarti kamu harus!</span> <br />
                            Bukan hanya belajar teori tapi juga praktek <br />
                            Bukan hanya praktek sekali, tapi juga setiap hari <br />
                            Cari lingkungan yang mendukung, supaya ada teman praktek dan ada yg memberikan feedback
                        </p>
                    </div>

                    <div className="keuntungan mt-10">
                        <h2 className={title()}>Keuntungan</h2>
                        <h3 className={subtitle()}>Kenalin nih Kampung Inggris LC</h3>
                        <p className={text()}>Lembaga kursus bahasa inggris yang bukan hanya berfokus pada pemberian materi saja,
                            tapi juga menekankan pada praktek. Karena kami sadar untuk menguasai bahasa itu bukan hanya sekedar teori saja
                            tapi harus dibiasakan untuk praktek setiap hari, dan praktek bareng teman saja nggak cukup tapi harus berada
                            dilingkungan yang tepat dan dengan teman yang sudah bisa dan siap saling mendukung,
                            karena itulah LC hadir dengan membawa konsep:
                        </p>
                        <p className="mt-4"></p>
                        <CardBenefits />
                    </div>

                    <div className="galery mt-10">
                        <h2 className={title()}>Galeri</h2>
                        <h3 className={subtitle()}>Seperti ini kan suasana pembelajaran yang kamu inginkan?</h3>
                        <div className='flex gap-[20px] overflow-x-auto w-full py-6 pl-6'>
                            {
                                keseruan.map((item, index) => (
                                    <Image key={index} alt='fasilitas kampung inggris lc pare' src={item} width={720} height={450} className='rounded-xl' />
                                ))
                            }
                        </div>
                    </div>

                    <div className="alumni mt-10">
                        <h2 className={title()}>Alumni</h2>
                        <h3 className={subtitle()}>Ini nih kata alumni yang sudah belajar di LC!</h3>
                        {/* <Alumni /> */}
                        <div className='flex gap-[20px] overflow-x-auto w-full py-6'>
                            {
                                alumni.map((item, index) => (
                                    <CardTestimoni
                                        key={index}
                                        avatar={item.avatar}
                                        name={item.name}
                                        job={item.job}
                                        program={item.program}
                                        testi={item.testi}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <div className="Fasilitas mt-10">
                        <h2 className={title()}>Fasilitas</h2>
                        <h3 className={subtitle()}>Di lingkungan yang mendukung ini kamu akan belajar</h3>
                        <div className='flex gap-[20px] overflow-x-auto w-full py-6 pl-6'>
                            {
                                fasilitas.map((item, index) => (
                                    <Image key={index} alt='fasilitas kampung inggris lc pare' src={item} width={720} height={450} className='rounded-xl' />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mx-auto mt-10 py-10">
                <h2 className={`${subtitle()} mb-5 text-center`}>
                    <span className="italic">Set Your English Journey</span>
                    <br />
                    Pilih Paket Belajarmu Di Sini!
                </h2>
                <TabelHarga />
                <div className="flex items-center justify-evenly w-full mx-auto py-5 my-10 rounded-lg bg-secondaryLC">
                    <h2 className='text-[16px] lg:text-[28px] font-bold'>
                        Bingung Menentukan Paket Pilihan? <br />
                        <span><p className='font-normal'>Tanya cs kami</p></span>
                    </h2>
                    <Link
                        className="btn bg-green-700 hover:bg-green-800 hover:font-bold text-white border-none w-1/4 rounded-2xl"
                        href={`https://cs.kampunginggrislc.com/`}
                    >
                        Hubungi CS
                    </Link>
                </div>
                <h2 className={`${subtitle()} mb-5`}>Frequently Asked Questions (FAQ) </h2>
                <FAQ />
            </div>
        </section>
    )
}
