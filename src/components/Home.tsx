import React from "react";

const Home = ()=>{
    return(
        <div className="flex justify-center  items-center lg:p-10 p-8"   >
          <div id="home" className='relative -top-80' ></div>
<div className="flex justify-center items-center text-white bg-[url('/Rectangle.png')] bg-no-repeat
 min-h-full w-[820px] bg-contain ">
    <div className="flex flex-col items-center justify-start "> 
        <img className="h-58 w-106 object-contain " src="/profile.png" />
  <h1 className="text-white  mt-4 font-bold font-poppins tracking-tighter text-3xl  sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">Zoya Shaikh</h1>
    <span className="xl:mt-2 text-lg sm:text-xl  xl:text-2xl font-poppins font-semibold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">Web Developer</span>
    <p className="mt-2 text-sm sm:text-sm xl:text-lg font-poppins text-center font-normal">I specialize in creating clean, responsive, and user-friendly websites. Whether you’re looking to build a new project from scratch or enhance an existing one, I’m here to bring your ideas to life with modern web technologies.</p>
    <a  href="mailto:shaikhzoya49222@gmail.com" className="mt-8 border px-8 py-3 border-blue-500 rounded-4xl hover:bg-blue-400 font-mont">Contact Me</a>
  </div>
 </div>   
 </div>
) }

export default Home;
