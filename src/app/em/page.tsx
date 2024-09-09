import { Metadata } from "next";
import dynamic from "next/dynamic";
import FAQ from "./faq";
import Banner from "./banner";
import { Navbar } from "@nextui-org/react";
const HeroSection = dynamic(() => import("./hero"), {});
const Paket = dynamic(() => import("./paket"), {});
const Overview = dynamic(() => import("./overview"), {});
const Profile = dynamic(() => import("./profile"), {});
const Benefits = dynamic(() => import("./benefits"), {});
const Galeri = dynamic(() => import("./galeri"), {});
const Teachers = dynamic(() => import("./teachers"), {});

export const metadata: Metadata = {
  title: "English Master Kampung Inggris LC",
  description:
    "Paket kursus bahasa inggris liburan ke Bali dan Tes TOEFL di Kampung Inggris LC buat kamu yang mempunyai banyak waktu luang dan ingin belajar bahasa Inggris dari dasar secara lengkap",
  verification: {
    google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA",
  },
};

export default function EnglishMaster() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <HeroSection />
      <section className="max-w-7xl mx-auto">
        <Paket />
        <Banner />
        <Overview />
      </section>
      <Profile />
      <section className="max-w-7xl mx-auto">
        <Benefits />
        <Galeri />
        <Teachers />
        <FAQ />
      </section>
    </div>
  );
}
