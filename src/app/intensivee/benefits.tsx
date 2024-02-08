import Image from "next/image"
import icon_1 from "../../assets/icon/A1@4x.webp"
import icon_4 from "../../assets/icon/A4@4x.webp"
import icon_5 from "../../assets/icon/A5@4x.webp"
import icon_6 from "../../assets/icon/supportevent.png"

export default function benefits() {
    const content = [
        {
            icon: icon_4,
            title: 'English Area',
            desc: 'Kampung Inggris LC nyediain camp yang nyaman dan nerapin English area. Kamu bisa praktik secara intens biar speaking English-mu makin natural. Setiap momen di camp bikin rasa kekeluargaan kamu dan member makin erat.'
        },
        {
            icon: icon_5,
            title: 'Tutor Camp',
            desc: 'Selain nyediain camp yang nyaman, kamu juga bakal didampingi tutor pendamping yang friendly dan ramah, siap jadi bestie-mu selama di camp.'
        },
        {
            icon: icon_6,
            title: 'Supporting Events',
            desc: 'Ngga cuma belajar kamu bisa join di event asik. Berekspresi dan perform di depan member lain. Ke-PD-an dan skill public speaking-mu bakal meningkat.'
        },
        {
            icon: icon_1,
            title: 'Experienced Teacher',
            desc: 'LC memilih pengajar terbaik dan berpengalaman untuk memastikan kamu dapet pembelajaran yang top-notch. Siap membimbing kamu mulai dari 0 sampai mahir.'
        },
    ]
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {content.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center lg:grid lg:grid-cols-6 lg:gap-4 lg:align-top lg:items-start">
                    <div>
                        <figure className="lg:col-span-1 lg:align-top">
                            <Image
                                alt="kampung inggris lc benefits"
                                className="w-[50px] h-[50px] lg:w-[100px] lg:h-auto"
                                src={item.icon}
                            />
                        </figure>
                    </div>
                    <div className="lg:col-span-5">
                        <h1 className="text-[24px] lg:text-[32px] text-center lg:text-left font-bold italic mb-4">{item.title}</h1>
                        <p className="text-[16px] lg:text-[18px] mb-10">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
