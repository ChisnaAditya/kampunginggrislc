"use client"

import Image from "next/image"
import icon_1 from "../../assets/icon/A1@4x.webp"
import icon_2 from "../../assets/icon/A2@4x.webp"
import icon_3 from "../../assets/icon/A3@4x.webp"
import icon_4 from "../../assets/icon/A4@4x.webp"
import icon_5 from "../../assets/icon/A5@4x.webp"
import icon_6 from "../../assets/icon/A6@4x.webp"
import icon_7 from "../../assets/icon/A7@4x.webp"
import icon_8 from "../../assets/icon/A8@4x.webp"

export default function Card() {
    const content = [
        {
            icon: icon_1,
            title: 'Metode berkualitas',
            desc: 'Integrated Intensive Program, sistem belajar yang terintegrasi dari speaking, grammar, dan pronounciation bakal mempercepat kamu mahir berbahasa Inggris.'
        },
        {
            icon: icon_2,
            title: 'Pengajar Berpengalaman',
            desc: 'LC memilih pengajar terbaik dan berpengalaman untuk memastikan kamu dapet pembelajaran yang top-notch.'
        },
        {
            icon: icon_3,
            title: 'Metode Belajar Fun',
            desc: 'Pengajar di LC penuh kreatifitas yang bikin suasana belajar jadi asik dan mudah dipahami.'
        },
        {
            icon: icon_4,
            title: 'Lingkungan yang Mendukung',
            desc: 'LC nyediain English area, jadi kamu bisa praktik speaking English 24 Jam biar makin natural. Ada juga event penunjang yang aik dan bisa ningkatin ke-PD-anmu.'
        },
        {
            icon: icon_5,
            title: 'Tutor Pendamping Asrama',
            desc: 'Selain nyediain camp yang nyaman, kamu juga bakal didampingi tutor pendamping yang friendly dan ramah, siap jadi bestie-mu selama di camp.'
        },
        {
            icon: icon_6,
            title: 'Banyak Chanel Pembayaran',
            desc: 'Kamu bisa bayar dari mana aja dan kapan aja'
        },
        {
            icon: icon_7,
            title: 'Ikatan Kekeluargaan',
            desc: 'Rasakan hangatnya keluarga baru dari berbagai kota yang siap bikin lupa jauh dari rumah dengan sejuta kenangan indah.'
        },
        {
            icon: icon_8,
            title: 'More than Just Learning',
            desc: 'Jadwal yang terstruktur bakal melatih kamu menjadi terstruktur, disiplin, dan menjadi pribadi percaya diri yang lebih keren.'
        },
    ]

    return (
        <div className="container flex flex-col items-center justify-center mt-20">
            <article className="prose flex flex-col w-full text-center mb-1">
                <h1 className="text-2xl">
                    Ini 8 Hal yang Bakal Kamu Dapetin
                    <br />
                    di Kampung Inggris LC
                </h1>
            </article>

            <div className="grid grid-cols-1 gap-2 sm:grid sm:grid-cols-3 md:gap-4">
                {content.map((item, index) => (
                    <div key={index} className="card w-auto md:w-96 bg-base-100 shadow-md">
                        <figure className="px-10 pt-10 ">
                            <Image
                                alt="kampung inggris lc manfat"
                                className="w-12 h-12 bg-center bg-cover rounded-full"
                                src={item.icon}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-md">{item.title}</h2>
                            <p className="text-xs text-left">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}