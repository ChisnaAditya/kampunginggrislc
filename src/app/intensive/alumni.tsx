
"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Image, { StaticImageData } from "next/image"
import { useRef } from 'react';

import alumni_1 from "../../assets/alumni/1.png"
import alumni_2 from "../../assets/alumni/2.png"
import alumni_3 from "../../assets/alumni/3.png"
import alumni_4 from "../../assets/alumni/4.png"
import alumni_5 from "../../assets/alumni/5.png"
import alumni_6 from "../../assets/alumni/6.png"
import alumni_7 from "../../assets/alumni/7.png"
import alumni_8 from "../../assets/alumni/8.png"
import alumni_9 from "../../assets/alumni/9.png"
import alumni_10 from "../../assets/alumni/10.png"
import alumni_11 from "../../assets/alumni/11.png"
import alumni_12 from "../../assets/alumni/12.png"

export default function Alumni() {
    const swiperRef = useRef(null)
    const alumniContent = [
        {
            avatar: alumni_1,
            testi: 'Dulu sebelum tau LC, susah banget rasanya buat belajar English. Tapi, setelah gabung LC, belajar English jadi terasa lebih mudah dan menyenangkan. Thanks to ilmu yang diberikan LC, aku berhasil dapetin apa yang aku mau dan jadi bagian dari SUPER CREW!',
            name: 'Monica | Pramugari',
            program: 'Alumni English Master'
        },
        {
            avatar: alumni_2,
            testi: 'Melangkah tanpa persiapan matang buat aku harus lapang dada. Aku ga nyerah dan akhirnya ambil kursus di LC buat persiapan pendaftaran tahun depannya. Ternyata worth it banget, I’ve got much experience. Finally, I got what I dreamed of!',
            name: 'Bagus | Polisi',
            program: 'Alumni English Master'
        },
        {
            avatar: alumni_3,
            testi: 'Awal masuk aku cupu ga bisa apa-apa. Dari LC aku dapet banyak ilmu, pengalaman, vocab baru, dan temen dari Sabang sampai Merauke. Alhamdulillah, sekarang aku bisa jadi bagian dari Best Crew in The World.',
            name: 'Rizka Windi | Pramugari',
            program: 'Alumni English Master'
        },
        {
            avatar: alumni_4,
            testi: 'Bagi saya 4 bulan di LC terasa sangat cepat. Saya mendapat predikat member teraktif dan nilai yang baik. Setelah itu saya memberanikan diri real test TOEFL, untuk nguji kemampuan. Alhamdulillah hasilnya melebihi target.',
            name: 'Annisa Nurul | Beasiswa Turki',
            program: 'Alumni English Master'
        },
        {
            avatar: alumni_5,
            testi: 'Pengalaman yang saya dapatkan luar biasa dari basic sampai jadi English master. Selama di LC, Saya mendapat materi yang luar biasa dari teacher dan tutor. Dapet teman baru yang saling mendukung dari sabang - merauke.',
            name: 'Alief Rasyafara | Finalis Putra Kebudayaan Sulawesi Selatan 2018',
            program: 'Alumni English Master'
        },
        {
            avatar: alumni_6,
            testi: 'Weekly meeting, gathering, yasinan, table manner, outbound, jalan-jalan ke Bali, best camp competition, dan banyak lagi kegiatan asik lainnya. Bikin pertemanan naik level jadi keluarga yang berjuang bareng buat bisa bahasa Inggris.',
            name: 'Elvira R | English Teacher & Penulis Buku',
            program: 'Alumni English Master'
        },
        {
            avatar: alumni_7,
            testi: 'Bagi saya LC itu tempat yang paling menyenangkan, di sana saya mendapatkan banyak hal baru; teman, pengalaman, dan yang paling penting saya belajar manajemen waktu dengan baik. Sangat berharga dan nggak bisa dilupain sampe sekarang.',
            name: 'Mohamad Arbaz | Pemeran FTV Indosiar',
            program: 'Alumni Intensive Program'
        },
        {
            avatar: alumni_8,
            testi: 'Saya ambil paket 2 bulan tapi nambah 1 bulan lagi, karena metode belajar di LC bagus banget, tutor yang asik, selain itu juga dapet teman yang super humble dari Sabang sampai Merauke.',
            name: 'Jarshaka Syarif | Aktor',
            program: 'Alumni Intensive Program'
        },
        {
            avatar: alumni_9,
            testi: 'LC memberikan banyak pengalaman baru yang belum pernah aku rasakan sebelumnya. Mulai dari ilmu, temen dan kelompoknya, dan kekeluargaannya tak terlupakan. Kedisiplinan dan English areanya super duper top banget.',
            name: 'Mutia Koirun Nissa | Putri Indonesia Sosmed (Jabar) 2018',
            program: 'Alumni Intensive Program'
        },
        {
            avatar: alumni_10,
            testi: 'Aku seneng banget bisa ke LC karena banyak pelajaran yang kuambil, temen dari seluruh Indonesia, manage keuangan, dan kemandirian. LC tuh kaya rumah kedua, semuanya berasa kaya keluarga.',
            name: 'Rifa Dzahabiyyah | Selebgram',
            program: 'Alumni Intensive Program'
        },
        {
            avatar: alumni_11,
            testi: 'Awalnya grammar saya masih berantakan, setelah gabung di Kampung Inggris LC saya merasakan banyak perubahan pada struktur kalimat bahasa Inggris.',
            name: 'Naqita | Selebgram TikTok',
            program: 'Alumni Intensive Program'
        },
        {
            avatar: alumni_12,
            testi: 'Menurutku yang paling seru itu kewajiban untuk speaking English, karena aku bisa practice dan ningkatin kemampuanku untuk komunikasi sehari-hari. Materi speaking, grammar, dan pronunciation. Well, 3 minggu di LC ga cukup harus nambah lagi.',
            name: 'Cut Putri Firlianda | Duta Genre Putri Aceh 2020',
            program: 'Alumni Intensive Program'
        },
    ]

    return (
        <div className='py-10 w-[720px]'>
            <Swiper
                loop={true}
                slidesPerView={3}
                modules={[Navigation]}
                onBeforeInit={(swiper: any) => {
                    swiperRef.current = swiper;
                }}

            >
                {
                    alumniContent.map((item, index) => (
                        <SwiperSlide key={index} className='w-full h-auto'>
                            <div className="flex flex-col justify-start w-full h-[500px]">
                                <Image
                                    alt="avatar"
                                    src={item.avatar}
                                    className="avatar rounded-full mx-auto"
                                    width={200}
                                    height={200}
                                />
                                <p className='text-center mt-2'>{item.testi.substring(0, 100)} <span>...</span>
                                    <br />
                                    <span
                                        className='font-bold text-warning cursor-pointer hover:text-warning/80'
                                        onClick={() => document.getElementById(`${item.name}`)?.showModal()}>
                                        Read more
                                    </span>
                                </p>
                                <div>
                                    <p className='text-center mt-10 font-bold'>{item.name}</p>
                                    <p className='text-center'>{item.program}</p>
                                </div>

                                <dialog id={item.name} className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        <p className="py-4">{item.testi}</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className="flex gap-4 pt-[48px]">
                <button onClick={() => swiperRef.current?.slidePrev()} >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.04907e-06 24C4.70579e-07 10.7656 10.7656 -4.70579e-07 24 -1.04907e-06C37.2344 -1.62757e-06 48 10.7656 48 24C48 37.2344 37.2325 48 24 48C10.7675 48 1.62757e-06 37.2344 1.04907e-06 24ZM44.282 24C44.282 12.818 35.1839 3.71803 24 3.71803C12.8161 3.71803 3.71803 12.818 3.71803 24C3.71803 35.1839 12.8161 44.282 24 44.282C35.1839 44.282 44.282 35.182 44.282 24Z" fill="#ABABAB" />
                        <path d="M26.5654 34.6148L17.2702 25.3197C16.5489 24.5947 16.5489 23.4235 17.2702 22.6985L26.5654 13.4033C27.2606 12.8066 28.2887 12.8066 28.9839 13.4033C29.7629 14.0708 29.8539 15.2456 29.1865 16.0246L21.2114 23.9998L29.1866 31.9936C29.9079 32.7187 29.9079 33.8898 29.1866 34.6148C28.4615 35.3362 27.2903 35.3362 26.5654 34.6148Z" fill="#ABABAB" />
                    </svg>
                </button>
                <button onClick={() => swiperRef.current?.slideNext()} >
                    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48.4546 24C48.4546 10.7656 37.689 -4.70579e-07 24.4546 -1.04907e-06C11.2202 -1.62757e-06 0.454589 10.7656 0.454589 24C0.454588 37.2344 11.2221 48 24.4546 48C37.6871 48 48.4546 37.2344 48.4546 24ZM4.17262 24C4.17262 12.818 13.2707 3.71803 24.4546 3.71803C35.6385 3.71803 44.7366 12.818 44.7366 24C44.7366 35.1839 35.6385 44.282 24.4546 44.282C13.2707 44.282 4.17262 35.182 4.17262 24Z" fill="#ABABAB" />
                        <path d="M21.8892 34.6148L31.1844 25.3197C31.9057 24.5947 31.9057 23.4235 31.1844 22.6985L21.8892 13.4033C21.194 12.8066 20.1659 12.8066 19.4707 13.4033C18.6917 14.0708 18.6007 15.2456 19.2681 16.0246L27.2432 23.9998L19.268 31.9936C18.5467 32.7187 18.5467 33.8898 19.268 34.6148C19.993 35.3362 21.1643 35.3362 21.8892 34.6148Z" fill="#ABABAB" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
