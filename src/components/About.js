import BurgerImage from '../public/assets/burger-image.png'
import myPic from '../public/assets/myPortfolioPic.png'
import { useState } from 'react'


const About = () => {

    const [visible, setVisible] = useState(true)




    function toggleProfile() {
        setVisible(!visible)
    }


    return (
        <section>
            <div className='flex justify-center mt-2'>
                <button onClick={toggleProfile} className='bg-[#e67e22] text-white px-2 py-2 rounded-md font-bold w-[10%] mb-5 '>{
                    visible ? "show Profile" : "Hide Profile"

                }</button>
            </div>

            <div className={visible ? 'hidden' : 'mt-5 mb-6 flex flex-col items-center'}>
                <div className='flex flex-col justify-center items-center   w-[40%] m-auto shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                    <p className='text-3xl font-bold'>About Me</p>
                    <img src={myPic} height={500} width={500} />
                    <p className='text-stone-800 mb-5'>React.js | Javascript | Frontend Developer</p>
                    <div className='mb-5 cursor-pointer'>
                        <i className="fa-brands fa-linkedin mr-2 text-4xl hover:text-orange-500"></i>
                        <i className="fa-brands fa-github mr-2 text-4xl hover:text-orange-500"></i>
                        <i className="fa-solid fa-envelope text-4xl hover:text-orange-500"></i>
                    </div>
                </div>



            </div>
            <div className='mt-5 '>

                <div className='flex justify-center items-center gap-5'>
                    <div className='w-1/2'>
                        <p className='text-7xl font-bold mb-2 leading-relaxed text-neutral-600  '>Welcome to<br></br>
                            The world of</p>
                        <p className='text-7xl font-bold  rounded-2xl py-5 text-center bg-[#d35400] text-white'>Tasty & Fresh Food</p>
                        <p className="
                        italic text-2xl">"Better you will feel if you eat a <span className='text-[#d35400]'>H</span>unger healthy meal"</p>
                    </div>
                    <div className=''>
                        <img src={BurgerImage} />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About;