import Program from "@/components/Hero/Program";
import Swipper from "./swipper";
import Benefits from "./benefits";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Intensive English Program - Kampung Inggris LC",
    description: "Intensive English Program Kampung Inggris LC dirancang untuk kamu yang ingin meningkatkan kemampuan bahasa Inggris secara general mulai dari dasar. Kamu akan dilatih untuk percaya diri dan aktif berbicara bahasa Inggris. Peserta mampu merespon kalimat yang diucapkan oleh native speaker (by audio/video), mampu membuat mapping point dan rangkuman untuk dipresentasikan di depan publik.",
    verification: {
        google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA"
    },
}

export default function Intensive() {
    function checkLogo() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-accent mx-auto" height="30" width="30" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
        )
    }

    function closeLogo() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-error mx-auto" height="30" width="30" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
        )
    }

    const contentTable = [
        {
            head: "Jumlah Pertemuan",
            col_1: "20x Meeting",
            col_2: "40x Meeting",
            col_3: "80x Meeting",
            col_4: "120x Meeting",
        },
        {
            head: "Camp English Area",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "Assesment Test",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "Tutor Asrama",
            col_1: closeLogo(),
            col_2: closeLogo(),
            col_3: closeLogo(),
            col_4: closeLogo(),
        },
        {
            head: "Qualified Teacher",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "Modul",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "E-Certificate",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "Merchandise",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "Harga Program",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
    ]

    return (
        <div className="scroll-smooth">
            <Program />
            <div className="container grid lg:grid-cols-2 p-10">
                <div className="flex">
                    <article className="prose">
                        <h1 className="text-error">Intensive English Program</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officiis ea voluptatibus animi? Iure est totam, vitae deserunt voluptatum minima eum officia unde. Perferendis dolore nesciunt soluta beatae eius modi!</p>
                        <button className="hidden lg:btn lg:bg-primary lg:text-primary-content">Daftar Sekarang</button>
                    </article>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        alt="Intensive English Program - Kampung Inggris LC"
                        src="https://images.unsplash.com/photo-1491309055486-24ae511c15c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="300"
                        height="300"
                        className="rounded"
                        layout="responsive"
                    />
                </div>
                <button className="btn lg:hidden w-full mt-5 bg-primary text-primary-content">Daftar Sekarang</button>
            </div>
            {/* Start Content */}
            <div className="container grid grid-cols-7">
                <div className="hidden lg:grid sticky self-start top-0 lg:col-span-2">
                    <article className="prose">
                        <h1></h1>
                        <h3>Intensive English Program</h3>
                        <ul>
                            <li><p>Overview</p></li>
                            <li><p>Alumni Kami</p></li>
                            <li><p>Benefits</p></li>
                        </ul>
                    </article>
                    <Link href="#tabel-program">
                        <button className="btn bg-error text-error-content">Daftar Program</button>
                    </Link>
                </div>
                <div className="col-span-7 lg:col-span-5">
                    <div className="overview">
                        <article className="prose">
                            <h1 id="overview"></h1>
                            <h3 className="text-error">Overview</h3>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officiis ea voluptatibus animi? Iure est totam, vitae deserunt voluptatum minima eum officia unde. Perferendis dolore nesciunt soluta beatae eius modi!</p>
                        </article>
                    </div>
                    <div className="alumni">
                        <article className="prose">
                            <h1 id="alumni"></h1>
                            <h3 className="text-error">Alumni Kami</h3>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officiis ea voluptatibus animi? Iure est totam, vitae deserunt voluptatum minima eum officia unde. Perferendis dolore nesciunt soluta beatae eius modi!</p>
                        </article>
                        <div className="flex max-w-xl">
                            <Swipper />
                        </div>
                    </div>
                    <div className="benefit">
                        <article className="prose mb-10">
                            <h1 id="benefits"></h1>
                            <h3 className="text-error">Benefits</h3>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium.</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officiis ea voluptatibus animi? Iure est totam, vitae deserunt voluptatum minima eum officia unde. Perferendis dolore nesciunt soluta beatae eius modi!</p>
                        </article>
                        <Benefits />
                    </div>
                </div>
            </div>
            {/* End Content */}
            <div className="hidden container lg:flex flex-col  items-center min-h-screen">
                <article className="prose text-center">
                    <h1></h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusantium!</h2>
                </article>
                <table id="tabel-program" className="table-auto mt-20">
                    <thead className="p-10">
                        <tr>
                            <th></th>
                            <th className="font-extrabold text-xl text-error">IEP <br /> 2 Minggu</th>
                            <th className="font-extrabold text-xl text-error">IEP <br /> 1 Bulan</th>
                            <th className="font-extrabold text-xl text-error">IEP <br /> 2 Bulan</th>
                            <th className="font-extrabold text-xl text-error">IEP <br /> 3 Bulan</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            contentTable.map((item, index) => (
                                <tr key={index} className="border-b-2 border-b-neutral">
                                    <td className="pe-10 py-5 font-bold">{item.head}</td>
                                    <td className="px-10 py-5">{item.col_1}</td>
                                    <td className="px-10 py-5">{item.col_2}</td>
                                    <td className="px-10 py-5">{item.col_3}</td>
                                    <td className="px-10 py-5">{item.col_4}</td>
                                </tr>
                            ))
                        }

                        <tr>
                            <td className="py-5"></td>
                            <td className="px-10 py-5"><button className="btn bg-error text-error-content">Check Out</button></td>
                            <td className="px-10 py-5"><button className="btn bg-error text-error-content">Check Out</button></td>
                            <td className="px-10 py-5"><button className="btn bg-error text-error-content">Check Out</button></td>
                            <td className="px-10 py-5"><button className="btn bg-error text-error-content">Check Out</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className="container flex flex-col items-center justify-center py-20">
                <Image
                    alt="Intensive English Program - Kampung Inggris LC"
                    src="/background.webp"
                    width="300"
                    height="300"
                    className="rounded"
                    layout="responsive"
                />
                <article className="prose text-center">
                    <h1></h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quaerat!</h1>
                    <Link href='/tanyacs' ><button className="btn bg-primary text-primary-content">Hubungi CS Kami</button></Link>

                </article>
            </div>
        </div >
    )
}
