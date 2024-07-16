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
                        src="https://files.kampunginggrislc.com/2024/07/Pop-up-EM-EMP.webp"
                        width={500}
                        height={500}
                        onClick={() => window.location.href = ("https://program.kampunginggrislc.com/english-master?utm_medium=popup-em")}
                    />
                </div>
            </dialog>
            }
        </>
    );
}
