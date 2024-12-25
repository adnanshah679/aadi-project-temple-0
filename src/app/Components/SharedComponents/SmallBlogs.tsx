import React from 'react'
import Image from "next/image"

const SmallBlogs = (props:{heading:string, image:string}) => {
    return (


        <>
            <div className='flex mt-4 space-x-2'>
                <Image src={props.image} alt='blog2' width={80} height={80} />
                <div>
                    <h2 className='w-36'>{props.heading}</h2>
                    <p className='text-gray-400 mt-2'>03 Aug 2022</p>
                </div>
            </div>

        </>
    )
}

export default SmallBlogs