import React from 'react'
import ComponentsForBlogs from './SharedComponents/ComponentsForBlogs'

const Blogs = () => {
    return (
        <>
            <div className="my-6 font-[sans-serif]">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-gray-800 text-3xl font-extrabold">Our Blogs</h2>
                    <p className="text-gray-800 text-sm mt-4 leading-relaxed">Find a bright idea to suit your test with our great selection</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-md:justify-center text-center mt-12 max-w-6xl max-md:max-w-sm mx-auto" >
                <ComponentsForBlogs images='/BlogImage1.png' />
                <ComponentsForBlogs images='/blogImage2.png' />
                <ComponentsForBlogs images='/BlogImage3.png' />
            </div >
            <div className='text-center mt-10'>
                <button className='border-b-2 font-bold p-2 border-black text-lg '>View more</button>
            </div>
        </>
    )
}

export default Blogs