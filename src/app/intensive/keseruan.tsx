"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Image, { StaticImageData } from "next/image"
import { useRef } from 'react';

import tutor_1 from "../../assets/keseruan/1.png"
import tutor_2 from "../../assets/keseruan/2.png"
import tutor_3 from "../../assets/keseruan/3.png"
import tutor_4 from "../../assets/keseruan/4.png"
import tutor_5 from "../../assets/keseruan/5.png"

export default function Keseruan() {
    const swiperRef = useRef(null)
    const tutorContent = [
        {
            avatar: tutor_1,
            bio: 'Having 10 years of experience in teaching General English, Academic English, Academic Vocabulary, Grammar for Speaking, English for Specific Purposes, IELTS, and TOEFL.',
            name: 'Mr. Soni',

        },
        {
            avatar: tutor_2,
            bio: 'Having 7 years of experience in teaching general English, English for specific purpose, TOEFL, Achieved TOEFL 560.',
            name: 'Mr. Al',

        },
        {
            avatar: tutor_3,
            bio: 'Having 7 years of experience in teaching grammar, TOEFL.',
            name: 'Mr. Naja',

        },
        {
            avatar: tutor_4,
            bio: 'Having 6 years of experience in teaching speaking, IELTS.',
            name: 'Ms. Iva',

        },
        {
            avatar: tutor_5,
            bio: 'Having 5 years of experience in teaching general English, TOEFL, IELTS, Academic vocabulary.',
            name: 'Ms. Liha',

        },
    ]

    return (
        <div className='py-10 w-full lg:w-[720px]'>
            <Swiper
                loop={true}
                slidesPerView={1}
                modules={[Navigation]}
                onBeforeInit={(swiper: any) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    tutorContent.map((item, index) => (
                        <SwiperSlide key={index} className='w-full h-auto'>
                            <div className="flex flex-col justify-start w-full">
                                <Image
                                    alt="avatar"
                                    src={item.avatar}
                                    className="mx-auto rounded-3xl"
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className="flex gap-4 justify-center lg:justify-start mt-10">
                <button aria-label='btn-navigation' onClick={() => (swiperRef.current as any).slidePrev()} >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.04907e-06 24C4.70579e-07 10.7656 10.7656 -4.70579e-07 24 -1.04907e-06C37.2344 -1.62757e-06 48 10.7656 48 24C48 37.2344 37.2325 48 24 48C10.7675 48 1.62757e-06 37.2344 1.04907e-06 24ZM44.282 24C44.282 12.818 35.1839 3.71803 24 3.71803C12.8161 3.71803 3.71803 12.818 3.71803 24C3.71803 35.1839 12.8161 44.282 24 44.282C35.1839 44.282 44.282 35.182 44.282 24Z" fill="#ABABAB" />
                        <path d="M26.5654 34.6148L17.2702 25.3197C16.5489 24.5947 16.5489 23.4235 17.2702 22.6985L26.5654 13.4033C27.2606 12.8066 28.2887 12.8066 28.9839 13.4033C29.7629 14.0708 29.8539 15.2456 29.1865 16.0246L21.2114 23.9998L29.1866 31.9936C29.9079 32.7187 29.9079 33.8898 29.1866 34.6148C28.4615 35.3362 27.2903 35.3362 26.5654 34.6148Z" fill="#ABABAB" />
                    </svg>
                </button>
                <button aria-label='btn-navigation' onClick={() => (swiperRef.current as any).slideNext()} >
                    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48.4546 24C48.4546 10.7656 37.689 -4.70579e-07 24.4546 -1.04907e-06C11.2202 -1.62757e-06 0.454589 10.7656 0.454589 24C0.454588 37.2344 11.2221 48 24.4546 48C37.6871 48 48.4546 37.2344 48.4546 24ZM4.17262 24C4.17262 12.818 13.2707 3.71803 24.4546 3.71803C35.6385 3.71803 44.7366 12.818 44.7366 24C44.7366 35.1839 35.6385 44.282 24.4546 44.282C13.2707 44.282 4.17262 35.182 4.17262 24Z" fill="#ABABAB" />
                        <path d="M21.8892 34.6148L31.1844 25.3197C31.9057 24.5947 31.9057 23.4235 31.1844 22.6985L21.8892 13.4033C21.194 12.8066 20.1659 12.8066 19.4707 13.4033C18.6917 14.0708 18.6007 15.2456 19.2681 16.0246L27.2432 23.9998L19.268 31.9936C18.5467 32.7187 18.5467 33.8898 19.268 34.6148C19.993 35.3362 21.1643 35.3362 21.8892 34.6148Z" fill="#ABABAB" />
                    </svg>
                </button>
            </div>
        </div>
    )
}