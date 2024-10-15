import Image from "next/image";

export default function Teacher() {
  const tutor = [
    "/tutor/em/16.png",
    "/tutor/em/11.png",
    "/tutor/em/10.png",
    "/tutor/em/17.png",
    "/tutor/em/12.png",
    "/tutor/em/13.png",
    "/tutor/em/14.png",
    "/tutor/em/15.png",
  ];

  return (
    <section className="p-5 max-w-7xl mx-auto">
      <div className="flex flex-col lg:items-center justify-center">
        <h2 className="text-2xl lg:text-4xl font-bold font-poppins">
          <span className="px-2 bg-gradient-to-b from-[#fcce00b5] to-[#fca800d6]">
            Teachers
          </span>{" "}
          Kami
        </h2>
        <p className="text-md lg:text-xl mb-5 text-slate-700 max-w-lg lg:mt-4 lg:text-center">
          Teacher LC <b>siap menemani liburan</b> dan{" "}
          <b>membimbing belajarmu</b> sampai mahir.
        </p>
      </div>
      <div className="flex overflow-scroll gap-4 lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-100px),transparent_100%)]">
        {tutor.map((item, index) => (
          <div key={index}>
            <div className="w-[250px] lg:w-[350px]">
              <Image alt="" src={item} width={1280} height={1280} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-primaryLC font-bold">Swipe &#10158;</p>
    </section>
  );
}
