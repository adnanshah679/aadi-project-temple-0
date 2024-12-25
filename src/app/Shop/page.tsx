import TopPicss from '@/app/components/SharedComponents/TopPicss'
import Navbar from "@/app/components/SharedComponents/Navbar"
import React from 'react';
import Footer from '../components/SharedComponents/Footer';
import Header2 from '../components/SharedComponents/Header2';
import FreeDelieveryComponents from '../components/SharedComponents/FreeDelieveryComponents';

const Shop = () => {
    return (
        <>
            <Navbar />
            <Header2 heading="Shop" text="shop" />
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center space-x-9'>
                <TopPicss
                    name="Trenton Modular Sofa_3"
                    image="/TrentonSofa.png"
                    price="25,000.00"
                />

                <TopPicss
                    name="Granite Dining table with Dining chair"
                    image="/diningTable.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Outdoor Table bar and Stool"
                    image="/OutdoorBarTable.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/PlanMirror.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/coffeeTable.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/coffeeTable2.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/coffeeTable3.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/coffeeTable4.png"
                    price="25,000.00"
                />

                <TopPicss
                    name="Plan console with teak mirror"
                    image="/bellachair.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/bellachair2.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/bellachair3.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/bella4.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/Table.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/AsgaardSofa.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/Soofa.png"
                    price="25,000.00"
                />
                <TopPicss
                    name="Plan console with teak mirror"
                    image="/set.png"
                    price="25,000.00"
                />



            </div>
            <div className='mt-10'>

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

export default Shop;