import { Lalezar } from "next/font/google";
import Link from "next/link";
const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });
import HTMLReactParser from "html-react-parser";

export default function tabels() {
  function checkLogo() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#29C505] mx-auto"
        height="30"
        width="30"
        viewBox="0 0 512 512"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
      </svg>
    );
  }

  function closeLogo() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-primaryLC mx-auto"
        height="30"
        width="30"
        viewBox="0 0 512 512"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
      </svg>
    );
  }
  const contentTable = [
    {
      head: `<span className="italic">Camp English Area</span>`,
      col_1: checkLogo(),
      col_2: checkLogo(),
      col_3: checkLogo(),
      col_4: checkLogo(),
    },
    {
      head: `<span className="italic">Assesment Test</span>`,
      col_1: checkLogo(),
      col_2: checkLogo(),
      col_3: checkLogo(),
      col_4: checkLogo(),
    },
    {
      head: "Tutor Asrama",
      col_1: checkLogo(),
      col_2: checkLogo(),
      col_3: checkLogo(),
      col_4: checkLogo(),
    },
    {
      head: `<span className="italic">Qualified Teacher</span>`,
      col_1: checkLogo(),
      col_2: checkLogo(),
      col_3: checkLogo(),
      col_4: checkLogo(),
    },
    {
      head: "Modul",
      col_1: checkLogo(),
      col_2: checkLogo(),
      col_3: checkLogo(),
      col_4: checkLogo(),
    },
    {
      head: `<span className="italic">E-Certificate</span>`,
      col_1: checkLogo(),
      col_2: checkLogo(),
      col_3: checkLogo(),
      col_4: checkLogo(),
    },
    {
      head: `<span className="italic">Merchandise</span>`,
      col_1: checkLogo(),
      col_2: checkLogo(),
      col_3: checkLogo(),
      col_4: checkLogo(),
    },
  ];
  return (
    <div className="px-[1rem] lg:px-0">
      <table id="tabel-program" className="table-fixed mt-20 lg:w-full">
        <thead className={`p-10 ${lalezar.className}`}>
          <tr>
            <th></th>
            <th className="font-normal text-[24px] lg:text-[32px] text-primaryLC leading-tight">
              IEP <br /> 2 Minggu
            </th>
            <th className="font-normal text-[24px] lg:text-[32px] text-primaryLC leading-tight">
              IEP <br /> 1 Bulan
            </th>
            <th className="font-normal text-[24px] lg:text-[32px] text-primaryLC leading-tight">
              IEP <br /> 2 Bulan
            </th>
            <th className="font-normal text-[24px] lg:text-[32px] text-primaryLC leading-tight">
              IEP <br /> 3 Bulan
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b-[1px] border-b-[#D9D9D9]">
            <td className="lg:pe-20 py-5 font-bold text-[16px] lg:text-[18px]">
              Jumlah Pertemuan
            </td>
            <td className=" lg:px-10 py-5 italic text-center">
              4 Main Class <br /> + 2 Camp Class
            </td>
            <td className=" lg:px-10 py-5 italic text-center">
              4 Main Class <br /> + 2 Camp Class
            </td>
            <td className=" lg:px-10 py-5 italic text-center">
              4 Main Class <br /> + 2 Camp Class
            </td>
            <td className=" lg:px-10 py-5 italic text-center">
              4 Main Class <br /> + 2 Camp Class
            </td>
          </tr>
          {contentTable.map((item, index) => (
            <tr key={index} className="border-b-[1px] border-b-[#D9D9D9]">
              <td className="lg:pe-20 py-5 font-bold text-[16px] lg:text-[18px]">
                {HTMLReactParser(item.head)}
              </td>
              <td className=" lg:px-10  py-5 text-center">{item.col_1}</td>
              <td className=" lg:px-10  py-5 text-center">{item.col_2}</td>
              <td className=" lg:px-10  py-5 text-center">{item.col_3}</td>
              <td className=" lg:px-10  py-5 text-center">{item.col_4}</td>
            </tr>
          ))}
          <tr>
            <td className="lg:pe-20 py-5 font-bold text-[16px] lg:text-[18px]">
              Harga Program
            </td>
            <td className=" lg:px-10  py-5 text-center">Rp950.000,-</td>
            <td className=" lg:px-10  py-5 text-center">Rp1.600.000,-</td>
            <td className=" lg:px-10  py-5 text-center">Rp2.975.000,-</td>
            <td className=" lg:px-10  py-5 text-center">Rp4.200.000,-</td>
          </tr>
          <tr>
            <td className="py-5"></td>
            <td className="px-10 py-5">
              <Link href="https://registrasi.kampunginggris.id/?br_code=PARE&utm_content=intensivee">
                <button
                  aria-label="btn-registrasi"
                  className="btn w-[180px] h-[50px] bg-primaryLC hover:bg-primaryLC/80 text-white rounded-2xl"
                >
                  JOIN NOW
                </button>
              </Link>
            </td>
            <td className="px-10 py-5">
              <Link href="https://registrasi.kampunginggris.id/?br_code=PARE&utm_content=intensivee">
                <button
                  aria-label="btn-registrasi"
                  className="btn w-[180px] h-[50px] bg-primaryLC hover:bg-primaryLC/80 text-white rounded-2xl"
                >
                  JOIN NOW
                </button>
              </Link>
            </td>
            <td className="px-10 py-5">
              <Link href="https://registrasi.kampunginggris.id/?br_code=PARE&utm_content=intensivee">
                <button
                  aria-label="btn-registrasi"
                  className="btn w-[180px] h-[50px] bg-primaryLC hover:bg-primaryLC/80 text-white rounded-2xl"
                >
                  JOIN NOW
                </button>
              </Link>
            </td>
            <td className="px-10 py-5">
              <Link href="https://registrasi.kampunginggris.id/?br_code=PARE&utm_content=intensivee">
                <button
                  aria-label="btn-registrasi"
                  className="btn w-[180px] h-[50px] bg-primaryLC hover:bg-primaryLC/80 text-white rounded-2xl"
                >
                  JOIN NOW
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
