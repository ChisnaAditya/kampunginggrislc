import React from 'react'

export default function goals() {
    const goalsContent = [
        {
            periode: '2 Minggu',
            goal: 'Siswa mampu membuat kalimat sederhana dan mengungkapkan menggunakan bahasa yang bahasa Inggris yang baik dan benar.'
        },
        {
            periode: '1 Bulan',
            goal: 'Siswa mampu membuat kalimat, mengungkapkan serta dapat menerapkannya dalam kehidupan sehari-hari dengan menggunakan bahasa Inggris yang baik dan benar.'
        },
        {
            periode: '2 Bulan',
            goal: 'Siswa mampu, berani, dan percaya diri berkomunikasi menggunakan bahasa Inggris dalam kegiatan sehari-hari baik dalam kegiatan formal ataupun non formal.'
        },
        {
            periode: '3 Bulan',
            goal: 'Siswa mampu merespon kalimat yang diucapkan oleh native speaker (by audio/ video), mampu membuat mapping poin dan membuat rangkuman untuk dipresentasikan di depan publik.'
        },
    ]

    interface cardProps {
        periode: string,
        goal: string
    }

    function Card(prop: cardProps) {
        return (
            <div className='flex flex-col justify-center items-center lg:w-[366px] h-[285px] my-4 lg:my-8'>
                <h1 className='w-[174.17px] h-[39.62px] bg-primaryLC shadow-lg z-[2] text-center text-white text-[26px] font-bold italic rounded-full overflow-hidden'>{prop.periode}</h1>
                <p className='h-64 w-full -mt-5 rounded-xl border-[2px] text-[18px] px-5 py-10'>{prop.goal}</p>
            </div>
        )
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {
                goalsContent.map((item, index) => (
                    <div key={index}>
                        <Card
                            periode={item.periode}
                            goal={item.goal}
                        />
                    </div>
                ))
            }
        </div>
    )
}
