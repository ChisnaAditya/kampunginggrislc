import Image from "next/image"

export const CardTestimoni = (props: any) => {
    return (
        <div className='w-[350px] lg:w-[500px] flex flex-col justify-between flex-shrink-0 rounded-xl shadow-lg border-[1.5px] p-4'>
            <div className='p italic text-justify mb-2'>{props.testi}</div>
            <div className="flex items-center gap-2 border-t-[1.5px] pt-2">
                <figure>
                    <Image alt='kampung inggris lc pare' src={props.avatar} width={70} height={70} className='rounded-full' />
                </figure>
                <div className="flex flex-col justify-between ">
                    <h3 className='text-icon text-left text-primaryLC'>{props.name}</h3>
                    <p className='p text-left leading-none'>{props.job} <br /> {props.program}</p>
                </div>
            </div>
        </div>
    )
}