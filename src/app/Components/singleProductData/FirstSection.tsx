import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
  return (

    <>
      <div className='mt-7 md:flex space-x-10'>
        <div className='flex space-x-8'>
          <div className='space-y-4'>
            <Image src="/cart1.png" alt='Product' width={80} height={80} />
            <Image src="/cart2.png" alt='Product' width={80} height={80} />
            <Image src="/cart3.png" alt='Product' width={80} height={80} />
            <Image src="/cart4.png" alt='Product' width={80} height={80} />

          </div>
          <div className='bg-[#FFF9E5] w-96 h-96 flex justify-center items-center'>
            <Image src="/product.png" alt='Product' width={200} height={200} className='w-80 h-80' />
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>Asgaard Sofa</h2>
          <p className='text-gray-400 mt-1'>Rs. 25,000.00</p>
          <div className='flex mt-1'>
            <Image src="/ratingIcon1.png" alt='rating Icons' className='h-5 w-5' width={50} height={50} />
            <Image src="/ratingIcon1.png" alt='rating Icons' width={50} height={50} className='h-5 w-5' />
            <Image src="/ratingIcon1.png" alt='rating Icons' width={50} height={50} className='h-5 w-5' />
            <Image src="/ratingIcon1.png" alt='rating Icons' width={50} height={50} className='h-5 w-5' />
            <Image src="/ratingIcon2.png" alt='rating Icons' width={50} height={50} className='h-5 w-5' />
            <Image src="/pipeIcon.png" alt='rating Icons' width={50} height={50} className='h-5 w-[2px]' />
            <p className='text-gray-400 ml-3'>5 Customer Review</p>
          </div>
          <p className='w-[350px] lg:w-[500px] mt-1'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          <p className='text-gray-200 mt-1'>Size</p>
          <div className='mt-1  space-x-4'>
            <span className='bg-[#FBEBB5] rounded  text-lg px-3 py-1   '>L</span>
            <span className='bg-gray-50 rounded  text-lg px-2 py-1   '>XL</span>
            <span className='bg-gray-50 rounded  text-lg px-2 py-1   '>XS</span>
          </div>

          <p className='text-gray-200 mt-1'>Color</p>
          <div className='mt-1  space-x-6 flex' >
            <div className='h-8 w-8 rounded-full bg-[#816DFA]'></div>
            <div className='h-8 w-8 rounded-full bg-black'></div>
            <div className='h-8 w-8 rounded-full bg-[#CDBA7B]'></div>
          </div>
          <div className='flex -mt-4 space-x-4'>
            <div className='h-10 w-32 border rounded-lg border-gray-400 mt-10'>
              <div className='flex p-2 justify-center items-center  space-x-7'>
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
            </div>

            <div className='lg:h-10 h-10 px-10  lg:px-16 border rounded-lg border-gray-800 mt-10'>
              <div className='flex mt-1 justify-center items-center text-sm lg:text-xl font-semibold space-x-2 lg:space-x-7'>
                <h2> Add to Cart</h2>
              </div>
            </div>

          </div>
          <div className='border-t border-gray-400 mt-10'>
            <div className='flex text-gray-400 mt-4'>
              <p>SKU </p>
              <p className='ml-10 '>: SS001</p>
            </div>

            <div className='flex text-gray-400 mt-4'>
              <p>Category </p>
              <p className='ml-2 '>: Sofa</p>
            </div>
            <div className='flex text-gray-400 mt-4'>
              <p>Tag </p>
              <p className='ml-12 '>: Sofa, Chair, Home, Shop</p>
            </div>

            <div className='flex text-gray-400 mt-6'>
              <p>Share </p>
              <p className='ml-8'>:</p>
              <div className='flex space-x-4 ml-2'>
                <Image src="/facbookIcon.png" width={100} height={100}  alt='facbook' className='h-6 w-6 ' />
                <Image src="/linkedinIcon.png" width={50} height={50}  alt='facbook' className='h-6 w-6 ' />
                <Image src="/twitterIcon.png" width={50} height={50}  alt='facbook' className='h-6 w-6 ' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default FirstSection