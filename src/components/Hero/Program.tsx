"use client"

import Image from "next/image"
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import ThemeSwap from "../ThemeBtn";

export default function Program() {
    const [isOpen, setOpen] = useState(false);

    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    const { changeTheme } = useContext(ThemeContext);

    return (
        <div className="fixed bottom-[40px] right-[40px]">
            <button
                onClick={handleDropDown}
                className="me-4 mb-4 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-error" height="20" width="20" viewBox="0 0 512 512">
                    <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                </svg>
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
            </button>
            <div className={`${isOpen ? "absolute z-10 bottom-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700" : "hidden"}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTopButton">
                    <li>
                        <a href="/intensive" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Light</a>
                    </li>
                    <li>
                        <a href="/intensive" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dark</a>
                    </li>
                    <li>
                        <a href="/intensive" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Night</a>
                    </li>
                    <li>
                        <a href="/intensive" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Retro</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
