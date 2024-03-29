"use client"

import { useState } from "react"
import Image from "next/image"
import HTMLReactParser from "html-react-parser";

export default function Faq() {
    const [isOpenSatu, setIsOpenSatu] = useState(true)
    const [isOpenDua, setIsOpenDua] = useState(true)
    const [isOpenTiga, setIsOpenTiga] = useState(false)

    const faqContent = [
        {
            title: 'Bedanya 2 minggu sama 3 bulan apa?',
            content: 'Semakin lama durasi kursus yang diambil, maka materinya semakin advanced dan lengkap.',
        },
        {
            title: 'Apakah bisa <span className="italic">upgrade</span> ke kamar AC?',
            content: 'Bisa, namun dengan tambahan biaya dan S&K berlaku.',
        },
        {
            title: 'Bisa belajar dari dasar?',
            content: 'Ya, LC menawarkan program belajar bahasa Inggris secara general mulai dari dasar.',
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
            <div onClick={handleOpen} className="border-[1px] lg:w-[1140px] border-[#232323] lg:p-5 rounded-2xl">
                <div className="flex items-center justify-start gap-4 px-4 py-2 lg:px-16 cursor-pointer">
                    <div>
                        <IconPlus />
                    </div>
                    <h1 className="text-md lg:text-[32px] font-bold ">{HTMLReactParser(prop.title)}</h1>
                </div>
                {isActive &&
                    <div className="px-5 pb-5 lg:px-32 text-[12px] lg:text-[18px]">
                        <p>{prop.content}</p>
                    </div>
                }
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-5 lg:gap-10">
            <div onClick={() => setIsOpenSatu(!isOpenSatu)} className="border-[1px] lg:w-[1140px] border-[#232323] lg:p-5 rounded-2xl">
                <div className="flex items-center justify-start gap-4 px-4 py-2 lg:px-16 cursor-pointer">
                    <div>
                        <IconPlus />
                    </div>
                    <h1 className="text-md lg:text-[32px] font-bold ">Apa beda <span className="italic">main class</span> dan <span className="italic">camp class</span>?</h1>
                </div>
                {isOpenSatu &&
                    <div className="px-5 pb-5 lg:px-32 text-[12px] lg:text-[18px]">
                        <p className="italic">Main Class</p>
                        <ul className="list-disc list-inside">
                            <li>Lokasi : Gedung kelas</li>
                            <li>Materi: Merupakan materi kelas yg utama di program intensif seperti: <span className="italic"> grammar, speaking</span> dan <span className="italic">pronunciation</span></li>
                        </ul>
                        <p className="mt-10 italic">Camp Class</p>
                        <ul className="list-disc list-inside">
                            <li>Lokasi: <span className="italic">Camp</span> masing-masing</li>
                            <li>Materi: Merupakan kelas pendukung dari main class seperti: hafalan <span className="italic">vocab</span>, latihan <span className="italic">conversation</span>, <span className="italic">review</span> materi</li>
                        </ul>
                    </div>
                }
            </div>
            <div onClick={() => setIsOpenDua(!isOpenDua)} className="border-[1px] lg:w-[1140px] border-[#232323] lg:p-5 rounded-2xl">
                <div className="flex items-center justify-start gap-4 px-4 py-2 lg:px-16 cursor-pointer">
                    <div>
                        <IconPlus />
                    </div>
                    <h1 className="text-md lg:text-[32px] font-bold ">Apa aja fasilitas asrama?</h1>
                </div>
                {isOpenDua &&
                    <div className="px-5 pb-5 lg:px-32 text-[12px] lg:text-[18px]">
                        <p>Fasilitas asrama reguler</p>
                        <ul className="list-disc list-inside">
                            <li>1 kamar berisi maksimal 4 peserta</li>
                            <li>Kipas angin</li>
                            <li>Kamar mandi luar</li>
                            <li>Kasur dan lemari</li>
                        </ul>
                    </div>
                }
            </div>

            {faqContent.map((item, index) => (
                <Accordion key={index} title={item.title} content={item.content} />
            ))
            }

            <div onClick={() => setIsOpenTiga(!isOpenTiga)} className="border-[1px] lg:w-[1140px] border-[#232323] lg:p-5 rounded-2xl">
                <div className="flex items-center justify-start gap-4 px-4 py-2 lg:px-16 cursor-pointer">
                    <div>
                        <IconPlus />
                    </div>
                    <h1 className="text-md lg:text-[32px] font-bold ">Kapan mulai programnya?</h1>
                </div>
                {isOpenTiga &&
                    <div className="px-5 pb-5 lg:px-32 text-[12px] lg:text-[18px]">
                        <p>Kalian bisa cek kapan mulai programnya di kalender akademik Kampung Inggris LC di bawah ini</p>
                        <Image alt="kalender akademik" src="/kalender.webp" width={720} height={1152} />
                    </div>
                }
            </div>
        </div>
    )
}
