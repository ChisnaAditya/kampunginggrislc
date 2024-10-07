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
    <section className="p-5">
      <h2 className="text-2xl font-bold font-poppins">
        <span className="px-2 bg-gradient-to-r from-amber-200 to-yellow-400">
          Teachers
        </span>{" "}
        Kami
      </h2>
      <p className="text-md mb-5 text-slate-600">
        Teacher LC <b>siap menemani liburan</b> dan <b>membimbing belajarmu</b>{" "}
        sampai mahir.
      </p>
      <div className="flex overflow-scroll gap-4">
        {tutor.map((item, index) => (
          <div key={index}>
            <div className="w-[250px]">
              <Image alt="" src={item} width={1280} height={1280} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-primaryLC font-bold">Swipe &#10158;</p>
    </section>
  );
}
