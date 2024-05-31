import React from 'react'
import { Metadata } from 'next'
import YoutubePlayer from '@/components/YoutubePlayer'
import Image from 'next/image'
import HTMLReactParser from 'html-react-parser/lib/index'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Pare - Kampung Inggris LC",
    description: "Kursus bahasa inggris terbesar di kampung inggris pare kediri",
    verification: {
        google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA"
    },
}

function KotakIkon(props: any) {
    return (
        <div className='lg:w-[30%]'>
            <Image alt='kampung inggris lc pare' src={props.src} width={55} height={55} className='rounded-full' />
            <h3 className='text-icon text-left mt-4'>{props.title}</h3>
            <p className='p text-justify'>{props.desc}</p>
        </div>
    )
}

function CompanyLogo(props: any) {
    return (
        <Image alt={props.alt} src={props.src} width={150} height={150} />
    )
}

function CardTestimoni(props: any) {
    return (
        <div className='w-[350px] lg:w-[500px] flex flex-col justify-between flex-shrink-0 rounded-xl shadow-lg border-[1.5px] p-4'>
            <div className='p italic text-justify mb-2'>{props.testi}</div>
            <div className="flex items-center gap-2 border-t-[1.5px] pt-2">
                <figure>
                    <Image alt='kampung inggris lc pare' src={props.avatar} width={70} height={70} className='rounded-full' />
                </figure>
                <div className="flex flex-col justify-between ">
                    <h3 className='text-icon text-left text-primaryLC'>{props.name}</h3>
                    <p className='p text-left leading-none'>{props.job} <br /> {props.program}</p>
                </div>
            </div>
        </div>
    )
}

function CardTutor(props: any) {
    return (
        <div className='w-[70%] lg:w-[20%] flex-shrink-0'>
            <Image alt='kampung inggris lc pare' src={props.avatar} width={400} height={400} />
            <h3 className='text-icon text-center mt-4'>{props.name}</h3>
            <p className='p text-justify'>{props.bio}</p>
        </div>
    )
}

