import Image from "next/image";
import HTMLReactParser from "html-react-parser/lib/index";

export default function Fasilitas() {
  const content = [
    {
      icon: "/icon/dc/4.png",
      title: "Gratis Makan, Laundry, dan Asrama",
      desc: "Program ini sudah include <b className='text-primaryLC'>makan 3x</b> sehari dan sudah <i><b className='text-primaryLC'>free laundry</b></i>, capek lewat semangat belajarmu terus meningkat.",
    },
    {
      icon: "/icon/dc/2.png",
      title: "Asrama English Area",
      desc: "Kampung Inggris LC, tempat nyaman untuk bersantai sekaligus <b className='text-primaryLC'>praktik</b> bahasa Inggris dengan <b className='text-primaryLC'>asyik!</b>",
    },
    {
      icon: "/icon/dc/2.png",
      title: "Tutor Pendamping Asrama",
      desc: "Akan ada <b className='text-primaryLC'>teachers</b> yang akan <b className='text-primaryLC'>membantu kamu praktik ngomong inggris</b>, memberikan feedback jika kamu melakukan kesalahan.",
    },
    {
      icon: "/icon/dc/5.png",
      title: "Outing ke SLG",
      desc: "Lebih dari sekadar belajar di kelas, kamu <b className='text-primaryLC'>bisa jalan-jalan</b> dan have fun bareng teacher dan member LC.",
    },
    {
      icon: "/icon/dc/3.png",
      title: "Kelas Super Intensif",
      desc: "Program belajar LC dirancang super intensif <b className='text-primaryLC'>6x meeting/hari</b> untuk tingkatkan skill English-mu!",
    },
    {
      icon: "/icon/dc/1.png",
      title: "Experienced Teacher",
      desc: "Pengajar <b className='text-primaryLC'>terbaik dan berpengalaman</b> siap menemani liburan dan membimbingmu sampai mahir.",
    },
    {
      icon: "/icon/dc/6.png",
      title: "Modul Belajar & Kaos LC",
      desc: "LC nyediain modul buat panduan belajarmu. <b className='text-primaryLC'>Free kaos LC</b>, bisa kamu pakai selama proses belajar bahkan setelah lulus.",
    },
  ];
  return (
    <section className="lg:px-20">
      <div className="px-5 py-10 max-w-6xl space-y-2 text-center mx-auto">
        <div className="">Gak Hanya Itu!</div>
        <h2 className="text-3xl lg:text-4xl font-bold font-poppins">
          Semua Kebutuhanmu
        </h2>
        <p className="text-black/80 lg:pt-2 lg:text-lg xl:text-xl max-w-lg mx-auto">
          selama liburan <b>sudah kami sediakan</b> loh, jadi kamu{" "}
          <b>bisa fokus belajar</b> dan <b>menikmati liburan</b> dengan nyaman
        </p>
      </div>
      <div className="max-w-6xl mx-auto bg-pattern-fasilitas-dc lg:[mask-image:_linear-gradient(to_left,transparent_0,_black_20px,_black_calc(100%-10px),transparent_100%)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 max-w-6xl mx-auto">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-center rounded-3xl shadow-lg bg-white p-4"
            >
              <Image
                alt="desember ceria"
                src={item.icon}
                width={100}
                height={100}
                className="w-[50px] lg:w-[100px]"
              />
              <div>
                <h3 className="text-lg lg:text-xl font-bold">{item.title}</h3>
                <p className="text-xs lg:text-lg mt-1 text-slate-600">
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
