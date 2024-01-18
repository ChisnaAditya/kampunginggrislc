"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from "next/image"
import SwipperBtn from './swipperBtn';

export default function Swipper() {
    const swiper = useSwiper()
    function avatarImage() {
        return (
            <div className="flex flex-col w-full">
                <Image
                    alt="avatar"
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="avatar rounded-full mx-auto"
                    width={200}
                    height={200}
                />
                <p className='text-center'> &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta! &quot; </p>
                <p className='text-center mt-10 font-bold'>Khaira</p>
                <p className='text-center'>Alumni Intensive Program</p>
            </div>
        )
    }
    return (
        <div className='py-10 w-[720px]'>
            <Swiper
                loop={true}
                slidesPerView={3}
                modules={[Navigation, A11y]}
            >
                <SwiperSlide className='w-full h-auto'>{avatarImage()}</SwiperSlide>
                <SwiperSlide className='w-full h-auto'>{avatarImage()}</SwiperSlide>
                <SwiperSlide className='w-full h-auto'>{avatarImage()}</SwiperSlide>
                <SwiperSlide className='w-full h-auto'>{avatarImage()}</SwiperSlide>
            </Swiper>
            <div className="flex gap-4 pt-[48px]">
                <SwipperBtn />
            </div>
        </div>
    )
}
