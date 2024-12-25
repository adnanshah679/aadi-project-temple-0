import Image from 'next/image'
import React from 'react'

const SecondSection = () => {
    return (
        <>
            <div className='border-t-2 border-gray-400 mt-20' >
                <div className='flex justify-center mt-12 space-x-4 lg:space-x-16'>
                    <h2 className='text-xl font-semibold'>Descriptiion</h2>
                    <p className='text-gray-500'> Addition Information</p>
                    <p className='text-gray-500'>Reviews [5]</p>
                </div>
                <p className='text-gray-500 flex justify-between max-w-[950px] mx-auto text-center mt-6 mb-8'>
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    <br />
                    <br />
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>
                <div className='md:flex justify-center space-y-4 space-x-2 lg:space-x-12  '>
                    <div className='bg-[#FFF9E5]'>
                        <Image src="/cartSofa1.png" alt='soofa' width={400} height={400} className='h-[350px] w-[550px] ' />
                    </div>
                    <div className='bg-[#FFF9E5]'>
                        <Image src="/cartSofa1.png" alt='soofa' width={400} height={400} className='h-[350px] w-[550px] ' />
                    </div>

                </div>

            </div>
        </>
    )
}

export default SecondSection