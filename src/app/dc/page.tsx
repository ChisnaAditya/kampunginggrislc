import { Metadata } from "next";
import dynamic from "next/dynamic";
import Banner from "./banner";
import Fasilitas from "./fasilitas";
import Teacher from "./teachers";
import FooterDC from "./footer";
import CTA from "./cta";

const Hero = dynamic(() => import("./hero"));
const Paket = dynamic(() => import("./paket"), { ssr: false });

export const metadata: Metadata = {
  title: "Program Desember Ceria Kampung Inggris LC",

  description:
    "Nikmati momen liburan tak terlupakan di Kampung Inggris LC bersama teacher asik, teman baru dari seluruh Indonesia, bonus outbound ke SLG!",

  verification: {
    google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA",
  },
};

export default function DesemberCeria() {
  return (
    <div>
      <Hero />
      <Banner />
      <CTA
        message="Nah, sekarang giliran kamu ngerasain asyiknya liburan di LC!"
        eventName="CTA_AfterGallery"
      />
      <Fasilitas />
      <Teacher />
      <Paket />
      <FooterDC />
    </div>
  );
}
