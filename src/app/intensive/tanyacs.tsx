'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function TanyaCS() {
    const [urlParam, setUrlParam] = useState('')
    const searchParams = useSearchParams()
    const utm_source = searchParams.get('utm_source') || "" as string
    const utm_medium = searchParams.get('utm_medium') || "" as string
    const utm_campaign = searchParams.get('utm_campaign') || "" as string

    const setToLocalStorage = () => {
        if (localStorage.getItem('utm_source') !== null) {
            localStorage.setItem('utm_source', utm_source)
        }
        if (localStorage.getItem('utm_source') !== null) {
            localStorage.setItem('utm_medium', utm_medium)
        }
        if (localStorage.getItem('utm_source') !== null) {
            localStorage.setItem('utm_campaign', utm_campaign)
        }
    }
    useEffect(() => {
        setUrlParam(`utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`)
        setToLocalStorage()
    }, [utm_source, utm_medium, utm_campaign,])

    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto my-10  py-5 lg:py-20 bg-pattern-tanyacs">
            <h2 className='text-[24px] lg:text-[28px] text-center px-[2rem] font-bold shadow-green-800'>
                Bingung Menentukan Paket Pilihan?
            </h2>
            <p className='text-[20px] font-normal text-center'>Tanya cs kami</p>
            <svg className=' fill-green-700 w-[60px] lg:w-[70px] animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Double down"><path d="M12 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 14.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 12 17z" /><path d="M12 13a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 12 13z" /></g></svg>
            <Link
                className="btn bg-green-700 hover:bg-green-800 hover:font-bold text-white border-none rounded-2xl px-10"
                href={`https://cs.kampunginggrislc.com/?${urlParam}&utm_content=intensive`}
            >
                Tanya CS
            </Link>
        </div>
    )
}