'use client'

import { useSearchParams } from 'next/navigation'
import Image from "next/image"
import Link from 'next/link'

export default function HeroSection() {
    const searchParams = useSearchParams()

    const heroToefl = searchParams.get('hero')

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between bg-secondaryLC w-full">
            <div className="w-full p-[1rem]">
                <article className="lg:pl-[5rem] lg:pt-[2rem]">
                    <Image
                        alt="logo kampung inggris lc"
                        src='/logo-white.webp'
                        width={150}
                        height={150}
                        priority
                        className="hidden lg:block"
                    />
                    <h1 className="text-[28px] lg:text-[48px] text-black font-extrabold leading-tight lg:leading-[58.09px]">Belajar Bahasa Inggris dari Basic hingga Mahir di Lingkungan yang Mendukung</h1>
                    <p className="text-[20px] lg:text-[32px] text-black font-light lg:leading-[38.73px] py-1 lg:py-5">Gak cuma teori, nikmati praktik bahasa Inggris setiap hari + <b className="font-bold">BONUS LIBURAN KE BALI DAN REAL TEST TOEFL ITP</b></p>
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
            {heroToefl === "toefl" ? <div className="w-full overflow-hidden">
                <Image
                    alt="hero image program em/emp kampung inggris lc"
                    // src='/hero/Hero Image EMEMP.png'
                    src='/hero/Hero EM EMP TOEFL.webp'
                    width={720}
                    height={450}
                    priority
                    className="scale-[1.01]"
                />
            </div> :
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
            }
        </div>
    )
}