"use client";
import { Button } from "@nextui-org/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FooterDC() {
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

  return (
    <section className="pt-20 bg-footer-dc">
      <div className="bg-red-400/80 min-h-[300px] flex flex-col items-center justify-center lg:justify-evenly px-4">
        <p className="max-w-lg text-center text-2xl lg:text-4xl text-slate-900 font-bold">
          Jangan sia-siakan liburanmu cuma buat rebahan.
        </p>
        <Button
          className="bg-secondaryLC text-black/70 lg:text-xl font-bold mt-5 lg:w-fit"
          onClick={() => {
            window.location.href = `https://registrasi.kampunginggris.id/?${urlParam}&utm_content=dc2024&br_code=pare`;
            window.gtag("event", "Click_Register", {
              event_category: "click",
              event_label: "Click_Register",
              value: 99,
            });
            window.gtag("event", "CTA_AfterWarning");
            console.log("clicked register");
          }}
        >
          Ayo Daftar Sekarang!
        </Button>
      </div>
      <div className=" relative  py-10">
        <p className="text-center text-xs px-10">
          Kampung Inggris LC @2024 All Right Reserved. Terms of use and Privacy
          Policy
        </p>
      </div>
    </section>
  );
}
