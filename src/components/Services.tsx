import react from 'react';

const Services = () =>{
    return(
        <div className='flex justify-center w-full h-full lg:p-10 p-8' >
            <div id="service" className='relative -top-20' ></div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl  sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold font-poppins'>What I Do</h1>
            <span className="text-xs  font-poppins font-semibold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block ">My Services</span>

            <div className=' grid sm:grid-cols-1 xl:grid-cols-3 gap-4 w-auto h-auto  py-10 sm:p-10 '>

                <div className=' bg-[#2b2b2b]  rounded-lg shadow-2xl border border-[#e4e4e4] p-5 '>
                    <img className='h-12 w-12 object-contain' src='/React.png'/>
                 <h1 className="text-md mt-2  xl:text-md text-white  font-poppins">React & Responsive Front-End</h1>
                 <p className='text-[#e1e1e1] font-mont text-sm mt-2'>I build dynamic, modern, and responsive UIs using React.js and JavaScript. I leverage HTML, CSS, Bootstrap, and Tailwind CSS for a high-performance.</p>
                    </div>

                 <div className='bg-[#2b2b2b]  rounded-lg shadow-2xl border border-[#e4e4e4] p-5'>  <img className='h-12 w-12 object-contain' src='/Wordpress.png'/>
                 <h1 className="text-md mt-2  xl:text-md text-white  font-poppins">WordPress Customization & Hosting</h1>
                 <p className='text-[#e1e1e1] font-mont text-sm mt-2'>I provide responsive WordPress solutions, customizing Elementor, plugins, and themes. I manage deployment on reliable hosting like Hostinger.</p>
                    </div>

                  <div className='bg-[#2b2b2b]  rounded-lg shadow-2xl border border-[#e4e4e4] p-5'>  <img className='h-12 w-12 object-contain' src='/MySql.png'/>
                 <h1 className="text-md mt-2  xl:text-md text-white  font-poppins">MySQL Database Design</h1>
                 <p className='text-[#e1e1e1] font-mont text-sm mt-2'>I design and manage robust MySQL solutions, focusing on creating well-structured databases that provide a fast and reliable back-end foundation.</p>
                    </div>


                   <div className='bg-[#2b2b2b]  rounded-lg shadow-2xl border border-[#e4e4e4] p-5 '>  <img className='h-12 w-12 object-contain' src='/VSCode.png'/>
                 <h1 className="text-md mt-2  xl:text-md text-white  font-poppins">Code Quality & VS Code Workflow</h1>
                 <p className='text-[#e1e1e1] font-mont text-sm mt-2'>My development process uses VS Code for a streamlined workflow, ensuring clean, well-documented, and error-free code for higher quality projects.</p>
                    </div>
                    
                    <div className='bg-[#2b2b2b]  rounded-lg shadow-2xl border border-[#e4e4e4] p-5'>  <img className='h-12 w-12 object-contain' src='/Angular.png'/>
                 <h1 className="text-md mt-2  xl:text-md text-white  font-poppins">Basic Angular Framework Knowledge</h1>
                 <p className='text-[#e1e1e1] font-mont text-sm mt-2'>I have foundational knowledge of the Angular framework, which I use to ensure structured and organized code for projects requiring an enterprise framework approach.</p>
                    </div>
                
            </div>

            </div>
            
        </div>
    );
}

export default Services;