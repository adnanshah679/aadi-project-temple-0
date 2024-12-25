'use client'
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

function ShoppingCart() {
    // State to toggle cart visibility
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <div className="relative">
            {/* Cart Icon */}

            <button
                onClick={toggleCart}
                className="text-black p-2  rounded"
                aria-label="Toggle Shopping Cart"
            >
                <AiOutlineShoppingCart aria-label="Shopping Cart" size={23} />
            </button>

            {/* Cart Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${isCartVisible ? 'translate-x-0' : 'translate-x-full'} sm:w-[400px] md:w-[450px] lg:w-[500px]`}
            >
                <div className="p-4 overflow-y-auto h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                        <hr />

                        {/* Cart Items */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <Image
                                        src="/product.png"
                                        height={150}
                                        width={150}
                                        alt="Asgaard Sofa"
                                        className="object-cover"
                                    />
                                    <div className="ml-4 mt-10">
                                        <h3 className="text-lg">Asgaard Sofa</h3>
                                        <p className="my-2 text-lg">1 x <span className="text-yellow-600 text-lg">Rs. 250.000.00</span></p>
                                    </div>
                                </div>
                                <div className="bg-gray-500 h-[30px] w-[30px] text-white rounded-full flex justify-center items-center cursor-pointer">
                                    <span className="p-0.5 text-xl font-medium">x</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section (Subtotal + Buttons) */}
                    <div className="mt-auto">
                        <div className="flex justify-between">
                            <p className='text-lg'>Subtotal</p>
                            <p className="ml-8 my-2 text-lg">1 x <span className="text-yellow-600">Rs. 250.000.00</span></p>
                        </div>
                        <hr />
                        <div className="mt-4 flex justify-around mx-auto gap-4">
                            <Link href='/CartView'>
                                <button className="rounded-full text-black hover:text-white bg-white text-lg hover:bg-gray-800 px-8 py-2 border border-black">
                                    View Cart
                                </button>
                            </Link>
                            <Link href='/Checkout'>
                                <button className="rounded-full text-black hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border text-lg border-black">
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Close Cart Button */}
                <button
                    onClick={toggleCart}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
                    aria-label="Close Cart"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default ShoppingCart;