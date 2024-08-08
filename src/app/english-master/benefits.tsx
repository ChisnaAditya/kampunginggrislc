import Image from "next/image";
import HTMLReactParser from "html-react-parser/lib/index";

export default function CardBenefits() {
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
      icon: "/icon/B1@4x.webp",
      title: "Exam setiap pekan",
      desc: "Akan ada examination atau ujian setiap hari jumat, yang bertujuan untuk melihat perkembangan bahasa inggrismu selama satu minggu kebelakang, dan pemberian feedback yang harus kamu tingkatkan di minggu depan.",
    },
    {
      icon: "/icon/B6@4x.webp",
      title: "Belajar All Materi",
      desc: "Bukan hanya belajar speaking tapi juga grammar supaya tatanan bahasa kamu benar, pronunciation cara pengucapan yang benar, dan vocabulary untuk memperkaya kosakata bahasa inggris supaya praktik speaking lebih mudah. Dan di kelas speaking, grammar, pronunciation dan vocab kamu bisa <b>TINGKATKAN</b> skill Listening, Speaking dan juga Writing.",
    },
    {
      icon: "/icon/B5@4x.webp",
      title: "Event Pendukung",
      desc: "Bukan hanya belajar teori, di kampung inggris LC juga ada event yang bisa menunjang kemampuan publik speaking dan ke PD-an mu.",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {content.map((item, index) => (
        <div key={index} className="flex flex-col lg:flex-row gap-4">
          <div className="w-[50px]">
            <Image
              alt="kampung inggris lc benefits"
              width={50}
              height={50}
              src={item.icon}
            />
          </div>
          <div className="w-full">
            <h1 className="text-[18px] lg:text-[22px] text-left font-bold italic">
              {item.title}
            </h1>
            <p className="text-[16px] lg:text-[18px]">
              {HTMLReactParser(item.desc)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
