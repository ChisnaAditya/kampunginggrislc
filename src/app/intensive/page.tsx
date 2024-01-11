import Program from "@/components/Hero/Program";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intensive English Program - Kampung Inggris LC",
    description: "Kursus Bahasa Inggris Terfavorit di Kampung Inggris",
    verification: {
        google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA"
    },
}

export default function Intensive() {
    return (
        <div>
            <Program />
            <article className="prose">
                <h1>Intensive</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas officiis ea voluptatibus animi? Iure est totam, vitae deserunt voluptatum minima eum officia unde. Perferendis dolore nesciunt soluta beatae eius modi!</p>
            </article>
        </div>
    )
}
