import React from 'react'
import Image from 'next/image'

const TopPicss = (props:{name:string, price:string, image:string}) => {
  return (
  <>
   <div className='mt-10 p-10'>
                <Image src={props.image} alt='ok' height={500} width={500} className='h-96 w-96'/>

                <div className=''>
                    <p className=' text-2xl'>{props.name}</p>
                    <p className='font-bold text-3xl mt-2'>Rs {props.price}</p>
                </div>
            </div>
  
  </>
  )
}

export default TopPicss