import Link from "next/link"
export default function Hero() {
    return (
        <div className="hero min-h-screen bg-fixed bg-center bg-cover bg-[url('/background.webp')]">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
            <div className="hero-content text-center z-[2]">
                <article className="prose">
                    <h1 className="text-white text-2xl">
                        53.333+ Member LC Telah Membuktikannya
                        <br />
                        Sekarang Giliran Kamu!
                    </h1>
                    <p className="text-white text-sm">Kampung Inggris LC lebih dari sekadar tempat kursus Bahasa Inggris. <br /> Language Center adalah tempat bertumbuh dan meraih impian. 53 ribu ++ member dari seluruh Indonesia sudah merasakan baik dan asiknya metode unik yang diterapkan di LC.</p>
                    <div className="btns flex items-center justify-center gap-4">
                        <Link href="https://registrasi.kampunginggris.id/?br_code=PARE" passHref={true}>
                            <button className="btn btn-warning">Daftar Sekarang</button>
                        </Link>

                        <Link href="https://cs.kampunginggrislc.com/?cabang=pare" passHref={true}>
                            <button className="btn btn-accent">Konsultasi CS</button>
                        </Link>
                    </div>
                    <div className="divider"></div>
                    <h2 className="text-white">Learn More</h2>
                    <div className="arrow flex items-center justify-center w-full">
                        <svg className="animate-bounce fill-white" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" /></svg>
                    </div>
                </article>
            </div>
        </div>
    )
}