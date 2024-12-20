"use client";
// import { Metadata } from "next";
import { redirect } from "next/navigation";
import Image from "next/image";
import { subtitle, text } from "@/components/primitives";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

import tutor_1 from "../../assets/teachers/1.png";
import tutor_2 from "../../assets/teachers/2.png";
import tutor_3 from "../../assets/teachers/3.png";
import tutor_4 from "../../assets/teachers/4.png";
import tutor_5 from "../../assets/teachers/5.png";
import tutor_6 from "../../assets/teachers/6.png";
import tutor_7 from "../../assets/teachers/7.png";
import tutor_8 from "../../assets/teachers/8.png";
import tutor_9 from "../../assets/teachers/9.png";

const HeroSection = dynamic(() => import("./hero"), {});
const ListContent = dynamic(() => import("./listcontent"), { ssr: false });
const CardBenefits = dynamic(() => import("./benefits"), {});
const Galeri = dynamic(() => import("./galeri"), { ssr: false });
const TanyaCS = dynamic(() => import("./tanyacs"), { ssr: false });
const CardTestimoni = dynamic(
  () => import("../../components/Programs/CardTestimoni"),
  { ssr: false }
);
const YoutubePlayer = dynamic(
  () => import("../../components/YoutubePlayer/index"),
  { ssr: false }
);
const TabelHarga = dynamic(
  () => import("../../components/Programs/TabelHarga"),
  { ssr: false }
);
const FAQ = dynamic(() => import("./faq"), { ssr: false });

// export const metadata: Metadata = {
//   title: "English Master Program - Kampung Inggris LC",
//   description:
//     "Paket terbaik dan favorit di Kampung Inggris LC buat kamu yang mempunyai banyak waktu luang dan ingin belajar bahasa Inggris dari dasar secara lengkap. Diakhir program akan ada ujian praktik speaking yang dilakukan langsung ke Bali.",
//   verification: {
//     google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA",
//   },
// };

const keseruan = [
  {
    src: "/keseruan/em/1.webp",
    desc: "Real Test TOEFL ITP",
  },
  {
    src: "/keseruan/em/2.webp",
    desc: "Suasana Speaking Class",
  },
  {
    src: "/keseruan/em/3.webp",
    desc: "Suasana Grammar Class",
  },
  {
    src: "/keseruan/em/4.webp",
    desc: "After weekly exam",
  },
  {
    src: "/keseruan/em/5.webp",
    desc: "LC goes to Bali",
  },
  {
    src: "/keseruan/em/6.webp",
    desc: "Fun Outbound",
  },
  {
    src: "/keseruan/em/7.webp",
    desc: "LC goes to Bali",
  },
  {
    src: "/keseruan/em/8.webp",
    desc: "Games",
  },
  {
    src: "/keseruan/em/9.webp",
    desc: "Class meeting",
  },
  {
    src: "/keseruan/em/10.webp",
    desc: "LC goes to Bali",
  },
  // {
  //     src: '/keseruan/em/11.webp',
  //     desc: 'desc'
  // },
];

const fasilitas = [
  {
    src: "/fasilitas/5.webp",
    desc: "Taman Kampung Inggris LC",
  },
  {
    src: "/fasilitas/em/1.webp",
    desc: "Hall Gedung Utama",
  },
  // {
  //     src: '/fasilitas/6.webp',
  //     desc: 'desc'
  // },
  {
    src: "/fasilitas/em/3.webp",
    desc: "Frontliner Kampung Inggris LC",
  },
  {
    src: "/fasilitas/em/4.webp",
    desc: "Lorong asrama",
  },
  {
    src: "/fasilitas/4.webp",
    desc: "Lab Bahasa",
  },
  // {
  //     src: '/fasilitas/em/5.webp',
  //     desc: 'desc'
  // },
  {
    src: "/fasilitas/em/6.webp",
    desc: "Lorong gedung belajar Southern Point",
  },
  {
    src: "/fasilitas/em/7.webp",
    desc: "Gedung belajar Eastern Point",
  },
  {
    src: "/fasilitas/8.webp",
    desc: "Gedung belajar Southern Point",
  },
];