function TabelHarga() {
    const harga = [
        {
            name: 'English Master',
            prices: [
                {
                    duration: '6 bulan',
                    rupiah: 'Rp. 9.500.000'
                },
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
                `Academic English <span className='text-primaryLC'>*</span>`,
                `TOEFL Preparation <span className='text-primaryLC'>*</span>`,
                `Real Test TOEFL <span className='text-primaryLC'>*</span>`,
            ],
            notes: `Fasilitas Paket 6 Bulan <span className='text-primaryLC'>*</span>`,
            populer: false,
            link: `https://cs.kampunginggrislc.com?paket=em/emp`,
        },
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
        {
            name: 'TOEFL',
            prices: [
                {
                    duration: '1 bulan',
                    rupiah: 'Rp. 1.750.000'
                },
            ],
            fasilitas: [
                'Camp/asrama English Area',
                'Assessment Test',
                'Qualified & Experienced Teacher',
                '4x Main Class, 90 menit per pertemuan',
                'Free konsultasi',
                'TOEFL Simulator Every Week',
                'Modul Pembelajaran',
                'Kaos LC, Sertifikat LC',
            ],
            notes: ``,
            populer: false,
            link: `https://cs.kampunginggrislc.com?paket=toefl`,
        },
        {
            name: 'Holiday Ceria',
            prices: [
                {
                    duration: '2 minggu',
                    rupiah: 'Rp. 1.700.000'
                },
                {
                    duration: '1 minggu',
                    rupiah: 'Rp. 990.000'
                },
            ],
            fasilitas: [
                'Camp/asrama English Area',
                '6x Main Class',
                'Modul Pembelajaran',
                'Sertifikat LC, Merchandise LC',
                'Grammar, Speaking, Pronunciation',
                'Gratis Makan 3x sehari',
                'Gratis Laundry',
                'Gratis Edu-Trip',
            ],
            notes: ``,
            populer: true,
            link: `https://cs.kampunginggrislc.com?paket=holiday+ceria`,
        },
    ]
    return (
        <div className='flex flex-col items-center lg:flex-row lg:items-start gap-[20px]'>
            {harga.map((item, index) => (
                <div key={index} className='relative w-[350px] rounded-xl shadow-lg bg-white p-4 overflow-hidden'>
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
export default function Pare() {
    const benefits = [
        {
            icon: '/icon/A1@4x.webp',
            title: 'Metode berkualitas',
            desc: 'Integrated Intensive Program, sistem belajar yang terintegrasi dari speaking, grammar, dan pronounciation bakal mempercepat kamu mahir berbahasa Inggris.'
        },
        {
            icon: '/icon/A2@4x.webp',
            title: 'Pengajar Berpengalaman',
            desc: 'LC memilih pengajar terbaik dan berpengalaman untuk memastikan kamu dapet pembelajaran yang top-notch.'
        },
        {
            icon: '/icon/A3@4x.webp',
            title: 'Metode Belajar Fun',
            desc: 'Pengajar di LC penuh kreatifitas yang bikin suasana belajar jadi asik dan mudah dipahami.'
        },
        {
            icon: '/icon/A4@4x.webp',
            title: 'Lingkungan yang Mendukung',
            desc: 'LC nyediain English area, jadi kamu bisa praktik speaking English 24 Jam biar makin natural. Ada juga event penunjang yang aik dan bisa ningkatin ke-PD-anmu.'
        },
        {
            icon: '/icon/A5@4x.webp',
            title: 'Tutor Pendamping Asrama',
            desc: 'Selain nyediain camp yang nyaman, kamu juga bakal didampingi tutor pendamping yang friendly dan ramah, siap jadi bestie-mu selama di camp.'
        },
        {
            icon: '/icon/A6@4x.webp',
            title: 'Banyak Chanel Pembayaran',
            desc: 'Kamu bisa bayar dari mana aja dan kapan aja'
        },
        {
            icon: '/icon/A7@4x.webp',
            title: 'Ikatan Kekeluargaan',
            desc: 'Rasakan hangatnya keluarga baru dari berbagai kota yang siap bikin lupa jauh dari rumah dengan sejuta kenangan indah.'
        },
        {
            icon: '/icon/A8@4x.webp',
            title: 'More than Just Learning',
            desc: 'Jadwal yang terstruktur bakal melatih kamu menjadi terstruktur, disiplin, dan menjadi pribadi percaya diri yang lebih keren.'
        },
    ]

    const metode = [
        {
            icon: '/icon/B1@4x.webp',
            title: 'Confidence Booster',
            desc: 'LC akan ningkatin ke-pd-anmu dengan public speaking di depan teman-teman, jadi kamu terbiasa tampil di depan umum.'
        },
        {
            icon: '/icon/B2@4x.webp',
            title: 'Grammar Hack',
            desc: 'Belajar grammar jadi mudah dan fun dengan teknik storytelling dan metode translation yang unik, bikin kamu jago mengaplikasikan ke dalam kalimat.'
        },
        {
            icon: '/icon/B3@4x.webp',
            title: 'Speak Properly',
            desc: 'Latihan mengucapkan kosa kata bahasa Inggris ala native speaker di LC, dengan audio dan challenge seru yang bakal bikin kamu lancar berbahasa Inggris.'
        },
        {
            icon: '/icon/B4@4x.webp',
            title: 'Speaking Without Thinking',
            desc: 'Dengan camp English area, jadikan kamu lancar dan natural berbahasa Inggris dan berbicara tanpa mikir ekstra.'
        },
        {
            icon: '/icon/B5@4x.webp',
            title: 'Conceptual Mapping Skills',
            desc: 'Teacher LC akan mengajarkan kamu cara efektif merangkum pelajaran atau artikel dengan cepat dan mempresentasikannya kembali secara akurat.'
        },
        {
            icon: '/icon/B7@4x.webp',
            title: 'English for Spesific Purpose',
            desc: 'LC akan membekali kamu dengan kosa kata dan hal lain yang berhubungan dengan tujuan belajar bahasa Inggrismu.'
        },
        {
            icon: '/icon/B6@4x.webp',
            title: 'Critical Thinking',
            desc: 'Games dan aktivitas seru seperti English debate dan random question bakal asah kemampuan berpikir, berinovasi, dan berargumen dengan cerdas, sambil boost confidence-mu untuk berani sepak up berbahasa Inggris.'
        },
    ]

    const tutor = [
        {
            avatar: '/tutor/mr al kampung inggris lc.webp',
            bio: 'Having 7 years of experience in teaching general English, English for specific purpose, TOEFL, Achieved TOEFL 560.',
            name: 'Mr. Al',

        },
        {
            avatar: '/tutor/mr naja kampung inggris lc.webp',
            bio: 'Having 7 years of experience in teaching grammar, TOEFL.',
            name: 'Mr. Naja',

        },
        {
            avatar: '/tutor/ms liha kampung inggris lc.webp',
            bio: 'Having 5 years of experience in teaching general English, TOEFL, IELTS, Academic vocabulary.',
            name: 'Ms. Liha',

        },
        {
            avatar: '/tutor/mr lubis kampung inggris lc.webp',
            bio: 'Having 5 years of experience in teaching general English, TOEFL, Academic vocabulary, Achieved TOEFL 520.',
            name: 'Mr. Lubis',

        },
        {
            avatar: '/tutor/ms eva kampung inggris lc.webp',
            bio: 'Having 5 years of experience in teaching general English, TOEFL, IELTS, Achieved TOEFL 560.',
            name: 'Ms. Eva',
        },
        {
            avatar: '/tutor/ms pooja kampung inggris lc.webp',
            bio: 'Having 4 years of experience in teaching general English, English for specific purpose, Academic vocabulary, IELTS, TOEFL.',
            name: 'Ms. Pooja',
        },
        {
            avatar: '/tutor/mr alen kampung inggris lc.webp',
            bio: '4 Years Experience in Pronunciation, Speaking, Grammar, Listening for TOEFL.',
            name: 'Mr. Alen',
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

    const company = [
        {
            name: 'DENSO',
            src: '/company/1.webp'
        },
        {
            name: 'AKR',
            src: '/company/2.webp'
        },
        {
            name: 'Cargill',
            src: '/company/3.webp'
        },
        {
            name: 'OS Selnajaya',
            src: '/company/4.webp'
        },
        {
            name: 'IAIN Kudus',
            src: '/company/5.webp'
        },
        {
            name: 'IAIN Metro',
            src: '/company/6.webp'
        },
        {
            name: 'Sampoerna',
            src: '/company/7.webp'
        },
        {
            name: 'Pelindo',
            src: '/company/8.webp'
        },
        {
            name: 'Institut Teknologi Sepuluh Nopember',
            src: '/company/9.webp'
        },
        {
            name: 'Semesta Marga Raya',
            src: '/company/10.webp'
        },
        {
            name: 'Barron Pandu Abadi',
            src: '/company/11.webp'
        },
    ]

    const rombongan = [
        {
            name: 'An-Nahl Jambi',
            src: '/rombongan/kampung-inggris-lc-partner1.webp',
        },
        {
            name: 'SMP Islam Al-Azhar 16 Cikarang',
            src: '/rombongan/kampung-inggris-lc-partner2.webp',
        },
        {
            name: 'SMA Muhammadiyah Metro Lampung',
            src: '/rombongan/kampung-inggris-lc-partner3.webp',
        },
        {
            name: 'Universitas Pakuwon Bogor',
            src: '/rombongan/kampung-inggris-lc-partner4.webp',
        },
    ]

    const fasilitas = [
        '/fasilitas/1.webp',
        '/fasilitas/2.webp',
        '/fasilitas/3.webp',
        '/fasilitas/4.webp',
        '/fasilitas/5.webp',
        '/fasilitas/6.webp',
        '/fasilitas/7.webp',
        '/fasilitas/8.webp',
        '/fasilitas/kampung-inggris-lc-keseruan1.webp',
        '/fasilitas/kampung-inggris-lc-keseruan2.webp',
        '/fasilitas/kampung-inggris-lc-keseruan3.webp',
        '/fasilitas/kampung-inggris-lc-keseruan4.webp',
        '/fasilitas/kampung-inggris-lc-keseruan5.webp',
        '/fasilitas/kampung-inggris-lc-keseruan6.webp',
        '/fasilitas/kampung-inggris-lc-keseruan7.webp',
        '/fasilitas/kampung-inggris-lc-keseruan8.webp',
    ]

    return (
        <section>
            <div className="flex flex-col px-[1rem] lg:flex-row lg:px-[3rem] gap-[40px] justify-center items-center min-h-screen mx-auto bg-pare">
                <div className="left w-full h-full">
                    <Image
                        alt='hero image kampung inggris lc pare'
                        src='/hero/hero-pare.webp'
                        width={720}
                        height={450}
                        priority
                    />
                </div>
                <div className="text-center w-full h-full">
                    <h1 className='headline leading-[1.2em] text-white mb-4'>MENGAPA 53.333+ SISWA DAN ALUMNI LC PUAS DAN MEREKOMENDASIKAN BELAJAR DI KAMPUNG INGGRIS LC?</h1>
                    {/* <h2 className='subheadline'>Subheadline</h2> */}
                    <Link href="#paket" className="btn border-none bg-yellow-300 hover:scale-[1.07] text-black text-[1.2rem] font-bold w-full lg:w-1/2 rounded-2xl shadow-lg">
                        DAFTAR SEKARANG
                    </Link>
                </div>
            </div>
            <div className="text-center mt-10 max-w-[1200px] mx-auto px-[1rem]">
                <h2 className='subheadline text-primaryLC'>KAMPUNG INGGRIS LC – LANGUAGE CENTER</h2>
                <p className='paragraph mb-10'>Adalah salah satu lembaga kursus bahasa inggris <b>TERBESAR</b> dan <b>TERFAVORIT</b> di
                    kampung Inggris Pare. Lebih dari <b>53.333+</b> alumni dari berbagai daerah di
                    indonesia sudah merasakan metode <b>UNIK</b>  yang terbukti membuat mereka <b>PUAS</b> dan
                    <b>MAU</b> merekomendasikan LC.
                </p>
                <div className="w-full lg:w-[70%] mx-auto">
                    <YoutubePlayer videoId="zE6Xr5o2axc" />
                </div>
                <h2 className='subheadline my-10'>ALASAN 53.333+ ALUMNI MEMILIH KAMPUNG INGGRIS LC</h2>
                <div className='flex flex-wrap gap-[40px]'>
                    {
                        benefits.map((benefit, index) => (
                            <KotakIkon
                                key={index}
                                src={benefit.icon}
                                title={benefit.title}
                                desc={benefit.desc}
                            />
                        ))
                    }
                </div>
                <h2 className='subheadline mt-10'>PERUSAHAAN PERNAH BELAJAR DI KAMPUNG INGGRIS LC</h2>
                <div className='flex flex-wrap items-start justify-center lg:px-32'>
                    {
                        company.map((item, index) => (
                            <CompanyLogo
                                key={index}
                                alt={item.name}
                                src={item.src}
                            />
                        ))
                    }
                </div>
                <h2 className='subheadline mt-10'>MEREKA SUDAH BELAJAR DI KAMPUNG INGGRIS LC</h2>
                <div className='flex gap-[20px] overflow-x-auto w-full py-6'>
                    {
                        rombongan.map((item, index) => (
                            <Image key={index} alt={item.name} src={item.src} width={720} height={450} className='rounded-xl' />
                        ))
                    }
                </div>
                <h2 className='subheadline my-10'>7 METODE INI BIKIN RIBUAN MEMBER LANCAR BERBAHASA INGGRIS</h2>
                <div className='flex flex-wrap gap-[40px]'>
                    {
                        metode.map((item, index) => (
                            <KotakIkon
                                key={index}
                                src={item.icon}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))
                    }
                </div>
                <h2 className='subheadline mt-10'>TEMUI ALUMNI YANG SUKSES DAN DAPETIN INSPIRASI DI SINI</h2>
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
                <h2 className='subheadline mt-10'>YUK KENALAN SAMA TEACHER KAMPUNG INGGRIS LC</h2>
                <div className='flex gap-[20px] overflow-x-auto w-full py-6'>
                    {
                        tutor.map((item, index) => (
                            <CardTutor
                                key={index}
                                avatar={item.avatar}
                                name={item.name}
                                bio={item.bio}
                            />
                        ))
                    }
                </div>
                <h2 className='subheadline mt-10'>INI FASILITAS DAN KESERUAN YANG BISA KAMU NIKMATI DI KAMPUNG INGGRIS LC</h2>
                <div className='flex gap-[20px] overflow-x-auto w-full py-6'>
                    {
                        fasilitas.map((item, index) => (
                            <Image key={index} alt='fasilitas kampung inggris lc pare' src={item} width={720} height={450} className='rounded-xl' />
                        ))
                    }
                </div>
            </div>
            <div className="mt-10 lg:px-20 py-10 bg-black">
                <div id='paket' className='px-[1rem]'>
                    <h2 className='subheadline text-secondaryLC text-center'>YUK PILIH PAKET PROGRAM SESUAI KEBUTUHANMU</h2>
                    <TabelHarga />
                    <div className="flex flex-col items-center mt-4">
                        <h2 className='text-secondaryLC text-center text-[28px] font-bold'>Siap Mahir Bahasa Inggris?</h2>
                        <p className='p text-white'>Daftar program sekarang</p>
                        <svg className=' fill-white w-[80px] animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Double down"><path d="M12 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 14.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 17z" /><path d="M12 13a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 12 13z" /></g></svg>
                        <Link
                            className="btn bg-primaryLC hover:bg-red-800 hover:font-bold text-white border-none rounded-2xl"
                            href={`https://registrasi.kampunginggris.id/?br_code=PARE`}
                        >
                            Daftar Sekarang
                        </Link>
                    </div>
                    <div className="flex justify-between items-center lg:w-3/4 mx-auto mt-10 border-[0.5px] rounded-xl p-4">
                        <h2 className='text-secondaryLC text-[16px] lg:text-[28px] font-bold'>
                            Bingung Menentukan Paket Pilihan? <br />
                            <span><p className='p text-white font-normal'>Tanya cs kami</p></span>
                        </h2>
                        <Link
                            className="btn bg-green-700 hover:bg-green-800 hover:font-bold text-white border-none w-1/4 rounded-2xl"
                            href={`https://cs.kampunginggrislc.com/`}
                        >
                            Hubungi CS
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
