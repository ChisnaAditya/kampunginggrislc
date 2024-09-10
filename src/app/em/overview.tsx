import Image from "next/image";
import { Button } from "@nextui-org/react";

const Check = () => {
  return (
    <div>
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 24.00 24.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
        strokeWidth="0.00024000000000000003"
        transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#CCCCCC"
          strokeWidth="0.048"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            opacity="0.5"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            fill="#5eff8e"
          ></path>{" "}
          <path
            d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
            fill="#5eff8e"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default function Overview() {
  return (
    <section
      id="overview"
      className="flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <div className="flex items-center justify-center gap-10 p-4 sm:p-10 bg-white shadow-xl rounded-2xl">
        <div className="">
          <p className="text-3xl sm:text-4xl max-w-lg">
            Apakah kamu termasuk kriteria dibawah ini?
          </p>
          <div className="flex flex-col gap-2 max-w-lg py-5">
            <div className="flex gap-4 text-lg">
              <Image
                alt=""
                src="/icon/emoticon-sad-1.svg"
                width={50}
                height={50}
              />
              Udah belajar bahasa Inggris bertahun tahun tapi masih belum bisa!
            </div>
            <div className="flex gap-4">
              <Image
                alt=""
                src="/icon/emoticon-sad-2.svg"
                width={50}
                height={50}
              />
              Tau artinya kalau orang lain ngomong pakai bahasa inggris, tapi
              nggak bisa balasnya!
            </div>
            <div className="flex gap-4">
              <Image
                alt=""
                src="/icon/emoticon-sad-3.svg"
                width={50}
                height={50}
                className="animate-spinner-linear-spin"
              />
              Udah tau teorinya tapi nggak punya teman praktiknya, alhasil lupa
              lagi dah!
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80px] sm:w-[100px]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block animate-infinite-slide-left"
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
              d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:hidden animate-bounce"
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
              d="M12 20L18 14M12 20L6 14M12 20L12 9.5M12 4V6.5"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className="flex items-center justify-center gap-10 p-4 sm:p-10 bg-white shadow-xl rounded-2xl">
        <div className="">
          <p className="text-3xl sm:text-4xl max-w-lg ">Berarti kamu harus!</p>
          <div className="flex flex-col gap-2 max-w-lg py-5">
            <div className="flex gap-4 text-xl max-w-sm">
              <Check />
              Bukan hanya belajar teori tapi juga praktik
            </div>
            <div className="flex gap-4 text-xl max-w-sm">
              <Check />
              Bukan hanya praktik sekali, tapi juga setiap hari
            </div>
            <div className="flex gap-4 text-xl">
              <Check />
              Cari lingkungan yang mendukung supaya ada teman praktik dan ada yg
              memberikan feedback
            </div>
          </div>
          {/* <Button className="text-left max-w-lg">Join Now</Button> */}
        </div>
      </div>
    </section>
  );
}
