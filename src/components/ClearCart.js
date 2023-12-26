import React from 'react'
import EmptyCart from '../public/assets/empty-cart.avif'

const ClearCart = () => {
    return (
        <div className=' w-full flex flex-col justify-center items-center' >
            <div className='mt-16 mb-10 '>

                <img src={EmptyCart} width={300} height={300}></img>
            </div>
            <h3 className='text-lg font-medium text-gray-600 mb-1'>Your cart is empty</h3>
            <h6 className='text-gray-400 mb-2'>You can go to home page to view more restaurants</h6>
            <div className=''>
                <button className='px-5 py-3 bg-orange-500 text-white'>See Restaurants Near You</button>
            </div>

        </div>
    )
}

export default ClearCart