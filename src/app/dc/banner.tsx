import { Button } from "@nextui-org/button";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="p-5">
      <h2 className="text-2xl text-center font-bold font-poppins">
        <span className="px-2 bg-gradient-to-r from-amber-200 to-yellow-400">
          Liburan
        </span>{" "}
        Hampir Tiba!
      </h2>
      <p className="text-sm text-center text-slate-600 mb-4">
        Gimana kalo liburan kali ini kamu coba hal yang Anti Mainstream?
      </p>
      <div className="flex bg-gradient-to-r from-amber-200 to-yellow-400 rounded-2xl">
        <div className="relative basis-1/3 bg-neutral-800">
          <Image
            alt=""
            src="/icon/dc/zizi.png"
            width={500}
            height={500}
            className="absolute scale-[1.2]"
          />
        </div>
        <div className="basis-2/3 space-y-4 p-4">
          <p className="text-xs">
            Daripada boring di rumah kan mending kamu gabung program liburan ke
            LC aja
          </p>
          <h3 className="text-xs font-bold italic">
            Selesai liburan, kamu bisa ngomong bahasa Inggris!
          </h3>
          <Button className="bg-neutral-800 text-white">Yuk Daftar</Button>
        </div>
      </div>
    </section>
  );
}
