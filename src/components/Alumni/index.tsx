"use client"

import Image from "next/image"
import testi_1 from "../../assets/kampung-inggris-lc-pare-testi-1.webp"
import testi_2 from "../../assets/kampung-inggris-lc-pare-testi-2.webp"
import testi_3 from "../../assets/kampung-inggris-lc-pare-testi-3.webp"
import testi_4 from "../../assets/kampung-inggris-lc-pare-testi-4.webp"
import testi_5 from "../../assets/kampung-inggris-lc-pare-testi-5.webp"
import testi_6 from "../../assets/kampung-inggris-lc-pare-testi-6.webp"
import testi_7 from "../../assets/kampung-inggris-lc-pare-testi-7.webp"
import testi_8 from "../../assets/kampung-inggris-lc-pare-testi-8.webp"
import testi_9 from "../../assets/kampung-inggris-lc-pare-testi-9.webp"
import testi_10 from "../../assets/kampung-inggris-lc-pare-testi-10.webp"
import testi_11 from "../../assets/kampung-inggris-lc-pare-testi-11.webp"
import testi_12 from "../../assets/kampung-inggris-lc-pare-testi-12.webp"

export default function Alumni() {
    const testies = [
        testi_12,
        testi_11,
        testi_10,
        testi_9,
        testi_7,
        testi_1,
        testi_8,
        testi_5,
        testi_6,
        testi_3,
        testi_4,
        testi_2,
    ]
    return (
        <div className="flex flex-col w-full items-center justify-center py-10">
            <article className="container prose flex flex-col w-full text-center">
                <h1 className="text-2xl">Temui <span className="italic text-primaryLC">Alumni yang Sukses</span>  dan Dapetin Inspirasi di Sini</h1>
            </article>
            <div className="container carousel carousel-center p-2 space-x-4">
                {testies.map((testi, index) => (
                    <div key={index} className="carousel-item w-2/3 lg:w-1/3">
                        <Image
                            alt="kampung inggris lc alumni"
                            src={testi}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}