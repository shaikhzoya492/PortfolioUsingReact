import react from 'react'

const Contact = () =>{

return(
   
    <div className='flex justify-center min-w-full min-h-full mt-20 lg:p-10 p-8 ' >
         <div id="contact" className='relative -top-25' ></div>
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-3xl  sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold font-poppins'>Get In Touch </h1>
              <span className="text-xs  font-poppins font-semibold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block ">Lets work together</span>
              <div className='mt-10 justify-start '>
                <form action='mailto:shaikhzoya49222@gmail.com' >
                    <p className='text-white'>Name</p>
                    <input name='name' className='border border-[#D6DDED] text-[#D6DDED] w-80 xl:w-140 p-2 rounded-lg mt-2' type='text' placeholder='full name'/>
                     <p className='text-white mt-2'>Email</p>
                    <input name='email' className='border border-[#D6DDED] text-[#D6DDED] w-80 xl:w-140  p-2 rounded-lg mt-2' type='email' placeholder='example@gmail.com'/>
                     <p className='text-white mt-2'>Phone</p>
                    <input name='phone' className='border border-[#D6DDED] text-[#D6DDED] w-80 xl:w-140  p-2 rounded-lg mt-2' type='tel' placeholder='full name'/>
                    <p className='text-white mt-2'>Message</p>
                    <textarea name='message' className='border border-[#D6DDED] text-[#D6DDED] w-80 xl:w-140 h-40 p-2 rounded-lg mt-2'></textarea>                    <p className='flex justify-center bg-white mt-4 rounded-lg hover:bg-[#1A1A1A] hover:text-white hover:border border-[#D6DDED]'>
                      <a href="mailto:shaikhzoya49222@gmail.com " className=' font-poppins p-3 font-semibold  '>Get in Touch</a>
                        </p>
                </form>
              </div>
        </div>
    
    </div>
);
}

export default Contact;