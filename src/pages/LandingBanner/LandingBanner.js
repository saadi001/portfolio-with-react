import React from 'react';

import avatar from '../../assset/image/dev-ed-wave.png'

const LandingBanner = () => {
     return (
          <div className='container h-screen flex items-center justify-between mx-2'>
               <div className=' px-3'>
                    <p className='text-slate-200 text-lg font-semibold uppercase mb-3'>Hi! I am</p>
                    <p className='text-6xl uppercase text-teal-300'>Sheikh saadi</p>
                    <p className='text-slate-400 text-2xl '>FrontEnd Web Developer</p>
                    <button  className='border border-teal-400 hover:bg-teal-400 hover:text-slate-700 text-slate-300 px-4 py-2 rounded-md mt-5 text-base uppercase'><a target='_blank' href="https://drive.google.com/file/d/1nKl4X7Qz6rqEhJUdaTN1x3BKefemv437/view?usp=sharing">Resume</a></button>
               </div>
               <div className='w-[50%] border border-none rounded-[50%] hidden md:block'>
                    <img className='rounded-[50%]' src={avatar} alt="" />
               </div>
          </div>
     );
};

export default LandingBanner;