const alumni = [
  {
    avatar: "/alumni/monica-alumni-kampung-inggris-lc.webp",
    testi:
      "Dulu sebelum tau LC, susah banget rasanya buat belajar English. Tapi, setelah gabung LC, belajar English jadi terasa lebih mudah dan menyenangkan. Thanks to ilmu yang diberikan LC, aku berhasil dapetin apa yang aku mau dan jadi bagian dari SUPER CREW!",
    name: "Monica",
    job: "Pramugari",
    program: "Alumni English Master",
  },
  {
    avatar: "/alumni/bagus-alumni-kampung-inggris-lc.webp",
    testi:
      "Melangkah tanpa persiapan matang buat aku harus lapang dada. Aku ga nyerah dan akhirnya ambil kursus di LC buat persiapan pendaftaran tahun depannya. Ternyata worth it banget, I’ve got much experience. Finally, I got what I dreamed of!",
    name: "Bagus",
    job: "Polisi",
    program: "Alumni English Master",
  },
  {
    avatar: "/alumni/rizka-windi-alumni-kampung-inggris-lc.webp",
    testi:
      "Awal masuk aku cupu ga bisa apa-apa. Dari LC aku dapet banyak ilmu, pengalaman, vocab baru, dan temen dari Sabang sampai Merauke. Alhamdulillah, sekarang aku bisa jadi bagian dari Best Crew in The World.",
    name: "Rizka Windi",
    job: "Pramugari",
    program: "Alumni English Master",
  },
  {
    avatar: "/alumni/annisa-nurul-alumni-kampung-inggris-lc.webp",
    testi:
      "Bagi saya 4 bulan di LC terasa sangat cepat. Saya mendapat predikat member teraktif dan nilai yang baik. Setelah itu saya memberanikan diri real test TOEFL, untuk nguji kemampuan. Alhamdulillah hasilnya melebihi target.",
    name: "Annisa Nurul",
    job: "Beasiswa Turki",
    program: "Alumni English Master",
  },
  {
    avatar: "/alumni/alief-rasyafara-alumni-kampung-inggris-lc.webp",
    testi:
      "Pengalaman yang saya dapatkan luar biasa dari basic sampai jadi English master. Selama di LC, Saya mendapat materi yang luar biasa dari teacher dan tutor. Dapet teman baru yang saling mendukung dari sabang - merauke.",
    name: "Alief Rasyafara",
    job: "Finalis Putra Kebudayaan Sulawesi Selatan 2018",
    program: "Alumni English Master",
  },
  {
    avatar: "/alumni/elvira-alumni-kampung-inggris-lc.webp",
    testi:
      "Weekly meeting, gathering, yasinan, table manner, outbound, jalan-jalan ke Bali, best camp competition, dan banyak lagi kegiatan asik lainnya. Bikin pertemanan naik level jadi keluarga yang berjuang bareng buat bisa bahasa Inggris.",
    name: "Elvira R",
    job: "English Teacher & Penulis Buku",
    program: "Alumni English Master",
  },
  {
    avatar: "/alumni/arbaz-alumni-kampung-inggris-lc.webp",
    testi:
      "Bagi saya LC itu tempat yang paling menyenangkan, di sana saya mendapatkan banyak hal baru; teman, pengalaman, dan yang paling penting saya belajar manajemen waktu dengan baik. Sangat berharga dan nggak bisa dilupain sampe sekarang.",
    name: "Mohamad Arbaz",
    job: "Pemeran FTV Indosiar",
    program: "Alumni Intensive Program",
  },
  {
    avatar: "/alumni/jarshaka-alumni-kampung-inggris-lc.webp",
    testi:
      "Saya ambil paket 2 bulan tapi nambah 1 bulan lagi, karena metode belajar di LC bagus banget, tutor yang asik, selain itu juga dapet teman yang super humble dari Sabang sampai Merauke.",
    name: "Jarshaka Syarif",
    job: "Aktor",
    program: "Alumni Intensive Program",
  },
  {
    avatar: "/alumni/mutia-alumni-kampung-inggris-lc.webp",
    testi:
      "LC memberikan banyak pengalaman baru yang belum pernah aku rasakan sebelumnya. Mulai dari ilmu, temen dan kelompoknya, dan kekeluargaannya tak terlupakan. Kedisiplinan dan English areanya super duper top banget.",
    name: "Mutia Koirun Nissa",
    job: "Putri Indonesia Sosmed (Jabar) 2018",
    program: "Alumni Intensive Program",
  },
  {
    avatar: "/alumni/rifa-alumni-kampung-inggris-lc.webp",
    testi:
      "Aku seneng banget bisa ke LC karena banyak pelajaran yang kuambil, temen dari seluruh Indonesia, manage keuangan, dan kemandirian. LC tuh kaya rumah kedua, semuanya berasa kaya keluarga.",
    name: "Rifa Dzahabiyyah",
    job: "Selebgram",
    program: "Alumni Intensive Program",
  },
  {
    avatar: "/alumni/naqita-alumni-kampung-inggris-lc.webp",
    testi:
      "Awalnya grammar saya masih berantakan, setelah gabung di Kampung Inggris LC saya merasakan banyak perubahan pada struktur kalimat bahasa Inggris.",
    name: "Naqita",
    job: "Selebgram TikTok",
    program: "Alumni Intensive Program",
  },
  {
    avatar: "/alumni/cut-putri-alumni-kampung-inggris-lc.webp",
    testi:
      "Menurutku yang paling seru itu kewajiban untuk speaking English, karena aku bisa practice dan ningkatin kemampuanku untuk komunikasi sehari-hari. Materi speaking, grammar, dan pronunciation. Well, 3 minggu di LC ga cukup harus nambah lagi.",
    name: "Cut Putri Firlianda",
    job: "Duta Genre Putri Aceh 2020",
    program: "Alumni Intensive Program",
  },
];

