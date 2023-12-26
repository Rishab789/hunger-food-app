import ReactLogo from '../public/assets/React-logo.jpg'

const Footer = () => {
    return (
        <section className='mb-5 '>
            <div className=" flex items-center justify-center shadow-[5px_5px_0px_0px_rgba(109,40,217)] py-2 w-[95%] m-auto">
                <div>

                    Created By <a href='#' target="_blank" className="text-[#070062] font-bold">Prakash Bera</a> with ❤️ with
                </div>
                <img src={ReactLogo} height={30} width={30} />
            </div>
        </section>
    )
}


export default Footer;