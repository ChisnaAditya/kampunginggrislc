import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intensive English Program - Kampung Inggris LC",
    description: "Kursus Bahasa Inggris Terfavorit di Kampung Inggris",
    verification: {
        google: "pJSSNr7c7GrVMaehrA7LejEp8cVycLWFrcQpBztDdW8"
    },
}

export default function Intensive() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <article className="prose">
                <h1>Intensive</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officiis ea voluptatibus animi? Iure est totam, vitae deserunt voluptatum minima eum officia unde. Perferendis dolore nesciunt soluta beatae eius modi!</p>
            </article>
        </div>
    )
}
