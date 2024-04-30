"use client"

import Image from "next/image";
import { useState } from "react";

export default function Modal() {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    return (
        <>
            {isOpen && <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="flex flex-col items-end px-5">
                    <button onClick={() => setIsOpen(!open)} className="text-xl text-white p-2 w-auto h-auto cursor-pointer">x</button>
                    <Image
                        alt="popup"
                        src="https://files.kampunginggrislc.com/2024/04/LC_29-APRIL-2024_HC-FEED.webp"
                        width={500}
                        height={500}
                        onClick={() => window.open("https://kampunginggrislc.com/holiday-ceria-2024")}
                    />
                </div>
            </dialog>
            }
        </>
    );
}
