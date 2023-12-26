import React from 'react'
import { useState } from 'react';

const Login = () => {

    const [valid, setValid] = useState(false)
    const [showError, setShowError] = useState(document.querySelector('input'))

    function submitHandler(e) {
        e.preventDefault();
    }

    function loginHandler() {
        setShowError(!showError)

    }

    return (
        <section>
            <div className='mt-10 mb-14 flex justify-center items-center'>
                <form onSubmit={submitHandler} className='flex flex-col   items-center w-[25%] h-[60%] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <p className='text-center text-4xl mt-10 mb-7 text-[#f1c40f]'>Login</p>
                    <div className='  w-full mb-5   text-center'>

                        <input type='text' placeholder='Enter your email' className='p-2  rounded-md  shadow-[inset_-12px_-8px_40px_#46464620] w-[90%] ' />
                        <p className={showError.value == " " ? 'text-xs text-start ml-5 text-red-600' : 'hidden'}>Email is required</p>
                    </div>

                    <div className='w-full mb-5 text-center'>

                        <input type='text' placeholder='Enter your password' className=' p-2  rounded-md shadow-[inset_-12px_-8px_40px_#46464620] w-[90%]' />
                        <p className='text-xs text-start ml-5 text-red-600'>password is required</p>
                    </div>


                    <button className=' py-3 bg-[#f1c40f] text-white font-bold px-2 m-2  text-sm rounded-md w-[90%]' onClick={loginHandler}>LOGIN</button>
                </form>
            </div>
        </section>
    )
}

export default Login

// {showError ? (<p className='text-red text-xs font-bold'>Email is required</p>) : (<p></p>)}
