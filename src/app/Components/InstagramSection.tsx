import Image from "next/image"
import React from 'react'

const InstagramSection = () => {
    return (

        <>
            <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0  before:z-10">
                <Image alt="Instagram" src="/instagram.png" width={300} height={300} className="absolute inset-0 w-full h-full object-cover" />

                <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center  p-6">
                    <h2 className="sm:text-7xl text-5xl font-bold mb-6">Our Instagram</h2>
                    <p className="sm:text-lg text-base text-center ">Follow Our Store on Instagram</p>

                    <button
                        type="button"
                        className="mt-12  text-base py-3 px-6 border  rounded-full bg-[#FAF4F4]  hover:text-black transition duration-300">
                        Follow us
                    </button>
                </div>
            </div>
        </>
    )
}

export default InstagramSection