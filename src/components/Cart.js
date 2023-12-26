import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import DeliveryTrack from './DeliveryTrack'
import ClearCart from './ClearCart'



const Cart = () => {

    const cartItems = useSelector((store) => store.cart.item)
    const title = useSelector((store) => store.cart.title)
    // let a = title.splice(1)
    // console.log("let see if the slice works ", a)
    console.log(" this is cartItems data of cart ", cartItems)






    return (<div>

        {
            cartItems.length == 0 ? (<ClearCart />) : (

                <div>

                    <div className='mx-5 flex  h-screen bg-slate-300'>
                        <DeliveryTrack />


                        <CartItems cartItems={cartItems} title={title} />
                    </div>

                </div>

            )
        }

    </div>
    )
}

export default Cart