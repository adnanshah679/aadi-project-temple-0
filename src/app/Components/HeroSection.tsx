import React from 'react'
import Navbar from "@/app/components/SharedComponents/Navbar"
import Image from 'next/image'
import SecondPartHeroSection from "@/app/components/SecondPartHeroSection"

const HeroSection = () => {
    return (
        <>


            <div className="bg-[#FBEBB5] n font-[sans-serif]">
                <Navbar />

                <div className="grid grid-c md:grid-cols-2  md:items-center items-start ">
                    <div className="flex md:justify-end  justify-center mt-10 md:mt-0">
                        <div className='text-left'>

                            <h1 className="sm:text-4xl text-2xl w-72 font-bold">Rocket Single Seater</h1>
                            <h1 className="sm:text-md text-lg font-bold mt-4 text-black     "><span className='border-b border-black py-2'> Shop Now</span></h1>
                        </div>
                    </div>
                    <Image src="/Rocket.png" alt='Rocket' height={200} width={300} className=' w-2/3 h-auto ' />
                </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 space-x-36 justify-center bg-[#FAF4F4]  p-10">

                <SecondPartHeroSection image='/Table.png' />
                <SecondPartHeroSection image='/Soofa.png' />

            </div>

        </>
    )
}

export default HeroSection