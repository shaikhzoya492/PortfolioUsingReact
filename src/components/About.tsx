import React from "react";

const About =()=>{
    return(
        <div className="flex mt-8 justify-center " >
            <div id="about" className='relative top-10 xl:-top-10' ></div>
            <div className="flex flex-col items-center justify-center  min-h-screen w-[820px] lg:p-10 p-8">
            <h1 className="text-3xl  sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold font-poppins">About Me</h1>
            <span className="text-xs  font-poppins font-semibold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">Get To Know Me</span>
            <span className="text-white text-center mt-10 font-poppins text-sm sm:text-sm xl:text-lg">

                 <p>Hi,
I'm Zoya Shaikh, and I'm a frontend web developer dedicated to turning ideas into creative solutions. I believe in a user-centered approach, specializing in creating seamless and intuitive user experiences that are tailored to meet specific user needs and business objectives.</p>
<br/>
<p> My approach focuses on creating scalable, high-performing solutions, prioritizing performance, accessibility, and responsiveness to deliver experiences that not only engage users but also drive tangible results.</p>


            </span>
               <a  href="https://drive.google.com/drive/folders/1X7TmzWlY_uNtq_UQk6bSPqrgKgCU8wVf" className=" text-white mt-8 border px-8 py-3 border-blue-500 rounded-4xl hover:bg-blue-400 font-mont">Download Resume</a>

            </div>
            
        </div>
    )
}

export default About;
