import Image from "next/image";
import Bonus from "./bonus";

export default function Overview() {
  return (
    <section className="flex flex-col items-center px-4">
      <div className="text-center py-10">
        <p className="uppercase text-lg">Ingin meningkatkan</p>
        <h2 className="capitalize text-3xl sm:text-4xl max-w-xl">
          kemampuan{" "}
          <span className="font-bold text-primaryLC">bahasa Inggris</span>{" "}
          secara <span className="italic">general</span> mulai dari dasar?{" "}
          <br />
        </h2>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce w-[100px] mx-auto"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
              fill="#0F0F0F"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className="">
        <Image
          alt="program vip kampung inggris lc"
          src={`https://files.kampunginggrislc.com/2023/11/lc_23-oktober-2023_program-vip-harga-3.webp`}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center pt-10">
        <p className="uppercase">Perbedaan</p>
        <h2 className="text-3xl sm:text-4xl py-2 max-w-xl">
          Program <span className="font-bold text-primaryLC">VIP </span>dan
          Reguler
        </h2>
        <Image
          alt="program vip kampung inggris lc"
          src={`https://files.kampunginggrislc.com/2023/11/lc_23-oktober-2023_program-vip-harga-perbandingan-e1700469192833.webp`}
          width={500}
          height={500}
        />
      </div>
      <Bonus />
    </section>
  );
}
