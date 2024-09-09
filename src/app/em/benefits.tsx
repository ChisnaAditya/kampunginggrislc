import React from "react";
import Image from "next/image";
import HTMLReactParser from "html-react-parser/lib/index";

function CardBenefit(props: any) {
  return (
    <div className="p-4 rounded-xl shadow-2xl w-[300px] animate-infinite-floating">
      <div className="flex items-center gap-4 py-2">
        <Image alt={props.title} src={props.icon} width={40} height={40} />
        <h3 className="font-bold">{props.title}</h3>
      </div>
      <p className="max-w-sm text-neutral-600">{HTMLReactParser(props.desc)}</p>
    </div>
  );
}

export default function Benefits() {
  const content = [
    {
      icon: "/icon/A4@4x.webp",
      title: "Asrama English Area",
      desc: "Disini kamu bukan hanya belajar teori saja tapi juga bisa praktik ngomong setiap hari dengan teman di lingkungan yang mendukung.",
    },
    {
      icon: "/icon/A5@4x.webp",
      title: "Teacher pendamping asrama",
      desc: "Bukan hanya belajar bareng teman, tapi akan ada teachers yang akan membantu kamu praktik ngomong inggris, memberikan feedback jika kamu melakukan kesalahan.",
    },
    {
      icon: "/icon/A1@4x.webp",
      title: "Pembelajaran Intensive",
      desc: "Dengan pembelajaran intensive 6x pertemuan/hari di hari senin-kamis, bukan hanya mahir bahasa inggris tapi soft skill kedisiplinanmu juga akan terasah.",
    },

    {
      icon: "/icon/B5@4x.webp",
      title: "Event Pendukung",
      desc: "Bukan hanya belajar teori, di kampung inggris LC juga ada event yang bisa menunjang kemampuan publik speaking dan ke PD-an mu.",
    },
    {
      icon: "/icon/B6@4x.webp",
      title: "Belajar All Materi",
      desc: "Bukan hanya belajar speaking tapi juga grammar supaya tatanan bahasa kamu benar, pronunciation cara pengucapan yang benar, dan vocabulary untuk memperkaya kosakata bahasa inggris supaya praktik speaking lebih mudah. Dan di kelas speaking, grammar, pronunciation dan vocab kamu bisa <b>TINGKATKAN</b> skill Listening, Speaking dan juga Writing.",
    },
    {
      icon: "/icon/B1@4x.webp",
      title: "Exam setiap pekan",
      desc: "Akan ada examination atau ujian setiap hari jumat, yang bertujuan untuk melihat perkembangan bahasa inggrismu selama satu minggu kebelakang, dan pemberian feedback yang harus kamu tingkatkan di minggu depan.",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center p-4 sm:p-0 w-full">
      <p>KARENA ITULAH</p>
      <h2 className="text-3xl sm:text-4xl text-center max-w-lg">
        LC Hadir dengan{" "}
        <span className="font-bold text-primaryLC">Membawa Konsep</span>
      </h2>
      <div className="relative w-full sm:max-w-7xl mx-auto sm:py-20">
        <div className="hidden sm:absolute w-full h-[400px] bg-pattern-benefits-em bg- bg-no-repeat bottom-20"></div>
        <div className="w-full h-full overflow-x-scroll">
          <div className="flex sm:flex-wrap gap-4">
            {content.map((item) => (
              <div key={item.title}>
                <CardBenefit
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
