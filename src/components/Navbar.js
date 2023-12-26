import React, { useContext } from 'react'
import logo from '../public/assets/hunger-logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/userContext'
import { useSelector } from 'react-redux' // importing selector to read redux store data
// import cartSlice from '../utils/cartSlice'

const Navbar = () => {
    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.item);
    console.log(cartItems)



    const [btn, setBtn] = useState("Login");
    const onlineStatus = useOnlineStatus()
    return (
        <div className=' w-full sticky top-0 z-10  shadow-md'>
            <div className='bg-white flex justify-around items-center border cursor-pointer'>
                <div>
                    <Link to='/'><img className='hover:scale-105 duration-500' src={logo} width={100} height={100}></img></Link>
                </div>
                <div>
                    <nav>
                        <ul className='flex gap-12 '>
                            <li className='hover:text-orange-500 transition'><Link to='/'>Home</Link></li>
                            <li className='hover:text-orange-500'><Link to='/about'>About</Link></li>
                            <li className='hover:text-orange-500'><Link to='/contact'>Contact</Link></li>
                            <li className='hover:text-orange-500'><Link to='/blog'>blog</Link></li>

                            <li className='hover:text-orange-500 relative'><Link to='/cart'><i class="fa-solid fa-cart-shopping text-lg mr-3"></i>{cartItems.length > 0 ? (<span className='absolute top-[-15px] right-[-10px] text-sm h-6 w-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl text-center text-white bg-lime-500 '>{cartItems.length}</span>) : <span className='absolute top-[-15px] right-[-10px] text-sm h-6 w-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl text-center '>0</span>}</Link></li>

                            {/* <span className='absolute top-[30px] text-sm'>{cartItems.length}</span> */}
                            {/* <i class="fa-solid fa-cart-shopping"></i> */}

                            <li className='font-bold'>{loggedInUser}</li>

                        </ul>
                    </nav>
                </div>
                <div className='flex gap-5 cursor-pointer'>

                    <span className="bi bi-person-fill"></span>

                    <Link to='/login'> <button className=' text-black  px-4 py-2 text-sm font-bold' >Login{onlineStatus ? '🟢' : '🔴'}</button></Link>
                </div>

            </div>

        </div>
    )
}

export default Navbar


// onClick={() => {
//     if (btn == "Login") {
//         setBtn("Logout")
//     }
//     else {
//         setBtn('Login')
//     }

// }}