"use client"

import { useState } from "react"
import MasonryGedung from "./MasonryGedung"
import MasonryKelas from "./MasonryKelas"
import Masonry from "./Masonry"
import Image from "next/image"
import fasilitas from "../../assets/fasilitas/fasilitas-lc.webp"

export default function Fasilitas() {
    return (
        <div className="container flex flex-col py-10 w-full items-center justify-center">
            <article className="container prose flex flex-col w-full text-center">
                <h1 className="text-2xl">Ini Fasilitas yang Bisa Kamu Nikmati di <span className="italic text-primaryLC">Kampung Inggris LC</span></h1>
            </article>
            {/* <Masonry />
            <MasonryKelas /> */}
            <Image
                alt="fasilitas lc"
                className="container md:w-1/3 mt-10"
                src={fasilitas}
            />
        </div>
    )
}