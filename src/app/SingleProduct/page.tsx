import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import Navbar from "@/app/components/SharedComponents/Navbar"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FirstSection from '../components/singleProductData/FirstSection';
import SecondSection from '../components/singleProductData/SecondSection';
import ThirdSection from '../components/singleProductData/ThirdSection';
import Footer from '../components/SharedComponents/Footer';

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <div className='ml-2 md:ml-6 lg:ml-32'>

        <div className="flex items-center space-x-6 mt-10">
          <p>Home</p>
          <FontAwesomeIcon icon={faGreaterThan} className='h-3  ml-1 w-4 font-normal' />
          <p>Shop</p>
          <FontAwesomeIcon icon={faGreaterThan} className='h-3  ml-1 w-4 font-normal' />
          <div>
            |
          </div>
          <p className='font-semibold'>Asgaard Sofa</p>
        </div>

        <FirstSection />
      </div>
      <SecondSection />
      <ThirdSection/>
      <Footer/>

    </>
  )
}

export default SingleProduct