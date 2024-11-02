import dynamic from "next/dynamic";
// import Hero from "./hero";
import Banner from "./banner";
// import Paket from "./paket";
import Fasilitas from "./fasilitas";
import Teacher from "./teachers";
import FooterDC from "./footer";

const Hero = dynamic(() => import("./hero"));
const Paket = dynamic(() => import("./paket"), { ssr: false });

export default function DesemberCeria() {
  return (
    <div>
      <Hero />
      <Banner />
      <Fasilitas />
      <Teacher />
      <Paket />
      <FooterDC />
    </div>
  );
}
