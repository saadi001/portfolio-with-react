import React, { useState } from 'react';

const Projects = () => {
     const [toggleState, setToggleState] = useState(1);

     const toggleTab = (index) =>{
          console.log(index)
          setToggleState(index)
     }


     return (
          <div id='project' className='bg-[#121c26]'>
               <div className='container mx-auto '>
                    <h3 className='text-3xl text-slate-300 font-semibold text-center uppercase py-10'>Projects</h3>
                    <div className=''>
                         <div className='flex justify-center gap-5 text-slate-300 uppercase text-sm'>
                              <div onClick={()=>toggleTab(1)} className={`${toggleState === 1 ? 'bg-teal-600' : 'bg-slate-700'} px-5 py-2 cursor-pointer rounded-sm`}>All</div>
                              <div onClick={()=>toggleTab(2)} className={`${toggleState === 2 ? 'bg-teal-600' : 'bg-slate-700'} px-5 py-2 cursor-pointer rounded-sm`}>Front-End</div>
                              <div onClick={()=>toggleTab(3)} className={`${toggleState === 3 ? 'bg-teal-600' : 'bg-slate-700'} px-5 py-2 cursor-pointer rounded-sm`}>FullStack</div>
                         </div>
                         <div className='content-tabs mt-10 flex-grow text-white'>
                              <div  className={toggleState===1 ? 'block' : 'hidden'}>tab 1</div>
                              <div className={toggleState===2 ? 'block' : 'hidden'}>tab 2</div>
                              <div className={toggleState===3 ? 'block' : 'hidden'}>tab 3</div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Projects;