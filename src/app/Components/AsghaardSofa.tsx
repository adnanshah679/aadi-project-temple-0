import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const AsghaardSofa = () => {
    return (
        <>
            <div className='w-3/3 block  sm:flex    bg-[#FFF9E5] '>
                <div className=' flex justify-around  items-center w-2/3 h-[700px] '>
                    <Image src="/AsgaardSofa.png" className="h-[700px] w-[600px] " alt='Asghar Soofa' width={500} height={500} />
                </div>
                <div className=' w-1/3  flex ml-20 sm:ml-0 justify-start items-center'>
                    <div className='text-center gap-28  space-y-5'>
                        <p className='font-semibold '>New Arrival</p>
                        <h1 className='text-3xl font-bold'>Asgaard Sofa</h1>

                        <button > <Link href="/SingleProduct" className='border-2 border-black px-4 py-2 text-gray-800'>Order Now</Link> </button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AsghaardSofa