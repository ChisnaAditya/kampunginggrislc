import Image from "next/image";
export default function Galeri(props: any) {
  return (
    <div key={props.keyy} className="w-full">
      <div className="w-[300px]">
        <Image
          alt="fasilitas kampung inggris lc pare"
          src={props.src}
          width={720}
          height={450}
          className="rounded-xl w-[720px]"
          loading="lazy"
        />
      </div>
      <p className="text-center text-slate-500 text-xs italic mt-2">
        {props.desc}
      </p>
    </div>
  );
}
