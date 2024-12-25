import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (

        <>
            <footer className="  pt-12 pb-6 px-10 font-sans tracking-wide relative">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex items-center lg:justify-center max-sm:-order-1">
                            <a href='javascript:void(0)'>
                                <p className='text-gray-400'>
                                    400 University Drive Suite 200 Coral Gables,
                                    FL 33134 USA
                                </p>
                            </a>
                        </div>

                        <div>

                            <h2 className=" text-lg  font-semibold text-gray-400 mb-4">Links</h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/" className="  text-sm transition-all">
                                        Home
                                    </Link>
                                </li>
                                <li>  <Link href="/Shop" className="  text-sm transition-all">
                                    Shop
                                </Link></li>
                                <li>
                                    <Link href="/blog" className="  text-sm transition-all">
                                        Blogs
                                    </Link>
                                </li>
                                <li> 
                                     <Link href="/Contact" className="  text-sm transition-all">
                                    Contact
                                </Link>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h2 className="text-gray-400 text-sm uppercase font-semibold mb-4">Help</h2>
                            <ul className="space-y-3">
                                <li>
                                    
                                <Link href="https://www.linkedin.com/in/parvez-ahmed-1604b92b5/" target='_blank' className="  text-sm transition-all">
                                    Linkedin
                                </Link>
                                </li>
                                <li>
                                <Link href="https://github.com/ParvezCoder" target='_blank' className="  text-sm transition-all">
                                    Github
                                </Link>
                                </li>
                                <li>
                                <Link href="https://wa.me/923052887779" target='_blank' className="  text-sm transition-all">
                                Whatsapp                                </Link>
                                
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-gray-400 text-sm uppercase font-semibold mb-4">Newsletter</h2>
                            <ul className="space-y-3">
                                <li>
                                    <a href="javascript:void(0)" className="  text-sm transition-all">About</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="  text-sm transition-all">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="  text-sm transition-all">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <hr className="mt-12 mb-6 border-gray-600" />
                    <p className=' text-lg'>2022 Meubel House. All rights reverved
                    </p>


                </div>
            </footer>
        </>
    )
}

export default Footer