import { Metadata } from "next";

export const metadata: Metadata = {
    title: "English Master Program - Kampung Inggris LC",
    description: "Kursus Bahasa Inggris Terfavorit di Kampung Inggris",
    verification: {
        google: "pJSSNr7c7GrVMaehrA7LejEp8cVycLWFrcQpBztDdW8"
    },
}

export default function EnglishMaster() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <article className="prose">
                <h1>English Master</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nihil! Adipisci saepe porro magni, unde repellendus nobis cumque aperiam omnis laboriosam architecto quibusdam cupiditate aliquam, voluptatibus totam, repellat exercitationem ipsam?</p>
            </article>
        </div>
    )
}
