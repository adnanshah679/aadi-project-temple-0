
import Image from 'next/image';
import React from 'react';
import Navbar from "@/app/components/SharedComponents/Navbar";
import Header2 from "@/app/Components/SharedComponents/Header2";
import Footer from "@/app/Components/SharedComponents/Footer";
import LastBlogs from "@/app/Components/SharedComponents/LastBlog";
import SmallBlogs from "@/app/Components/SharedComponents/SmallBlogs";
import FreeDelieveryComponents from "@/app/Components/SharedComponents/FreeDelieveryComponents";

const Blogg = () => {
  return (
    <>
      <Navbar />
      <Header2 heading="Blog" text="blog" />
      <div className='lg:flex md:px-16  lg:px-32 py-2  md:py-6 lg:py-16 px-2 space-x-16    '>
        <div className='space-y-7'>
          <LastBlogs
            image="/blog.png"
            heading="Going all-in with millennial design"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum"
          />
          <LastBlogs
            image="/blog2.png"
            heading="Exploring new way of decorating"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum"
          />
          <LastBlogs
            image="/blog3.png"
            heading="Handmade pieces thatlook time to make"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum"
          />
        </div>
        <div className=' w-1/3 '>
          <div>
            <div className='w-[300px] -ml-8 my-10 md:my-10 md:ml-0 lg:w-[370px] border-gray-300 border rounded-xl p-2 flex justify-end'>
              <Image src="/searchIcon.png" alt='search' width={200} height={200} className='h-6 w-6 ' />
            </div>
            <div className='mt-10 ml-8'>
              <h2 className='text-2xl font-bold'>Categories</h2>
              <div className='flex justify-between mt-6 w-48 lg:w-80 text-gray-500'>
                <p>Crafts</p>
                <p>2</p>
              </div>

              <div className='flex justify-between mt-6 w-48 lg:w-80 text-gray-500'>
                <p>Design</p>
                <p>8</p>
              </div>

              <div className='flex justify-between mt-6 w-48 lg:w-80 text-gray-500'>
                <p>Handmate</p>
                <p>7</p>

              </div>
              <div className='flex justify-between mt-6 w-48 lg:w-80 text-gray-500'>
                <p>Crafts</p>
                <p>2</p>
              </div>

              <div className='flex justify-between mt-6 w-48 lg:w-80 text-gray-500'>
                <p>Interior</p>
                <p>1</p>
              </div>

              <div className='flex justify-between mt-6 w-48 lg:w-80 text-gray-500'>
                <p>Wood</p>
                <p>6</p>
              </div>
            </div>
          </div>
          <div className='mt-28 ml-8'>
            <h2 className='text-xl lg:text-2xl font-semibold w-48 lg:font-bold'>Recent post</h2>
            <div className='space-y-8'>
              <SmallBlogs heading="Going all-in with millennial Design" image="/side.png" />
              <SmallBlogs heading="Exploring new way of Decorating" image="/side2.png" />
              <SmallBlogs heading="Handmade pieces that took time to make" image="/side3.png" />
              <SmallBlogs heading="Modern home in milan" image="/side4.png" />
              <SmallBlogs heading="colorful office redesign" image="/side5.png" />


            </div>
          </div>
        </div>
      </div>  <div className='mt-10'>

        <ul className="flex space-x-5 justify-center font-[sans-serif]">
          <li
            className="flex items-center justify-center shrink-0 bg-[#FBEBB5]  border hover:border-blue-500 border-blue-500 cursor-pointer  font-bold  p-[22px] h-9 rounded-md">
            1
          </li>
          <li
            className="flex items-center justify-center shrink-0 border  hover:border-blue-500 cursor-pointer text-base font-bold text-gray-800 p-[22px] h-9 rounded-md">
            2
          </li>
          <li
            className="flex items-center justify-center shrink-0 border hover:border-blue-500 cursor-pointer text-base font-bold text-gray-800 p-[22px] h-9 rounded-md">
            3
          </li>
          <li
            className="flex items-center justify-center shrink-0 border hover:border-blue-500 cursor-pointer text-base font-bold text-gray-800 p-[22px] h-9 rounded-md">
            Next
          </li>
        </ul>

      </div>
     <FreeDelieveryComponents/>
      <Footer />

    </>
  );
};

export default Blogg;