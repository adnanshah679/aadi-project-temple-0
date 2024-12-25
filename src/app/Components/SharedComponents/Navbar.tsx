"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image"
import Link from "next/link";
import { useState } from 'react';
import ShoppingCart from "@/app/Components/Cart";

// edit block

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className=''>
      <div className='w-full flex items-center justify-center  h-[70px]'>
        {/* all content */}
        <div className='sm:w-full md:w-[80%] flex items-center justify-between h-[50px]'>

          <div>
            {/* logo */}
            <h1 className='sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ml-1'></h1>
          </div>

          {/* links - animated sliding nav */}
          <div
            className={`${open ? "translate-x-0" : "-translate-x-full"
              } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className='flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-sm md:text-md lg:text-xl xl:text-md text-white md:text-black '>
              <li className='p-4 hover:underline underline-offset-2 '>
                <Link href="/">Home</Link>
              </li>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/Shop">Shop</Link>
              </li> <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/Blog2">Blog</Link>
              </li>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className='flex gap-x-4 items-center font-bold text-3xl'>
            <Link href="/Account" className='p-2'>
              <Image src="/userIcon.png" alt='user icon' height={200} width={200} className='h-5 w-5' />
            </Link>
            {/* Search bar - hidden on small screens */}
            <FontAwesomeIcon
              icon={faSearch}
              className="text-xl ml-2"
            />
            {/* Icons */}
            <Image src="/heartIcon.png" alt='user icon' height={200} width={200} className='h-5 w-5' />
            <ShoppingCart/>
            
            {/* Toggle Button for mobile */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Header;