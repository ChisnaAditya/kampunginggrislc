import { Metadata } from "next";
import Image from "next/image";
import ListContent from "./listcontent";
import TabelHarga from "@/components/Programs/TabelHarga";
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
        <div className="flex flex-col-reverse lg:flex-row justify-between bg-secondaryLC w-full">
            <div className="w-full p-[1rem]">
                <article className="lg:pl-[8rem] lg:pt-[2rem]">
                    <Image
                        alt="logo kampung inggris lc"
                        src='/logo-white.webp'
                        width={150}
                        height={150}
                        priority
                        className="hidden lg:block"
                    />
                    <h1 className="text-[28px] lg:text-[48px] text-black font-extrabold leading-tight lg:leading-[58.09px]">Lingkungan Ideal untuk Menguasai Bahasa Inggris dari Dasar hingga Mahir!</h1>
                    <p className="text-[20px] lg:text-[32px] text-black font-light lg:leading-[38.73px] py-1 lg:py-5">Gak cuma teori, nikmati praktik bahasa Inggris setiap hari + BONUS LIBURAN KE BALI DAN REAL TEST TOEFL ITP</p>
                    <Link href="#harga">
                        <button className="hidden lg:btn lg:bg-primaryLC hover:bg-primaryLC/80 lg:text-white  lg:text-[24px] lg:rounded-2xl border-none w-[367px]">JOIN NOW</button>
                    </Link>

                </article>
                <div className="p-5">
                    <Link href="#harga">
                        <button className="lg:hidden w-full text-bold bg-primaryLC hover:bg-primaryLC/80 text-white text-[24px] rounded-xl border-none">JOIN NOW</button>
                    </Link>
                </div>
            </div>
            <div className="lg:w-[80%] overflow-hidden">
                <Image
                    alt="hero image program em/emp kampung inggris lc"
                    src='/hero/Hero Image EMEMP.png'
                    width={720}
                    height={450}
                    priority
                    className="scale-[1.01]"
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
                <div key={index} className="flex flex-col lg:flex-row gap-4">
                    <div className="w-[50px]">
                        <Image
                            alt="kampung inggris lc benefits"
                            width={50}
                            height={50}
                            src={item.icon}
                        />
                    </div>
                    <div className="w-full">
                        <h1 className="text-[18px] lg:text-[22px] text-left font-bold italic">{item.title}</h1>
                        <p className="text-[16px] lg:text-[18px]">{HTMLReactParser(item.desc)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
function Galeri(props: any) {
    return (
        <div key={props.keyy} className="w-full">
            <div className="w-[300px]">
                <Image alt='fasilitas kampung inggris lc pare' src={props.src} width={720} height={450} className='rounded-xl w-[720px]' />
            </div>
            <p className="text-center mt-2">{props.desc}</p>
        </div>
    )
}
const keseruan = [
    {
        src: '/keseruan/em/1.webp',
        desc: 'desc'
    },
    {
        src: '/keseruan/em/2.webp',
        desc: 'desc'
    },
    {
        src: '/keseruan/em/3.webp',
        desc: 'desc'
    },
    {
        src: '/keseruan/em/4.webp',
        desc: 'desc'
    },
    {
        src: '/keseruan/em/5.webp',
        desc: 'desc'
    },
    {
        src: '/keseruan/em/6.webp',
        desc: 'desc'
    },
    {
        src: '/keseruan/em/7.webp',
        desc: 'desc'
    },
    {
        src: '/keseruan/em/8.webp',
        desc: 'desc'
    },
    {
        src: '/keseruan/em/9.webp',
        desc: 'desc'
    },
    {
        src: '/keseruan/em/10.webp',
        desc: 'desc'
    },
    {
        src: '/keseruan/em/11.webp',
        desc: 'desc'
    },
]

const fasilitas = [
    {
        src: '/fasilitas/5.webp',
        desc: 'desc'
    },
    {
        src: '/fasilitas/em/1.webp',
        desc: 'desc'
    },
    {
        src: '/fasilitas/6.webp',
        desc: 'desc'
    },
    {
        src: '/fasilitas/em/3.webp',
        desc: 'desc'
    },
    {
        src: '/fasilitas/em/4.webp',
        desc: 'desc'
    },
    {
        src: '/fasilitas/4.webp',
        desc: 'desc'
    },
    {
        src: '/fasilitas/em/5.webp',
        desc: 'desc'
    },
    {
        src: '/fasilitas/em/6.webp',
        desc: 'desc'
    },
    {
        src: '/fasilitas/em/7.webp',
        desc: 'desc'
    },
    {
        src: '/fasilitas/8.webp',
        desc: 'desc'
    },
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

const iconCheck = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={20}
            height={20}
        >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
    )
}
export default function EnglishMaster() {
    return (
        <section>
            <HeroSection />
            <div className="flex justify-center lg:w-[1300px] mx-auto mt-10">
                <div className="sticky self-start top-5 hidden lg:block">
                    <ListContent />
                </div>
                <div className="w-full lg:w-2/3 lg:pl-20 px-[1rem]">
                    <div id="overview">
                        {/* <h2 className={title()}>Gambaran Umum</h2> */}
                        <h3 className={subtitle()}>Apakah kamu termasuk kriteria dibawah ini?</h3>
                        <div className={text()}>
                            <div className="flex gap-2"><div>{iconCheck()}</div>Udah belajar bahasa Inggris bertahun tahun tapi masih belum bisa!</div>
                            <div className="flex gap-2"><div>{iconCheck()}</div>Tau artinya kalau orang lain ngomong pakai bahasa inggris, tapi nggak bisa balasnya!</div>
                            <div className="flex gap-2"><div>{iconCheck()}</div>Udah tau teorinya tapi nggak punya teman prakteknya, alhasil lupa lagi dah!</div>
                        </div>
                        <div className={text()}>
                            <div className="font-bold italic mt-4">Berarti kamu harus!</div> <br />
                            <div className="flex gap-2"><div>{iconCheck()}</div>Bukan hanya belajar teori tapi juga praktek</div>
                            <div className="flex gap-2"><div>{iconCheck()}</div>Bukan hanya praktek sekali, tapi juga setiap hari</div>
                            <div className="flex gap-2"><div>{iconCheck()}</div>Cari lingkungan yang mendukung, supaya ada teman praktek dan ada yg memberikan feedback</div>
                        </div>
                    </div>

                    <div id="keuntungan" className="mt-10">
                        {/* <h2 className={title()}>Keuntungan</h2> */}
                        <h3 className={subtitle()}>Kenalin nih Kampung Inggris LC <span className="lg:hidden">(Language Center)</span></h3>
                        <p className={text()}>Lembaga kursus bahasa inggris yang bukan hanya berfokus pada pemberian materi saja,
                            tapi juga <span className="font-bold italic mt-4">menekankan pada praktek</span> . Karena kami sadar untuk menguasai bahasa itu bukan hanya sekedar teori saja
                            tapi harus dibiasakan untuk praktek setiap hari, dan praktek bareng teman saja nggak cukup tapi harus berada
                            <span className="font-bold italic mt-4"> di lingkungan yang tepat </span>dan dengan teman yang sudah bisa dan siap saling mendukung
                        </p>
                        <p className="mt-4"></p>
                        <h3 className={subtitle()}>Karena itulah LC hadir dengan membawa konsep:</h3>
                        <p className="mt-4"></p>
                        <CardBenefits />
                    </div>

                    <div id="galeri" className="mt-10">
                        {/* <h2 className={title()}>Galeri</h2> */}
                        <h3 className={subtitle()}>Seperti ini kan suasana pembelajaran yang kamu inginkan?</h3>
                        <div className='scrollbar flex gap-[20px] overflow-x-auto w-full py-6'>
                            {
                                keseruan.map((item, index) => (
                                    <Galeri key={index} src={item.src} desc={item.desc} />
                                ))
                            }
                        </div>
                    </div>

                    <div id="alumni" className="mt-10">
                        {/* <h2 className={title()}>Alumni</h2> */}
                        <h3 className={subtitle()}>Ini nih kata alumni yang sudah belajar di LC!</h3>
                        {/* <Alumni /> */}
                        <div className='scrollbar flex gap-[20px] overflow-x-auto w-full py-6'>
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

                    <div id="fasilitas" className="mt-10">
                        {/* <h2 className={title()}>Fasilitas</h2> */}
                        <h3 className={subtitle()}>Di lingkungan yang mendukung ini kamu akan belajar</h3>
                        <div className='scrollbar flex gap-[20px] overflow-x-auto w-full py-6'>
                            {
                                fasilitas.map((item, index) => (
                                    <Galeri key={index} src={item.src} desc={item.desc} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mx-auto mt-10 py-10">
                <h2 id="harga" className={`${subtitle()} mb-5 text-center`}>
                    <span className="italic">Set Your English Journey</span>
                    <br />
                    Pilih Paket Belajarmu Di Sini!
                </h2>
                <TabelHarga />
                <div className="flex flex-col items-center justify-center w-full mx-auto my-10  py-5 lg:py-20 bg-pattern-tanyacs">
                    <h2 className='text-[24px] lg:text-[28px] text-center px-[2rem] font-bold shadow-green-800'>
                        Bingung Menentukan Paket Pilihan?
                    </h2>
                    <p className='text-[20px] font-normal text-center'>Tanya cs kami</p>
                    <svg className=' fill-green-700 w-[60px] lg:w-[70px] animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Double down"><path d="M12 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 14.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 17z" /><path d="M12 13a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 12 13z" /></g></svg>
                    <Link
                        className="btn bg-green-700 hover:bg-green-800 hover:font-bold text-white border-none rounded-2xl px-10"
                        href={`https://cs.kampunginggrislc.com/`}
                    >
                        Tanya CS
                    </Link>
                </div>
                <h2 id="faq" className={`${subtitle()} mb-5 text-center px-[1rem] italic`}>Frequently Asked Questions (FAQ) </h2>
                <FAQ />
            </div>
        </section>
    )
}
