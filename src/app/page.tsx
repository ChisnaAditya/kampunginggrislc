import CTA from '@/components/CTA'
import Teachers from '@/components/Teachers'
import Hero from '@/components/Hero'
import Manfaat from '@/components/Manfaat'
import Metode from '@/components/Metode'
import Alumni from '@/components/Alumni'
import Fasilitas from '@/components/Fasilitas'
import Company from '@/components/Company'
import Program from '@/components/Program'
import Keseruan from '@/components/Keseruan'
import Timeline from '@/components/Timeline'
import Script from 'next/script'
import Testimonials from '@/components/Testimonials'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <main className="ease-in duration-300">

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HMS8J1N0MY" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-HMS8J1N0MY');
        `}
      </Script>

      <NavBar />
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
    </main>
  )
}
