import React from 'react'
import Image from "next/image"

const LastBlogs = (props:{image:string, heading:string, paragraph:string}) => {
  return (

<div className=' w-auto h-auto ml-2  md:ml-0'>
            <Image src={props.image} alt='blog' width={600} height={600} className='h-[200px] md:h-[300px] lg:h-[480px] w-[350px] md:w-[500px] lg:w-[699px]' />
            <div className='flex space-x-3 mt-2'>

              <div className='flex  space-x-1 items-center'>
                <Image src="/adminIcon.png" alt='Admin Icon' height={200} width={200} className='h-4 w-4' />
                <p className='text-gray-400'>Admin</p>
              </div>

              <div className='flex  space-x-1 items-center'>
                <Image src="/adminIcon.png" alt='Admin Icon' height={200} width={200} className='h-4 w-4' />
                <p className='text-gray-400'>14 Oct 2022</p>
              </div>
              <div className='flex  space-x-1 items-center'>
                <Image src="/woodIcon.png" alt='Admin Icon' height={200} width={200} className='h-4 w-4' />
                <p className='text-gray-400'>Wood</p>
              </div>
            </div>

            <div className='mt-4'>
              <h2 className='mt-4 text-xl lg:text-3xl font-bold'>{props.heading}</h2>
              <p className='mt-2 w-[350px] md:w-[500px] lg:w-[700px] text-gray-400 '>{props.paragraph}.</p>
              <button className='text-lg font-semibold mt-4 border-b-2 border-black'>Read more</button>
            </div>
          </div>
          

  )
}

export default LastBlogs