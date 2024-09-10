import Image from "next/image";
export default function Bonus() {
  return (
    <section className="flex flex-col justify-center items-center py-10">
      <p>SPESIAL</p>
      <h2 className="text-3xl text-center sm:text-4xl py-2 max-w-lg">
        Bonus <span className="font-bold text-primaryLC">Eksklusif</span>{" "}
        Senilai Rp342.000
      </h2>
      <p className=" text-center">jika kamu daftar hari ini</p>
      <div className="flex justify-center items-center gap-4">
        <div>
          <Image
            alt=""
            src="https://files.kampunginggrislc.com/2024/04/buku-jago-ngomong-inggris.webp"
            width={200}
            height={200}
            className="animate-infinite-floating"
          />
          <h3 className="font-semibold text-lg text-center mt-10">
            ECourse Cinch English
          </h3>
        </div>
        <div>
          <Image
            alt=""
            src="https://files.kampunginggrislc.com/2024/04/buku-chinc-english.webp"
            width={200}
            height={200}
            className="mx-auto animate-infinite-floating"
          />
          <h3 className="font-semibold text-lg text-center mt-10">
            EBook Jago Ngomong Inggris
          </h3>
        </div>
        <div>
          <Image
            alt=""
            src="https://files.kampunginggrislc.com/2024/04/buku-introduce-yourself.webp"
            width={200}
            height={200}
            className="animate-infinite-floating"
          />
          <h3 className="font-semibold text-lg text-center mt-10">
            EBook Introduce Yourself
          </h3>
        </div>
      </div>
      <div className="p-4 max-w-lg shadow-xl rounded-xl mt-10 bg-gradient-to-b from-amber-300 to-yellow-400">
        <h2 className="uppercase text-center font-bold text-xl pb-4 text-primaryLC">
          warning
        </h2>
        <p className="text-lg text-center pb-4">
          Hi LCers, untuk menjaga kualitas belajar kami <b>MEMBATASI KUOTA</b>{" "}
          dan akan <b>MENUTUP PENDAFTARAN</b> sewaktu-waktu jika kuota sudah
          terpenuhi. <br /> Saran kami, yuk <b>amankan kuotamu</b> sekarang juga
          dengan cara mendaftar dan <b>membayar DP 20%</b>.
        </p>
      </div>
    </section>
  );
}
