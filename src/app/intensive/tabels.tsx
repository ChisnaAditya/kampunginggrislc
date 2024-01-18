import { Lalezar } from 'next/font/google'

const lalezar = Lalezar({ subsets: ['latin'], weight: "400" })

export default function tabels() {
    function checkLogo() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#29C505] mx-auto" height="30" width="30" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
        )
    }

    function closeLogo() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-primaryLC mx-auto" height="30" width="30" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
        )
    }
    const contentTable = [
        {
            head: "Jumlah Pertemuan",
            col_1: "4 Main Class + 2 Camp Class",
            col_2: "4 Main Class + 2 Camp Class",
            col_3: "4 Main Class + 2 Camp Class",
            col_4: "4 Main Class + 2 Camp Class",
        },
        {
            head: "Camp English Area",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "Assesment Test",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "Tutor Asrama",
            col_1: closeLogo(),
            col_2: closeLogo(),
            col_3: closeLogo(),
            col_4: closeLogo(),
        },
        {
            head: "Qualified Teacher",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "Modul",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "E-Certificate",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "Merchandise",
            col_1: checkLogo(),
            col_2: checkLogo(),
            col_3: checkLogo(),
            col_4: checkLogo(),
        },
        {
            head: "Harga Program",
            col_1: "Rp950.000,-",
            col_2: "Rp1.600.000,-",
            col_3: "Rp2.975.000,-",
            col_4: "Rp4.200.000,-",
        },
    ]
    return (
        <div>
            <table id="tabel-program" className="table-auto mt-20">
                <thead className={`p-10 ${lalezar.className}`}>
                    <tr>
                        <th></th>
                        <th className="font-normal text-[32px] text-primaryLC leading-tight">IEP <br /> 2 Minggu</th>
                        <th className="font-normal text-[32px] text-primaryLC leading-tight">IEP <br /> 1 Bulan</th>
                        <th className="font-normal text-[32px] text-primaryLC leading-tight">IEP <br /> 2 Bulan</th>
                        <th className="font-normal text-[32px] text-primaryLC leading-tight">IEP <br /> 3 Bulan</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        contentTable.map((item, index) => (
                            <tr key={index} className="border-b-[1px] border-b-neutral">
                                <td className="pe-10 py-5 font-bold">{item.head}</td>
                                <td className="px-10 py-5">{item.col_1}</td>
                                <td className="px-10 py-5">{item.col_2}</td>
                                <td className="px-10 py-5">{item.col_3}</td>
                                <td className="px-10 py-5">{item.col_4}</td>
                            </tr>
                        ))
                    }

                    <tr>
                        <td className="py-5"></td>
                        <td className="px-10 py-5"><button className="btn bg-primaryLC text-white rounded-xl">JOIN NOW</button></td>
                        <td className="px-10 py-5"><button className="btn bg-primaryLC text-white rounded-xl">JOIN NOW</button></td>
                        <td className="px-10 py-5"><button className="btn bg-primaryLC text-white rounded-xl">JOIN NOW</button></td>
                        <td className="px-10 py-5"><button className="btn bg-primaryLC text-white rounded-xl">JOIN NOW</button></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
