import React from 'react';
import profile from '../../assset/image/profile.jpeg'

const About = () => {
     return (
          <div className='bg-[#192734]'>
               <h4 className='text-3xl text-center text-slate-300 py-10'>About</h4>
               <div className='max-w-3xl md:mx-auto bg-[#22303C] relative rounded text-center mt-20 mx-3'>
                    <div className="avatar ">
                         <div className="w-32 rounded">
                              <img className='absolute rounded top-[-50%]' src={profile} alt="" />
                         </div>
                    </div>
                    <div className='px-4 md:px-10 mt-[-20px]'>
                         <p className='text-start text-slate-300'>Hi I am sheikh saadi. A Front-End developer from Bangladesh. I love coding, doing creative works, solving problem, building projects. I also love to spend my leisure by reading books and sleeping. I strongly believe, there's no limit of learning!</p>
                         <div className='text-start text-slate-300 mt-3'>
                              <p><span className='text-slate-400'>Email:</span>  sheikhsadi1620@gmail.com</p>
                              <p><span className='text-slate-400'>Phone:</span> +8801836530309</p>
                              <p><span className='text-slate-400'>Adress:</span> Ashulia, Dhaka, Bangladesh</p>
                         </div>
                    </div>

               </div>

          </div>
     );
};

export default About;