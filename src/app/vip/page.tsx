import { Metadata } from "next";
import dynamic from "next/dynamic";
import Alumni from "./alumni";
import Banner2 from "./banner2";

const HeroSection = dynamic(() => import("./hero"), {});
const Overview = dynamic(() => import("./overview"), {});
const Banner = dynamic(() => import("./banner"), {});
const Galeri = dynamic(() => import("./galeri"), {});
const Teacher = dynamic(() => import("./teachers"), {});
const Bonus = dynamic(() => import("./bonus"), {});
const FAQ = dynamic(() => import("./faq"), {});

export const metadata: Metadata = {
  title: "Program VIP Kampung Inggris LC",
  description:
    "Kini Kampung Inggris LC (Language Center) punya program yang memberikan pengalaman belajar lebih kontekstual dan berkualitas.",
  verification: {
    google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA",
  },
};

export default function page() {
  return (
    <div>
      <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 md:px-20">
        <HeroSection />
      </div>
      <div className="max-w-7xl mx-auto md:px-20">
        <Overview />
        <Banner />
        <Galeri />
        <Teacher />
        <Alumni />
        <Banner2 />
        <FAQ />
      </div>
    </div>
  );
}
