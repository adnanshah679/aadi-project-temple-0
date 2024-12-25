import Image from 'next/image'
import React from 'react'
const SecondPartHeroSection = (props: {image:string}) => {
    return (
        <>
        <div className=''>

                <Image src={props.image} alt='ok' height={500} width={500} className='h-[500px] w-[500px]' />
                <div className='ml-16 -mt-32'>
                <h2 className='text-3xl '>Side table</h2>
                <button className='border-b-2 border-black mt-4'>View more</button>
                </div>
        </div>
        </>
    )

}

export default SecondPartHeroSection