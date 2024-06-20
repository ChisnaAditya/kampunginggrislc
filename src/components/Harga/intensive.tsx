import Link from "next/link"
import HTMLReactParser from "html-react-parser/lib/index"

export default function TabelIntensive() {
    const harga = [
        {
            name: 'Intensive',
            prices: [
                {
                    duration: '3 bulan',
                    rupiah: 'Rp. 4.200.000'
                },
                {
                    duration: '2 bulan',
                    rupiah: 'Rp. 2.975.000'
                },
                {
                    duration: '1 bulan',
                    rupiah: 'Rp. 1.600.000'
                },
                {
                    duration: '2 minggu',
                    rupiah: 'Rp. 950.000'
                },
            ],
            fasilitas: [
                'Camp/asrama English Area',
                'Assessment Test',
                'Qualified & Experienced Teacher',
                '4x Main Class & 2x Camp Class',
                'Senin – Jumat',
                'Extra Program',
                'Modul Pembelajaran',
                'Kaos LC, Sertifikat LC',
                'Grammar, Speaking, Pronunciation',
            ],
            notes: ``,
            populer: false,
            link: `https://cs.kampunginggrislc.com?paket=intensive&utm_content=intensivee`,
        },
    ]
    return (
        <div className='flex flex-col items-center lg:flex-row lg:items-start gap-[20px] p-2'>
            {harga.map((item, index) => (
                <div key={index} className='flex flex-col justify-between w-full  rounded-xl shadow-lg bg-white p-4 overflow-hidden'>
                    <div className='relative'>
                        {item.populer && <div className='absolute top-[10px] left-[110px] transform rotate-45 text-center bg-secondaryLC shadow-lg p-1 w-full'>POPULER</div>}
                        {/* <h3 className='text-icon text-center text-primaryLC'>{item.name}</h3> */}
                        <div className="flex flex-col items-center py-2 my-2 border-[1px]">
                            {item.prices.map((price, indexx) => (
                                <div key={indexx} className="flex items-center justify-between px-2 gap-10 w-full ">
                                    <p>{price.duration}</p>
                                    <p className="harga">{price.rupiah}</p>
                                </div>
                            ))
                            }
                        </div>
                        <div className="">
                            <p className='text-left font-bold'>Fasilitas</p>
                            <ul>
                                {item.fasilitas.map((i, indexxx) => (
                                    <li key={indexxx} className="flex items-center space-x-1 text-left">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>{HTMLReactParser(i)}</span>
                                    </li>
                                ))
                                }
                            </ul>
                            <p className='text-left py-6'>{HTMLReactParser(item.notes)}</p>
                        </div>
                    </div>
                    <div >
                        <Link
                            className="btn bg-primaryLC hover:bg-red-600 hover:font-bold text-white w-full rounded-2xl "
                            href={item.link}
                        >
                            Daftar Program
                        </Link>
                    </div>
                </div>
            ))
            }
        </div>
    )
}
