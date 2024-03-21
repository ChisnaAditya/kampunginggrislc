import Image from "next/image"
import Link from "next/link"
import image_1 from "../../assets/kampung-inggris-lc-cta-1.webp"
import image_2 from "../../assets/kampung-inggris-lc-cta-2.webp"

export default function CTA() {
    return (
        <>
            <div className="container pt-10">
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow p-2 card bg-base-100 rounded-box place-items-center">
                        <article className="prose">
                            <h1 className="text-2xl ">
                                Kamu udah sering belajar bahasa Inggris <span className="italic text-primaryLC">tapi belum bisa juga</span> , mungkin karena kamu ...
                            </h1>
                        </article>
                    </div>
                    <div className="grid flex-grow p-2 card rounded-box place-items-center">
                        <Image
                            alt="kampung inggris lc"
                            src={image_1}
                            className="lg:w-2/3"
                        />
                    </div>
                </div>

                <div className="flex flex-col-reverse w-full lg:flex-row">
                    <div className="grid flex-grow p-2 card rounded-box place-items-center">
                        <Image
                            alt="kampung inggris lc"
                            src={image_2}
                            className="lg:w-2/3"
                        />

                    </div>
                    {/* <div className="divider divider-warning lg:divider-horizontal"></div> */}
                    <div className="grid flex-grow p-2 card bg-base-100 rounded-box place-items-center">
                        <article className="prose">
                            <h1 className="text-2xl">
                                Belajar Bahasa Inggris Tuh <span className="italic text-primaryLC">Paling Oke di Lingkungan Suportif</span> , Jadi Kamu Bisa Ngerasain ...
                            </h1>
                        </article>
                    </div>
                </div>

                <div className="py-20 flex flex-col items-center justify-center gap-4">
                    <article className="prose">
                        <h1 className="text-center text-2xl">
                            That’s Why LC Nyediain <span className="italic text-primaryLC">Tempat Belajar</span> yang Cocok Buat Kamu!
                        </h1>
                    </article>
                    <div className="arrow flex items-center justify-center w-full">
                        <svg className="animate-bounce fill-base-content" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" /></svg>
                    </div>
                    <div className="btns flex flex-col lg:flex-row items-center justify-center gap-4">
                        <Link href="https://registrasi.kampunginggris.id/?br_code=PARE" >
                            <button className="btn btn-circle btn-wide bg-secondaryLC text-black transition ease-in-out delay-150 hover:bg-secondaryLC/80 hover:-translate-y-1">Daftar Sekarang</button>
                        </Link>
                        <Link href="https://cs.kampunginggrislc.com/?cabang=pare" >
                            <button className="btn btn-circle btn-wide bg-primaryLC text-white transition ease-in-out delay-150 hover:bg-primaryLC/80 hover:-translate-y-1">Konsultasi CS</button>
                        </Link>
                    </div>
                    <div className="divider"></div>
                </div>
            </div>
        </>
    )
}