"use client";
import HTMLReactParser from "html-react-parser/lib/index";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TabelHarga() {
  const [urlParam, setUrlParam] = useState("");
  const searchParams = useSearchParams();
  const utm_source = searchParams.get("utm_source") || ("" as string);
  const utm_medium = searchParams.get("utm_medium") || ("" as string);
  const utm_campaign = searchParams.get("utm_campaign") || ("" as string);

  const setToLocalStorage = () => {
    if (localStorage.getItem("utm_source") !== null) {
      localStorage.setItem("utm_source", utm_source);
    }
    if (localStorage.getItem("utm_source") !== null) {
      localStorage.setItem("utm_medium", utm_medium);
    }
    if (localStorage.getItem("utm_source") !== null) {
      localStorage.setItem("utm_campaign", utm_campaign);
    }
  };

  useEffect(() => {
    setUrlParam(
      `utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
    );
    setToLocalStorage();
  }, [utm_source, utm_medium, utm_campaign]);

  const IconCheck = `<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>`;
  const IconX = `<svg className="flex-shrink-0 w-5 h-5 text-red-600 dark:text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>`;

  const iconCheck = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width={20}
        height={20}
      >
        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    );
  };

  const harga = [
    {
      name: "English Master (EM)",
      prices: [
        {
          duration: "4 bulan",
          rupiah: "Rp. 6.500.000",
        },
      ],
      fasilitas: [
        `${IconCheck}Camp/asrama English Area`,
        `${IconCheck}Assessment Test`,
        `${IconCheck}Qualified & Experienced Teacher`,
        `${IconCheck}4x Main Class & 2x Camp Class`,
        `${IconCheck}Senin – Jumat`,
        `${IconCheck}Extra Program`,
        `${IconCheck}Modul Pembelajaran`,
        `${IconCheck}Kaos LC, Jaket LC, Batik`,
        `${IconCheck}Grammar, Speaking, Pronunciation`,
        `${IconCheck}LIBURAN KE BALI`,
        `${IconX}<span className="line-through">Academic English</span>`,
        `${IconX}<span className="line-through">TOEFL Preparation</span>`,
        `${IconX}<span className="line-through">Real Test TOEFL</span>`,
      ],
      notes: ``,
      populer: false,
      link: `https://cs.kampunginggrislc.com?paket=em/emp&utm_content=em&${urlParam}`,
    },
    {
      name: "English Master Plus (EMP)",
      prices: [
        {
          duration: "6 bulan",
          rupiah: "Rp. 9.500.000",
        },
      ],
      fasilitas: [
        `${IconCheck} Camp/asrama English Area`,
        `${IconCheck} Assessment Test`,
        `${IconCheck} Qualified & Experienced Teacher`,
        `${IconCheck} 4x Main Class & 2x Camp Class`,
        `${IconCheck} Senin – Jumat`,
        `${IconCheck} Extra Program`,
        `${IconCheck} Modul Pembelajaran`,
        `${IconCheck} Kaos LC, Jaket LC, Batik`,
        `${IconCheck} Grammar, Speaking, Pronunciation`,
        `${IconCheck} LIBURAN KE BALI`,
        `${IconCheck} Academic English`,
        `${IconCheck} TOEFL Preparation`,
        `${IconCheck} Real Test TOEFL`,
      ],
      notes: ``,
      populer: false,
      link: `https://cs.kampunginggrislc.com?paket=em/emp&utm_content=em&${urlParam}`,
    },
  ];
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-[20px]">
      {harga.map((item, index) => (
        <div
          key={index}
          className=" relative lg:w-[450px] rounded-xl shadow-xl bg-white p-4 overflow-hidden"
        >
          {item.populer && (
            <div className="absolute top-[20px] left-[120px] transform rotate-45 text-center bg-secondaryLC shadow-lg p-1 w-full">
              POPULER
            </div>
          )}
          <h3 className="text-icon text-center text-red-600">{item.name}</h3>
          <div className="flex flex-col items-center py-2 my-2 border-[1px]">
            {item.prices.map((price, index) => (
              <p key={index}>
                {price.duration} <span className="harga">{price.rupiah}</span>
              </p>
            ))}
          </div>
          <div>
            <p className="text-left font-bold">Fasilitas</p>
            <ul>
              {item.fasilitas.map((i, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-1 text-left"
                >
                  <span className="flex gap-2 items-center">
                    {HTMLReactParser(i)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-left py-6">{HTMLReactParser(item.notes)}</p>
          </div>
          <button
            className="btn bg-red-600 hover:bg-red-600 hover:font-bold text-white w-full rounded-2xl"
            onClick={() => {
              window.location.href = `${item.link}`;
              window.gtag("event", "Click_TanyaCS", {
                event_category: "click",
                event_label: "Click_TanyaCS",
                value: 99,
              });
              console.log("clicked tanyacs");
            }}
          >
            Daftar Program
          </button>
        </div>
      ))}
    </div>
  );
}
