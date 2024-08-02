"use client";
import Image from "next/image";
import icon_1 from "../../assets/icon/B1@4x.webp";
import icon_2 from "../../assets/icon/B2@4x.webp";
import icon_3 from "../../assets/icon/B3@4x.webp";
import icon_4 from "../../assets/icon/B4@4x.webp";
import icon_5 from "../../assets/icon/B5@4x.webp";
import icon_6 from "../../assets/icon/B6@4x.webp";
import icon_7 from "../../assets/icon/B7@4x.webp";

export default function Card() {
  const content = [
    {
      icon: icon_1,
      title: "Confidence Booster",
      desc: "LC akan ningkatin ke-pd-anmu dengan public speaking di depan teman-teman, jadi kamu terbiasa tampil di depan umum.",
    },
    {
      icon: icon_2,
      title: "Grammar Hack",
      desc: "Belajar grammar jadi mudah dan fun dengan teknik storytelling dan metode translation yang unik, bikin kamu jago mengaplikasikan ke dalam kalimat.",
    },
    {
      icon: icon_3,
      title: "Speak Properly",
      desc: "Latihan mengucapkan kosa kata bahasa Inggris ala native speaker di LC, dengan audio dan challenge seru yang bakal bikin kamu lancar berbahasa Inggris.",
    },
    {
      icon: icon_4,
      title: "Speaking Without Thinking",
      desc: "Dengan camp English area, jadikan kamu lancar dan natural berbahasa Inggris dan berbicara tanpa mikir ekstra.",
    },
    {
      icon: icon_5,
      title: "Conceptual Mapping Skills",
      desc: "Teacher LC akan mengajarkan kamu cara efektif merangkum pelajaran atau artikel dengan cepat dan mempresentasikannya kembali secara akurat.",
    },
    {
      icon: icon_6,
      title: "English for Spesific Purpose",
      desc: "LC akan membekali kamu dengan kosa kata dan hal lain yang berhubungan dengan tujuan belajar bahasa Inggrismu.",
    },
    {
      icon: icon_7,
      title: "Critical Thinking",
      desc: "Games dan aktivitas seru seperti English debate dan random question bakal asah kemampuan berpikir, berinovasi, dan berargumen dengan cerdas, sambil boost confidence-mu untuk berani sepak up berbahasa Inggris.",
    },
  ];

  return (
    <div className="container py-10 flex flex-col items-center justify-center">
      <article className="container prose mb-1 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          7 Metode Ini Bikin Ribuan Member
          <span className="italic text-primaryLC">
            {" "}
            Lancar Berbahasa Inggris
          </span>
        </h1>
      </article>

      <div className="grid grid-cols-1 gap-4 content-center sm:grid sm:grid-cols-3">
        {content.map((item, index) => (
          <div
            key={index}
            className="card w-auto md:w-96 bg-base-100 shadow-md"
          >
            <figure className="px-10 pt-10 ">
              <Image
                alt="kampung inggris lc manfat"
                className="w-12 h-12 bg-center bg-cover rounded-full"
                src={item.icon}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p className="text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
