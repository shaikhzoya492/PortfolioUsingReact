import react from 'react'

const Footer =()=>{
    return(
        <div className='flex flex-col  lg:p-10 p-8'>
        <div className='flex justify-between xl:mt-10'>
            <h1 className='text-sm  sm:text-md md:text-3xl lg:text-4xl xl:text-5xl text-white  font-poppins'>Let’s <br/>Work Together - </h1> 
<div className='flex justify-center items-center  ' > 
    <div className=' flex space-x-2 px-2 py-1 xl:px-4 xl:py-2 border border-[#484E53] rounded-lg '>    <img className='w-4 h-4 xl:w-6 xl:h-6' src='Gmail.png'/><a href="mailto:shaikhzoya49222@gmail.com" className='text-white hover:text-blue-400 xl:text-[16px] text-[11px] '>shaikhzoya49222@gmail.com</a></div>
</div>
           
        </div>
        <div className='flex xl:flex-row flex-col items-center border-t justify-between text-[#484E53] mt-10 px-5'>
            <div className='mt-8 text-[#A9A9A9] text-sm'>© 2026 All rights reserved.</div>
            <div className='mt-4  xl:mt-8 flex space-x-4 '>
            <a href='https://www.linkedin.com/in/shaikhzoya492/'><img className='w-8 h-8' src='LIN.png'/></a>
                       <a href='https://github.com/shaikhzoya492'><img className='w-8 h-8' src='Insta.png'/></a>
 
            
           </div>
           </div>
        </div>
    );
}

export default Footer;