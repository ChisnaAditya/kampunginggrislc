import Image from "next/image"
import icon_1 from "../../assets/icon/A1@4x.webp"
import icon_4 from "../../assets/icon/A4@4x.webp"
import icon_5 from "../../assets/icon/A5@4x.webp"
import icon_6 from "../../assets/icon/supportevent.png"
import HTMLReactParser from "html-react-parser";

export default function benefits() {
    const content = [
        {
            icon: icon_4,
            title: 'English Area',
            desc: `Kampung Inggris LC nyediain camp yang nyaman dan nerapin <span className="italic">English area</span>. Kamu bisa praktik secara intens biar speaking English-mu makin natural.`
        },
        {
            icon: icon_5,
            title: 'Tutor Camp (Asrama)',
            desc: 'Selain nyediain camp yang nyaman, kamu juga bakal didampingi tutor pendamping yang friendly dan ramah, siap jadi bestie-mu selama di <span className="italic">camp</span>.'
        },
        {
            icon: icon_6,
            title: 'Supporting Events',
            desc: 'Ngga cuma belajar kamu bisa <span className="italic">join</span> di <span className="italic">event</span> asik. Berekspresi dan <span className="italic">perform</span> di depan member lain. Ke-PD-an dan <span className="italic">skill public speaking</span>-mu bakal meningkat.'
        },
        {
            icon: icon_1,
            title: 'Experienced Teacher',
            desc: 'LC memilih pengajar terbaik dan berpengalaman untuk memastikan kamu dapet pembelajaran yang <span className="italic">top-notch</span>. Siap membimbing kamu mulai dari 0 sampai mahir.'
        },
    ]
    return (
        <div className="flex flex-col gap-4">
            {content.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center lg:grid lg:grid-cols-6 lg:align-top lg:items-start">
                    <figure className="lg:col-span-1 lg:align-top">
                        <Image
                            alt="kampung inggris lc benefits"
                            className="bg-cover w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]"
                            src={item.icon}
                        />
                    </figure>
                    <div className="lg:col-span-5">
                        <h1 className="text-[24px] lg:text-[32px] text-center lg:text-left font-bold italic mb-4">{item.title}</h1>
                        <p className="text-[16px] lg:text-[18px] mb-10">{HTMLReactParser(item.desc)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
