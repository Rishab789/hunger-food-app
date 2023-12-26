import React from 'react'
import { IMG_CDN_URL } from '../utils/urls'
import { useState } from 'react';




const CartItems = ({ cartItems, title }) => {

    let [count, setCount] = useState(0)

    const increaseHandler = () => {
        count = count + 1;
        setCount(count)


    }
    const decreaseHandler = () => {
        count = count - 1;
        setCount(count)

    }



    const { name, cloudinaryImageId, city, feeDetails } = title[0]?.cards[0]?.card?.card?.info;


    return (<div className='w-[40%] '>
        <div className='w-[90%] bg-white m-auto  py-5 mt-5 '>
            <header className='mb-2  h-20 shadow-md w-full'>

                <div className='flex gap-5 px-2'>
                    <img src={IMG_CDN_URL + cloudinaryImageId} height={70} width={90} />
                    <div>
                        <p className='font-bold'>{name}</p>
                        <p className='text-xs'>{city}</p>
                    </div>
                </div>
            </header>
            <div className=' h-[290px] overflow-auto mt-5 px-3'>



                {
                    cartItems.map(item => {

                        const { id, name, price } = item?.card?.info;
                        return (
                            <div className=''>



                                <div key={id} className='bg-white mb-5'>


                                    <li className='grid grid-cols-3  justify-between items-center'>
                                        <h3 className='w-[120%] text-xs '>{name}</h3>
                                        <div className='text-end border w-[80%]  ml-10 h-10 flex justify-between items-center'>
                                            <span className='text-2xl pl-2 cursor-pointer text-gray-300' onClick={decreaseHandler}>-</span>
                                            <p className='text-xl'>{count}</p>
                                            <span className='text-2xl pr-2 cursor-pointer text-green-400' onClick={increaseHandler}>+</span>
                                        </div>
                                        <p className='text-end '>&#8377;{price / 100}</p>
                                    </li>


                                </div>

                            </div>



                        )
                    })
                }

                <div className='border border-black mt-14 mb-10'>
                    <p>
                        Opt in for No-contact Delivery</p>
                    <p>
                        Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)
                    </p>

                </div>
                <div className='bg-white flex justify-between'>
                    <div>
                        <p>Bill Details</p>
                        <p>Item Total</p>
                        <p>Delivery Fee | <span>{ }</span></p>
                    </div>
                    <div>
                        <p>{ }</p>
                        <p>&#8377;{feeDetails.fees[1].fee / 100}</p>
                    </div>
                </div>
            </div>

            <div className='px-3'>
                <p>TO PAY</p>
                <p></p>
            </div>



        </div>
    </div>

    )
}

export default CartItems