
import Image from 'next/image'
import React from 'react'

const ComponentsForBlogs = (props: {images:string}) => {
    return (
        <div className="p-4 rounded-lg shadow-[0_4px_10px_0px_rgba(93,96,127,0.2)] ">
            <div className="flex flex-col items-center">
                <Image alt='Blogs ' height={300} width={300} src={props.images} className="w-full object-contain object-top rounded-lg" />

                <div className="mt-4">
                    <p className="text-gray-800  leading-relaxed text-xl">Going all-in with millennial design</p>

                    <button className="text-gray-800 border-b-4 border-gray-400 text-2xl p-3  font-bold">Read more</button>
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                <Image src="/time.png" alt=' ok' width={200} height={200} className='w- h-6' />
            </div>
        </div>

    )
}

export default ComponentsForBlogs