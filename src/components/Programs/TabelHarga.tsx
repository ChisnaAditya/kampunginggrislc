"use client"
import HTMLReactParser from "html-react-parser/lib/index"

export default function TabelHarga() {
    const harga = [
        {
            name: 'English Master (EM)',
            prices: [
                {
                    duration: '4 bulan',
                    rupiah: 'Rp. 6.500.000'
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
                'Kaos LC, Jaket LC, Batik',
                'Grammar, Speaking, Pronunciation',
                'LIBURAN KE BALI',
                '<span className="line-through">Academic English</span>',
                '<span className="line-through">TOEFL Preparation</span>',
                '<span className="line-through">Real Test TOEFL</span>',
            ],
            notes: ``,
            populer: false,
            link: `https://cs.kampunginggrislc.com?paket=em/emp`,
        },
        {
            name: 'English Master Plus (EMP)',
            prices: [
                {
                    duration: '6 bulan',
                    rupiah: 'Rp. 9.500.000'
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
                'Kaos LC, Jaket LC, Batik',
                'Grammar, Speaking, Pronunciation',
                'LIBURAN KE BALI',
                `Academic English`,
                `TOEFL Preparation`,
                `Real Test TOEFL`,
            ],
            notes: ``,
            populer: false,
            link: `https://cs.kampunginggrislc.com?paket=em/emp`,
        },
    ]
    return (
        <div className='flex flex-col items-center lg:flex-row lg:items-start gap-[20px]'>
            {harga.map((item, index) => (
                <div key={index} className='relative lg:w-[450px] rounded-xl shadow-xl bg-white p-4 overflow-hidden'>
                    {item.populer && <div className='absolute top-[20px] left-[120px] transform rotate-45 text-center bg-secondaryLC shadow-lg p-1 w-full'>POPULER</div>}
                    <h3 className='text-icon text-center text-primaryLC'>{item.name}</h3>
                    <div className="flex flex-col items-center py-2 my-2 border-[1px]">
                        {item.prices.map((price, indexx) => (
                            <p key={indexx}>{price.duration} <span className='harga'>{price.rupiah}</span></p>
                        ))
                        }
                    </div>
                    <div >
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
                    <button
                        className="btn bg-primaryLC hover:bg-red-600 hover:font-bold text-white w-full rounded-2xl"
                        onClick={() => {
                            window.location.href = `${item.link}`
                        }}
                    >
                        Daftar Program
                    </button>
                </div>
            ))
            }
        </div>
    )
}