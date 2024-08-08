// import Hero from "@/components/Hero";
// import CTA from "@/components/CTA";
// import Testimonials from "@/components/Testimonials";
// import Manfaat from "@/components/Manfaat";
// import Keseruan from "@/components/Keseruan";
// import Alumni from "@/components/Alumni";
// import Fasilitas from "@/components/Fasilitas";
// import Metode from "@/components/Metode";
// import Company from "@/components/Company";
// import Teachers from "@/components/Teachers";
// import Program from "@/components/Program";
// import Modal from "@/components/Modal";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero/index"), {
  loading: () => <p>Loading...</p>,
});
const CTA = dynamic(() => import("../components/CTA/index"), {
  loading: () => <p>Loading...</p>,
});
const Testimonials = dynamic(() => import("../components/Testimonials/index"), {
  loading: () => <p>Loading...</p>,
});
const Manfaat = dynamic(() => import("../components/Manfaat/index"), {
  loading: () => <p>Loading...</p>,
});
const Keseruan = dynamic(() => import("../components/Keseruan/index"), {
  loading: () => <p>Loading...</p>,
});
const Alumni = dynamic(() => import("../components/Alumni/index"), {
  loading: () => <p>Loading...</p>,
});
const Fasilitas = dynamic(() => import("../components/Fasilitas/index"), {
  loading: () => <p>Loading...</p>,
});
const Metode = dynamic(() => import("../components/Metode/index"), {
  loading: () => <p>Loading...</p>,
});
const Company = dynamic(() => import("../components/Company/index"), {
  loading: () => <p>Loading...</p>,
});
const Teachers = dynamic(() => import("../components/Teachers/index"), {
  loading: () => <p>Loading...</p>,
});
const Program = dynamic(() => import("../components/Program/index"), {
  loading: () => <p>Loading...</p>,
});
const Modal = dynamic(() => import("../components/Modal/index"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <CTA />
      <Testimonials />
      <Manfaat />
      <Keseruan />
      <Alumni />
      <Fasilitas />
      <Metode />
      <Company />
      <Teachers />
      <Program />
      <Modal />
    </main>
  );
}