const tutor = [
  {
    avatar: tutor_2,
    bio: "Having 7 years of experience in teaching general English, English for specific purpose, TOEFL, Achieved TOEFL 560.",
    name: "Mr. Al",
  },
  {
    avatar: tutor_3,
    bio: "Having 7 years of experience in teaching grammar, TOEFL.",
    name: "Mr. Naja",
  },
  {
    avatar: tutor_4,
    bio: "Having 6 years of experience in teaching speaking, IELTS.",
    name: "Ms. Iva",
  },
  {
    avatar: tutor_5,
    bio: "Having 5 years of experience in teaching general English, TOEFL, IELTS, Academic vocabulary.",
    name: "Ms. Liha",
  },
  {
    avatar: tutor_6,
    bio: "Having 5 years of experience in teaching general English, TOEFL, Academic vocabulary, Achieved TOEFL 520.",
    name: "Mr. Lubis",
  },
  {
    avatar: tutor_7,
    bio: "Having 5 years of experience in teaching general English, TOEFL, IELTS, Achieved TOEFL 560.",
    name: "Ms. Eva",
  },
  {
    avatar: tutor_8,
    bio: "Having 4 years of experience in teaching general English, English for specific purpose, Academic vocabulary, IELTS, TOEFL.",
    name: "Ms. Pooja",
  },
  {
    avatar: tutor_9,
    bio: "4 Years Experience in Pronunciation, Speaking, Grammar, Listening for TOEFL.",
    name: "Mr. Alen",
  },
];

const iconCheck = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={20}
      height={20}
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
};

