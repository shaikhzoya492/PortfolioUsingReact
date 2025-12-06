import react, { useState } from 'react'

const Navbar =() =>{

 const [isOpen, setIsOpen]=useState(false);
return(
<div className="sticky w-full top-0 z-10 bg-[#1A1A1A] py-3 px-5 flex items-center justify-between text-white ">
  <div className='font-oleo text-4xl bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block'>Zoya</div>
  <div>
    <ul className='hidden sm:flex gap-10 font-mont text-lg '>
        <li className='hover:text-blue-300'><a href="#home">Home</a></li>
        <li className='hover:text-blue-300'><a href="#about">About</a></li>
        <li className='hover:text-blue-300'><a href="#project">Projects</a></li>
        <li className='hover:text-blue-300'><a href="#service">Services</a></li>
        <li className='hover:text-blue-300'><a href="#about">Resume</a></li>
    </ul>
      <div className='flex lg:hidden md:hidden xl:hidden text-2xl border-2  border-white px-2 py-1 rounded-lg' onClick={()=>setIsOpen(!isOpen)}> {isOpen? '✕':'☰'}</div>
  </div>
  <div className='hidden sm:flex font-mont hover:border-blue-300 border px-3 py-2 rounded-lg items-center text-lg '><a href="#contact">Contact Me</a></div>
  { isOpen && (
    <div className='absolute top-full right-0 w-50 border border-sm border-[#D6DDED] bg-[#1A1A1A] sm:hidden'>
          <ul className='flex flex-col items-center gap-4 py-4 font-mont text-lg'>
            <li className='hover:text-blue-300'><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li className='hover:text-blue-300'><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li className='hover:text-blue-300'><a href="#project" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li className='hover:text-blue-300'><a href="#service" onClick={() => setIsOpen(false)}>Services</a></li>
            <li className='hover:text-blue-300'><a href="#about" onClick={() => setIsOpen(false)}>Resume</a></li>
            <li className='hover:text-blue-300'><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>

          </ul>
        </div>
  )
  }
</div>

);}

export default Navbar;
