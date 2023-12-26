import ContactImage from '../public/assets/5124556.jpg'

const Contact = () => {

    return (
        <section className='mb-20'>
            <div className=' flex justify-center items-center gap-72'>
                <div>
                    <img src={ContactImage} height={350} width={350} />

                </div>
                <div className=''>
                    <p className='text-center text-5xl font-bold text-neutral-600 '>Contact Us</p>
                    <form className='flex flex-col justify-center items-center mt-5'>

                        <input type='text' placeholder=' Name' className='border border-orange-600 w-[200%] py-2 mb-2 rounded-md' />
                        <input type='email' placeholder=' Email' className='border border-orange-600 w-[200%] py-2 mb-2 rounded-md' />
                        <textarea rows="3" cols="35" placeholder=' Type your Message here...' className='border border-orange-600 w-[200%] rounded-md mb-5' />
                        <button className=' bg-[#e9944b] hover:bg-[#9c6d43] text-white px-4 py-2 rounded-md font-bold'>Submit</button>
                    </form>

                </div>

            </div>
        </section>
    )

}
export default Contact