import Image from "next/image";
import HTMLReactParser from "html-react-parser/lib/index";

export default function Fasilitas() {
  const content = [
    {
      icon: "/icon/dc/4.png",
      title: "Makan dan Laundry",
      desc: "Program ini sudah include <b>makan 3x</b> sehari dan sudah <i><b>free laundry</b></i> capek lewat, semangat belajarmu terus meningkat.",
    },
    {
      icon: "/icon/dc/6.png",
      title: "Modul Belajar & Kaos LC",
      desc: "LC nyediain modul buat panduan belajarmu. <b>Free kaos LC</b>, bisa kamu pakai selama proses belajar bahkan setelah lulus.",
    },
    {
      icon: "/icon/dc/5.png",
      title: "Outing ke SLG",
      desc: "Lebih dari sekadar belajar di kelas, kamu <b>bisa jalan-jalan</b> dan have fun bareng teacher dan member LC.",
    },
    {
      icon: "/icon/dc/3.png",
      title: "Kelas Super Intensif",
      desc: "Program belajar LC dirancang super intensif <b>6x meeting/hari</b> untuk tingkatkan skill English-mu!",
    },
    {
      icon: "/icon/dc/1.png",
      title: "Experienced Teacher",
      desc: "Pengajar <b>terbaik dan berpengalaman</b> untuk memastikan kamu dapet pembelajaran yang top-notch.",
    },
    {
      icon: "/icon/dc/2.png",
      title: "Asrama English Area",
      desc: "Kampung Inggris LC, tempat nyaman untuk bersantai sekaligus <b>praktik</b> bahasa Inggris dengan <b>asyik!</b>",
    },
  ];
  return (
    <section>
      <h2 className="text-2xl font-bold font-poppins px-5">
        <span className="px-2 bg-gradient-to-r from-amber-200 to-yellow-400">
          Fasilitas
        </span>{" "}
        yang Kamu Dapat
      </h2>
      <p className="text-md text-slate-600 px-5">
        Semua kebutuhanmu sudah kami sediakan jadi kamu{" "}
        <b>bisa fokus belajar</b> dan <b>menikmati liburan</b> dengan nyaman
      </p>
      <div className="bg-pattern-fasilitas-dc">
        <div className="mt-5 space-y-4 p-5">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-center rounded-3xl shadow-xl bg-white p-4"
            >
              <Image
                alt="desember ceria"
                src={item.icon}
                width={100}
                height={100}
                className="w-[50px]"
              />
              <div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-xs mt-1 text-slate-600">
                  {HTMLReactParser(item.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
