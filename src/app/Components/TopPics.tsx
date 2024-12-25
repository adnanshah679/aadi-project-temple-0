import React from 'react'
import TopPicss from '@/app/components/SharedComponents/TopPicss'
const TopPics = () => {
    return (

        <>
            <div className='mt-20 ' >
                <div className='  text-center'>
                    <h1 className="text-4xl font-bold mb-4">Top Pics For You</h1>
                    <p className="text-lg text-gray-600">
                        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
                    </p></div>
            </div>
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

            </div>

            <div className='text-center mt-16'>
                <button className='border-b-2 font-bold p-2 border-black text-lg '>View more</button>

            </div>
        </>

    )
}
export default TopPics