export default function EnglishMaster() {
  const searchParams = useSearchParams();
  const utm_source = searchParams.get("utm_source") || ("" as string);
  const utm_medium = searchParams.get("utm_medium") || ("" as string);
  const utm_campaign = searchParams.get("utm_campaign") || ("" as string);

  // redirect(
  //   `/em?${`utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`}`
  // );
  return (
    <section>
      <HeroSection />
      <div className="flex justify-center mx-auto mt-10 max-w-7xl">
        <div className="sticky self-start top-5 hidden lg:block">
          <ListContent />
        </div>
        <div className="w-full lg:w-2/3 lg:pl-20 px-[1rem]">
          <div id="overview">
            <h2 className={subtitle()}>
              Apakah kamu termasuk kriteria dibawah ini?
            </h2>
            <div className={text()}>
              <div className="flex gap-2">
                <div>{iconCheck()}</div>Udah belajar bahasa Inggris bertahun
                tahun tapi masih belum bisa!
              </div>
              <div className="flex gap-2">
                <div>{iconCheck()}</div>Tau artinya kalau orang lain ngomong
                pakai bahasa inggris, tapi nggak bisa balasnya!
              </div>
              <div className="flex gap-2">
                <div>{iconCheck()}</div>Udah tau teorinya tapi nggak punya teman
                praktiknya, alhasil lupa lagi dah!
              </div>
            </div>
            <div className={text()}>
              <div className="font-bold italic mt-4">Berarti kamu harus!</div>{" "}
              <br />
              <div className="flex gap-2">
                <div>{iconCheck()}</div>Bukan hanya belajar teori tapi juga
                praktik
              </div>
              <div className="flex gap-2">
                <div>{iconCheck()}</div>Bukan hanya praktik sekali, tapi juga
                setiap hari
              </div>
              <div className="flex gap-2">
                <div>{iconCheck()}</div>Cari lingkungan yang mendukung, supaya
                ada teman praktik dan ada yg memberikan feedback
              </div>
            </div>
          </div>

          <div id="keuntungan" className="mt-10">
            <h2 className={subtitle()}>
              Kenalin nih Kampung Inggris LC{" "}
              <span className="lg:hidden">(Language Center)</span>
            </h2>
            <p className={text()}>
              Lembaga kursus bahasa inggris yang bukan hanya berfokus pada
              pemberian materi saja, tapi juga{" "}
              <span className="font-bold italic mt-4">
                menekankan pada praktik
              </span>{" "}
              . Karena kami sadar untuk menguasai bahasa itu bukan hanya sekedar
              teori saja tapi harus dibiasakan untuk praktik setiap hari, dan
              praktik bareng teman saja nggak cukup tapi harus berada
              <span className="font-bold italic mt-4">
                {" "}
                di lingkungan yang tepat{" "}
              </span>
              dan dengan teman yang sudah bisa dan siap saling mendukung
            </p>
            <p className="mt-4"></p>
            <h2 className={subtitle()}>
              Karena itulah LC hadir dengan membawa konsep:
            </h2>
            <p className="mt-4"></p>
            <CardBenefits />
          </div>

          <div id="galeri" className="mt-10">
            <h2 className={subtitle()}>
              Seperti ini kan suasana pembelajaran yang kamu inginkan?
            </h2>
            <div className="scrollbar flex gap-[20px] overflow-x-auto w-full py-6">
              {keseruan.map((item, index) => (
                <Galeri key={index} src={item.src} desc={item.desc} />
              ))}
            </div>
          </div>

          <div id="tutor" className="mt-10">
            <h2 className={subtitle()}>
              Teacher berpengalaman Kampung Inggris LC yang akan membimbingmu
            </h2>
            <div className="scrollbar flex overflow-x-auto w-full ">
              {tutor.map((item, index) => (
                <div key={index} className="w-full mt-6">
                  <div className="flex flex-col justify-start w-[300px]">
                    <Image
                      alt="avatar"
                      src={item.avatar}
                      className="avatar rounded-full mx-auto"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                    <div>
                      <p className="text-center text-xl mt-10 font-bold">
                        {item.name}
                      </p>
                    </div>
                    <p className="text-center italic my-2">{item.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="alumni" className="mt-10">
            <h2 className={subtitle()}>
              Ini nih kata alumni yang sudah belajar di LC!
            </h2>
            <div className="scrollbar flex gap-[20px] overflow-x-auto w-full py-6">
              {alumni.map((item, index) => (
                <CardTestimoni
                  key={index}
                  avatar={item.avatar}
                  name={item.name}
                  job={item.job}
                  program={item.program}
                  testi={item.testi}
                />
              ))}
            </div>
            <div className="py-5">
              <YoutubePlayer videoId="zE6Xr5o2axc" />
            </div>
          </div>

          <div id="fasilitas" className="mt-10">
            <h2 className={subtitle()}>
              Di lingkungan yang mendukung ini kamu akan belajar
            </h2>
            <div className="scrollbar flex gap-[20px] overflow-x-auto w-full py-6">
              {fasilitas.map((item, index) => (
                <Galeri key={index} src={item.src} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto mt-10 py-10">
        <h2 id="harga" className={`${subtitle()} mb-5 text-center`}>
          <span className="italic">Set Your English Journey</span>
          <br />
          Pilih Paket Belajarmu Di Sini!
        </h2>
        <TabelHarga />
        <TanyaCS />
        <h2
          id="faq"
          className={`${subtitle()} mb-5 text-center px-[1rem] italic`}
        >
          Frequently Asked Questions (FAQ){" "}
        </h2>
        <FAQ />
      </div>
    </section>
  );
}
