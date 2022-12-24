import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Projects = () => {
     const [toggleState, setToggleState] = useState(1);
     const [projects, setProjects] = useState([]);

     const toggleTab = (index) => {
          // console.log(index)
          setToggleState(index)
     }

     useEffect(() => {
          fetch('https://portfolio-server-gray.vercel.app/projects')
               .then(res => res.json())
               .then(data => setProjects(data))
     }, [])


     return (
          <div id='project' className='bg-[#121c26]'>
               <div className='container mx-auto '>
                    <h3 className='text-3xl text-slate-300 font-semibold text-center uppercase py-10'>Projects</h3>
                    <div className=''>
                         <div className='flex justify-center gap-5 text-slate-300 uppercase text-sm'>
                              <div onClick={() => toggleTab(1)} className={`${toggleState === 1 ? 'bg-teal-600' : 'bg-slate-700'} px-5 py-2 cursor-pointer rounded-sm`}>All</div>
                              <div onClick={() => toggleTab(2)} className={`${toggleState === 2 ? 'bg-teal-600' : 'bg-slate-700'} px-5 py-2 cursor-pointer rounded-sm`}>Front-End</div>
                              <div onClick={() => toggleTab(3)} className={`${toggleState === 3 ? 'bg-teal-600' : 'bg-slate-700'} px-5 py-2 cursor-pointer rounded-sm`}>FullStack</div>
                         </div>
                         <div className='content-tabs mt-10 flex-grow text-white'>
                              <div className={toggleState === 1 ? 'block pb-14' : 'hidden'}>
                                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5'>
                                        {
                                             projects.map(project => <div key={project.id} className='bg-[#1c2a39] rounded'>
                                                  <div className=''>
                                                       <img src={project.image} alt="" />
                                                  </div>
                                                  <div className='flex justify-between items-center px-3 py-2'>
                                                       <p className=' text-slate-300 '>{project.name}</p>
                                                       <Link to={`project/${project.id}`}><button className='cursor-pointer bg-teal-500 px-4 py-1 rounded'>Details</button></Link>
                                                  </div>
                                             </div>)
                                        }
                                   </div>
                              </div>
                              <div className={toggleState === 2 ? 'block text-center py-5' : 'hidden'}>Comming soon !!</div>
                              <div className={toggleState === 3 ? 'block pb-14 ' : 'hidden'}>
                              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5'>
                                        {
                                             projects.map(project => <div key={project.id} className='bg-[#1c2a39] rounded'>
                                                  <div className=''>
                                                       <img src={project.image} alt="" />
                                                  </div>
                                                  <div className='flex justify-between items-center px-3 py-2'>
                                                       <p className=' text-slate-300 '>{project.name}</p>
                                                       <Link to={`project/${project.id}`}><button className='cursor-pointer bg-teal-500 px-4 py-1 rounded'>Details</button></Link>
                                                  </div>
                                             </div>)
                                        }
                                   </div>
                              </div>
                         </div>                         
                    </div>
               </div>
          </div>
     );
};

export default Projects;