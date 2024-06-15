"use client"

import { useState } from "react"
import HTMLReactParser from "html-react-parser";

export default function Faq() {
    const faqContent = [
        {
            title: 'Berapa usia minimal untuk join program english master dan english master plus?',
            content: 'Minimal untuk SMA dan maksimal usia 50 tahun',
        },
        {
            title: 'Apakah english master dapat Real Test TOEFL?',
            content: 'Real test toefl hanya bisa kamu dapatin jika kamu ambil program English Master Plus 6 Bulan',
        },
        {
            title: 'Fasilitas apa saja yang didapat di program english master dan english master plus?',
            content: 'Selain fasilitas belajar yang lengkap, program ini juga menyediakan asrama, toolkit belajar, akomodasi selama di Bali dan REAL TEST TOEFL untuk program english master plus.',
        },
        {
            title: 'Kapan kursus di Kampung Inggris LC dimulai?',
            content: 'Setiap bulan dibuka 2 gelombang yaitu di hari Senin yang terdekat dengan tanggal 10 atau 25 setiap bulannya. (Kecuali di program english master plus hanya buka di periode 10)',
        },
        {
            title: 'Apa saja materi yang diajarkan dalam Program English Master?',
            content: 'Materi yang diajarkan meliputi grammar, speaking, pronunciation, vocabulary, dan TOEFL untuk program 6 bulan.',
        },
        {
            title: 'Bagaimana frekuensi praktik harian dalam program ini?',
            content: 'Praktik bahasa Inggris dapat dilakukan setiap saat, baik saat belajar maupun di asrama, karena diterapkan sistem English Area selama 24/7.',
        },
        {
            title: 'Di mana lokasi gedung belajar dan asrama untuk Program English Master?',
            content: 'Lokasi gedung belajar dan asrama terletak di Kampung Inggris LC, Jl. Langkat No.88, Singgahan, Pelem, Kec. Pare, Kabupaten Kediri, Jawa Timur 64213.',
        },
        {
            title: 'Ada berapa kali pertemuan dalam 1 minggu?',
            content: `Perhari akan ada 2x kelas asrama dan 4x kelas utama dengan materi yang sudah terintegrasi.
            Untuk 1 minggu ada 5 hari efektif yaitu dari Senin-Kamis (materi) dan Jum’at (ujian). 
            Di hari Sabtu digunakan untuk kegiatan extra program sedangkan Minggu libur. Sehingga dalam 1 minggu akan ada 24 kali pembelajaran dan ujian dengan materi yang berbeda`,
        },
        {
            title: 'Fasilitas campnya apa saja?',
            content: 'Fasilitas campnya semua sama yaitu kasur, bantal, lemari, kipas angin, dan kamar mandi. per kamar akan di isi 3-4 orang tergantung luas kamar.',
        },
        {
            title: 'Apakah ada fasilitas penjemputan?',
            content: 'Kami menyediakan fasilitas penjemputan di beberapa lokasi dengan ada tambahan biaya.',
        },
        {
            title: 'Apakah bisa request 1 kamar dengan teman/saudara?',
            content: 'Maaf, peserta tidak diperbolehkan request kamar agar bisa saling sosialisasi satu sama lain, selain itu pembagian kelasnya akan diatur oleh tim kami berdasarkan hasil assessment test.',
        },
        {
            title: 'Apa perbedaan program intensive dengan EM 4 bulan atau EMP 6 bulan?',
            content: 'Tentu semakin lama durasi maka materinya semakin detail dan levelnya akan semakin naik. Untuk EM 4 bulan & EMP 6 bulan ada benefit tambahan study tour ke Bali selama 5 hari. Sedangkan,  program EMP 6 Bulan mendapat Materi TOEFL ITP sekaligus real Test TOEFL ITP',
        },
        {
            title: 'Bagaimana transportasi selama disini?',
            content: 'Peserta bisa menyewa sepeda atau bisa berjalan kaki bersama peserta lainnya.',
        },
        {
            title: 'Apakah bisa dapat sertifikat?',
            content: 'Bisa. Peserta akan dapat sertifikat program dan tambahan sertifikat TOEFL ITP khusus EMP 6 bulan.',
        },
        {
            title: 'Bagaimana akomodasi selama trip ke Bali?',
            content: 'Akomodasi sudah termasuk dalam biaya program. Transport, penginapan dan konsumsi sudah ditanggung.',
        },
    ]
    function IconPlus() {
        return (
            <svg width="50" height="50" className="w-[30px] h-[30px]" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 0C58.9868 0 76 17.0132 76 38C76 58.9868 58.9868 76 38 76C17.0132 76 0 58.9868 0 38C0 17.0132 17.0132 0 38 0Z" fill="#FCCF00" />
                <path d="M55.5765 42.9459H42.9459V55.5765C42.9459 56.0721 42.749 56.5475 42.3986 56.8979C42.0481 57.2484 41.5728 57.4453 41.0771 57.4453H34.9229C34.4272 57.4453 33.9519 57.2484 33.6014 56.8979C33.251 56.5475 33.0541 56.0721 33.0541 55.5765V42.9459H20.4235C19.9279 42.9459 19.4525 42.749 19.1021 42.3986C18.7516 42.0481 18.5547 41.5728 18.5547 41.0771V34.9229C18.5547 34.4272 18.7516 33.9519 19.1021 33.6014C19.4525 33.251 19.9279 33.0541 20.4235 33.0541H33.0541V20.4235C33.0541 19.9279 33.251 19.4525 33.6014 19.1021C33.9519 18.7516 34.4272 18.5547 34.9229 18.5547H41.0771C41.5728 18.5547 42.0481 18.7516 42.3986 19.1021C42.749 19.4525 42.9459 19.9279 42.9459 20.4235V33.0541H55.5765C56.0721 33.0541 56.5475 33.251 56.8979 33.6014C57.2484 33.9519 57.4453 34.4272 57.4453 34.9229V41.0771C57.4453 41.5728 57.2484 42.0481 56.8979 42.3986C56.5475 42.749 56.0721 42.9459 55.5765 42.9459Z" fill="#EA1E24" />
            </svg>
        )
    }
    interface accordionProps {
        title: string,
        content: string
    }
    function Accordion(prop: accordionProps) {
        const [isActive, setIsActive] = useState(false)

        const handleOpen = () => {
            setIsActive(!isActive)
        }
        return (
            <div onClick={handleOpen} className="border-[0.5px] border-[#232323] p-4 rounded-xl">
                <div className="flex items-center justify-start gap-4 lg:px-4 lg:py-2 cursor-pointer">
                    <div>
                        <IconPlus />
                    </div>
                    <h3 className="text-md leading-tight lg:text-[22px] font-bold ">{HTMLReactParser(prop.title)}</h3>
                </div>
                {isActive &&
                    <div className="lg:px-5 py-5 text-[12px] lg:text-[18px]">
                        <p>{prop.content}</p>
                    </div>
                }
            </div>
        )
    }
    return (
        <div className="flex flex-col px-[1rem] gap-5 lg:w-[1100px]">
            {faqContent.map((item, index) => (
                <Accordion key={index} title={item.title} content={item.content} />
            ))
            }
        </div>
    )
}
