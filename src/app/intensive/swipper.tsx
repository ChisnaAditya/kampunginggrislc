"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image"

export default function Swipper() {
    function avatarImage() {
        return (
            <div className="flex flex-col w-full">
                <Image
                    alt="avatar"
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="avatar rounded-full mx-auto"
                    width={100}
                    height={100}
                />
                <p className='text-center'> &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta! &quot; </p>

            </div>
        )
    }
    return (
        <div className='container py-10'>
            <Swiper
                effect={'coverflow'}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                autoHeight={true}
                coverflowEffect={{
                    rotate: 180,
                    stretch: 0,
                    depth: 150,
                    modifier: 7,
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                <SwiperSlide>
                    {avatarImage()}
                </SwiperSlide>
                <SwiperSlide>
                    {avatarImage()}
                </SwiperSlide>
                <SwiperSlide>
                    {avatarImage()}
                </SwiperSlide>
                <SwiperSlide>
                    {avatarImage()}
                </SwiperSlide>
                <SwiperSlide>
                    {avatarImage()}
                </SwiperSlide>
                <div className="slider-controler text-warning">
                    <div className="swiper-button-prev slider-arrow">
                    </div>
                    <div className="swiper-button-next slider-arrow">
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}
