import Image from "next/image";
import { Button } from "@nextui-org/react";

const ArrorLeft = () => {
  return (
    <div className="w-[30px] bg-white p-1 rounded-full">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M5 12H19M19 12L13 6M19 12L13 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default function Banner() {
  return (
    <div className="flex items-center justify-center my-20 rounded-xl shadow-xl bg-pattern-banner bg-no-repeat bg-cover">
      <div>
        <h2 className="text-4xl font-bold text-white">
          Mau Tanya Lebih Lanjut?
        </h2>
        <p className="text-2xl pt-2 text-white">Hubungi Kami</p>
        <Button
          className="text-xl text-white rounded-full py-6 px-3 mt-5 font-medium bg-green-600"
          endContent={<ArrorLeft />}
        >
          Konsultasi Gratis
        </Button>
      </div>
      <div className="relative">
        <Image
          alt=""
          src="/Konsultasi Gratis.png"
          width={400}
          height={400}
          className="drop-shadow-2xl"
        />
        <Image
          alt=""
          src="/icon-banner-1.png"
          width={100}
          height={100}
          className="absolute bottom-64 right-0 drop-shadow-2xl animate-infinite-floating"
        />
      </div>
    </div>
  );
}
