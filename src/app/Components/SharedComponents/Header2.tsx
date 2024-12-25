
import React from 'react';import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons"; // Corrected this import
import Link from 'next/link';

const Header2 = (props: { heading: string, text: string }) => {
  return (
    <>
      <FontAwesomeIcon icon={faGreaterThan} />
  
      <div
        style={{ backgroundImage: "url('/shop2.png')" }}
        className="h-[300px] w-full bg-cover bg-center flex items-center justify-center"
      >
        <div className="text-center">
          <Image
            src="/small.png"
            alt="shop"
            width={300}
            height={300}
            className="h-24 w-24 mx-auto"
          />
          <h2 className="text-5xl font-bold">{props.heading}</h2>
          <div className='flex items-center justify-center'>
            <h2 className=" mt-4 text-xl font-semibold">Home</h2>
            <FontAwesomeIcon icon={faGreaterThan} className='h-4 mt-4 ml-1 w-4 font-normal' />
            <p className='mt-4 ml-2'>{props.text}</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;