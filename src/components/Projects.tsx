import {useState} from 'react'


const projectsData=[
    {
        id:'wp',
        title:'WordPress Projects',
        projects:[{
            name:"Destination Wedding",
            for:"Created for LPO Holidays Pvt Ltd.",
            img:'/weddingp1.jpg',
            link:'https://lpoeventszoya.free.nf/',
        
        },
    {
        
        name:'LPO B2B Website',
        for: 'Created for LPO Holidays Pvt Ltd.',
        img:'/B2B.png',
        link:'https://lpoholidayscom.rf.gd/'
    },
    {
        
        name:'LPO Holidays Website',
        for: 'Created for LPO Holidays Pvt Ltd.',
        img:'/LPOHolidays.jpeg',
        link:'https://lpoholidays.rf.gd/'
    },
    {
        
        name:'LPO Weddings Website',
        for: 'Created for LPO Holidays Pvt Ltd.',
        img:'/Weddingnew.jpg',
        link:'http://lpoweddings.rf.gd/'
    }
],
    },
    {
        id:'ml',
        title:'Machine Learning Projects',
        projects:[
            {
                name:'Heart Disease Prediction',
                for: 'Academics Project',
                img:'/ML.png',
                link:'#'
            }
        ],
    },
{
    id:'react',
    title:'React JS Projects',
    projects:[
        {
                name:'My Portfolio Website',
                for: 'Project',
                img:'/Portfolio_page.jpeg',
                link:'#'
            }
    ],
},
{
    id:'basic',
    title:'Basic Projects',
    projects:[ {
                name:'Fast Food Online Ordering',
                for: 'Academics Project',
                img:'/basic1.png',
                link:'https://shaikhzoya492.github.io/landingpage/'
            },
         {
                name:'Portfolio Website',
                for: 'Test Project',
                img:'/basic2.png',
                link:'https://shaikhzoya492.github.io/Landing-page/'
            }
        ],
}
]

const Projects=()=>{

    const [activeTab, setActiveTab] = useState(projectsData[0].id);

    const activeProject= projectsData.find(tab=>tab.id===activeTab) ?.projects || [];
    
    const tabClass=(id:String)=>{
        
        const isActive= id==activeTab;
        return ` mt-5  px-5 py-3 rounded-full text-white text-sm font-medium transition-all duration-300 border border-gray-500/50 hover:bg-gray-800   cursor-pointer  whitespace-nowrap   ${isActive ? "bg-blue-400 text-white" : "text-gray-400 hover:bg-gray-800"}`;
    }

    const ProjectCard=({project}: { project: { name: string; for: string; img: string; link: string } })=>(
        <div className=' p-5 mt-8 '>
           <a href={project.link}><img  className='h-40 w-80 xl:h-50 xl:w-170' src={project.img}/></a> 
            <h1 className='text-white font-poppins mt-4 text-lg'>{project.name}</h1>
            <div className='flex justify-between items-center'><p className='text-[#e1e1e1] font-mont text-xs '>{project.for}</p>
            <a href={project.link} className="w-8 h-8 hover:bg-blue-400 rounded-full text-white text-2xl flex items-center justify-center border"> ↗
</a></div>
        </div>
      );

    return(
<div className='flex justify-center items-center min-w-full min-h-full mt-15  lg:p-10 p-8' >
    <div id="project" className='relative -top-200 xl:-top-140' ></div>
     <div className=' w-full flex flex-col justify-center items-center '>
                <h1 className='text-3xl  sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold font-poppins'>Projects</h1>
            <span className="text-xs xl:mt-2 font-poppins font-semibold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block ">Some of My Work</span>
            <div className='w-full flex flex-nowrap space-x-8 overflow-x-auto pb-4 px-4 sm:justify-center'>
                {projectsData.map((tab)=>(

                    <button 
                    key={tab.id}
                    className={tabClass(tab.id)}
                    onClick={()=>setActiveTab(tab.id)}
                    >{tab.title}</button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeProject.length > 0 ? (
                    activeProject.map((project,index)=>(
                        <ProjectCard key={index} project={project}/>
                    ))
                ):(
                <div>
                    <p className="text-gray-400">No projects available for this category yet.</p>
                </div>
            )}
            </div>
</div>
</div>
    );
}

export default Projects;