import { faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Navbar from "@/app/components/SharedComponents/Navbar"
import Header2 from '../components/SharedComponents/Header2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "@/app/components/SharedComponents/Footer"
import FreeDelieveryComponents from '../components/SharedComponents/FreeDelieveryComponents';

const Contact = () => {
    return (

        <>
            <Navbar />
            <Header2 heading="Contact" text='Contact' />
            <div className='mt-20 flex justify-center ' >

                <div className='  text-center'>
                    <h1 className="md:text-4xl font-bold mb-4 text-2xl">Get In Touch With Us</h1>
                    <p className="text-lg text-gray-600 w-[290px] lg:w-[700px]  text-center">
                        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>
            </div>
            <div className="font-[sans-serif] max-w-6xl max-lg:max-w-3xl mt-10 mx-auto p-4">
                <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded p-8">
                    <div className="grid lg:grid-cols-2 items-start gap-12">
                        <div className=" sm:grid-cols-2 space-y-12  gap-12">
                            <div className="flex items-start bg-white">
                                <div className="shadow-[0_0px_2px_0px_rgba(6,81,237,0.3)] rounded px-3 py-2">
                                    <FontAwesomeIcon icon={faLocationDot} className='h-6 w-6' />
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-xl font-bold">Address</h4>
                                    <p className="text-sm text-gray-500 mt-1 w-40"> 236 5th SE Avenue, New York NY10000, United States</p>
                                </div>
                            </div>
                            <div className="flex items-start bg-white">
                                <div className="shadow-[0_0px_2px_0px_rgba(6,81,237,0.3)] rounded px-3 py-2">
                                    <FontAwesomeIcon icon={faPhone} className='h-6 w-6' />
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-gray-800 text-base font-bold">Phone</h4>
                                    <p className="text-sm text-gray-500 mt-1 w-40"> Mobile: +(84) 546-6789
                                        Hotline: +(84) 456-6789</p>
                                </div>
                            </div>

                            <div className="flex items-start bg-white">
                                <div className="shadow-[0_0px_2px_0px_rgba(6,81,237,0.3)] rounded px-3 py-2">
                                    <FontAwesomeIcon icon={faClock} className='h-6 w-6' />
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-gray-800 text-base font-bold">Working Time</h4>
                                    <p className="text-sm text-gray-500 mt-1 w-40"> Monday-Friday: 9:00 - 22:00
                                        Saturday-Sunday: 9:00 - 21:00</p>
                                </div>
                            </div>
                        </div>
                        <form className="space-y-3 text-gray-800">
                            <label>Name</label>
                            <input type='text' placeholder='Name'
                                className="w-full border-2 rounded py-3 px-6 text-sm focus:bg-transparent focus:outline-blue-600" />
                            <label>Email Address</label>

                            <input type='email' placeholder='Email'
                                className="w-full border-2 rounded py-3 px-6 text-sm focus:bg-transparent focus:outline-blue-600" />
                            <label>Subject</label>

                            <input type='email' placeholder='Phone No.'
                                className="w-full border-2 rounded py-3 px-6 text-sm focus:bg-transparent focus:outline-blue-600" />
                            <label>Message</label>

                            <textarea placeholder="i have like about message " rows={6}
                                className="w-full border-2 rounded px-6 text-sm pt-3 focus:bg-transparent focus:outline-blue-600"></textarea>
                            <button type='button'
                                className="rounded-md border text-sm px-12 py-2 !mt-6">
                                Submit</button>
                        </form>


                    </div>
                </div>
            </div>
            <FreeDelieveryComponents/>
            <Footer />

        </>

    )
}

export default Contact