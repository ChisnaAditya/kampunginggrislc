"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image";
import Link from 'next/link';
import partnership_1 from '../../assets/kampung-inggris-lc-pare-partnership-1.webp'
import partnership_2 from '../../assets/kampung-inggris-lc-pare-partnership-2.webp'
import partnership_3 from '../../assets/kampung-inggris-lc-pare-partnership-3.webp'
import partnership_4 from '../../assets/kampung-inggris-lc-pare-partnership-4.webp'

export default function Company() {
    return (
        <div className="py-20 flex flex-col items-center justify-center gap-4">
            <article className="prose text-center">
                <h1>
                    Mereka Sudah Belajar di
                    <br />
                    Kampung Inggris LC
                </h1>
            </article>

            <div className='container py-10'>
                <Swiper
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <Image alt='kampung inggris lc partnership' src={partnership_1} className='rounded-box' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt='kampung inggris lc partnership' src={partnership_2} className='rounded-box' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt='kampung inggris lc partnership' src={partnership_3} className='rounded-box' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt='kampung inggris lc partnership' src={partnership_4} className='rounded-box' />
                    </SwiperSlide>

                </Swiper>
            </div>

            <article className="prose">
                <h1>
                    Sekarang Giliranmu
                </h1>
            </article>

            <div className="arrow flex items-center justify-center w-full">
                <svg className="animate-bounce fill-base-content" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" /></svg>
            </div>
            <div className="btns flex items-center justify-center gap-4">
                <Link href="https://registrasi.kampunginggris.id/?br_code=PARE" >
                    <button className="btn btn-warning">Daftar Sekarang</button>
                </Link>

                <Link href="https://cs.kampunginggrislc.com/?cabang=pare" >
                    <button className="btn btn-accent">Konsultasi CS</button>
                </Link>
            </div>
            <div className="container divider"></div>
        </div>
    )
}