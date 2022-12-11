import React from 'react';
import profile from '../../assset/image/profile.jpeg'
import facebook from '../../assset/icons/icons8-facebook.svg';
import github from '../../assset/icons/icons8-github.svg';
import linkedIn from '../../assset/icons/icons8-linkedin-circled.svg';
import html from '../../assset/icons/icons8-html-5-48.png'
import css from '../../assset/icons/icons8-css3.svg'
import javascript from '../../assset/icons/icons8-javascript.svg'
import bootstrap from '../../assset/icons/icons8-bootstrap.svg'
import tailwind from '../../assset/icons/icons8-tailwindcss.svg'
import react from '../../assset/icons/icons8-react-native.svg'
import api from '../../assset/icons/icons8-api-64.png'
import es6 from '../../assset/icons/es6.svg'
import node from '../../assset/icons/icons8-node-js.svg'
import express from '../../assset/icons/icons8-express-js.svg'
import mongodb from '../../assset/icons/icons8-mongodb.svg'
import jwt from '../../assset/icons/icons8-json-web-token.svg'
import tanstack from '../../assset/icons/tanstack.png'
import firebse from '../../assset/icons/icons8-firebase.svg'
import materialUi from '../../assset/icons/icons8-material-ui.svg'
import nextJs from '../../assset/icons/icons8-next.js.svg'
import redux from '../../assset/icons/icons8-redux.svg'
import git from '../../assset/icons/icons8-git.svg'
import figma from '../../assset/icons/icons8-figma.svg'
import vscode from '../../assset/icons/icons8-visual-studio.svg'
import chrome from '../../assset/icons/icons8-chrome.svg'
import netlify from '../../assset/icons/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-48.png'



const About = () => {
     return (
          <div id='about' className='bg-[#192734] pb-12'>
               <h4 className='text-3xl text-center text-slate-300 py-10 uppercase'>About</h4>
               <div className='max-w-3xl md:mx-auto bg-[#22303C] relative rounded text-center mt-20 mx-3'>
                    <div className="avatar ">
                         <div className="w-32 rounded">
                              <img className='absolute rounded top-[-50%]' src={profile} alt="" />
                         </div>
                    </div>
                    <div className='px-4 pb-4 md:px-10 mt-[-20px]'>
                         <p className='text-start text-slate-300 font-serif'>Hi I am sheikh saadi. A Front-End developer from Bangladesh. I love coding, doing creative works, solving problem, building projects. I also love to spend my leisure time by exploring new technology and reading books . I strongly believe, there's no limit of learning!</p>
                         <div className='text-start text-slate-300 mt-3'>
                              <p><span className='text-slate-400'>Email:</span> sheikhsadi1620@gmail.com</p>
                              <p><span className='text-slate-400'>Phone:</span> +8801836530309</p>
                              <p><span className='text-slate-400'>Adress:</span> Ashulia, Dhaka, Bangladesh</p>
                         </div>
                         <div className='flex gap-8 py-5 text-slate-500 justify-center'>
                              <a href="https://github.com/saadi001"><img  src={github} alt="" /></a>
                              <a href="https://www.facebook.com/sheikhsadishuvo.1620/"><img src={facebook} alt="" /></a>
                              <a href="https://www.linkedin.com/in/sekh-saadi-itm/"><img src={linkedIn} alt="" /></a>
                         </div>
                         <div className='text-start'>
                              <p className='text-start text-slate-200 uppercase text-xl'>skills</p>
                              <div>
                                   <p className='text-slate-300 mt-4'>Expertise</p>
                                   <div className='grid grid-cols-5 gap-4 md:grid-cols-8 '>
                                        <img src={html} alt="" />
                                        <img src={css} alt="" />
                                        <img src={bootstrap} alt="" />
                                        <img className='h-12 w-12' src={tailwind} alt="" />
                                        <img src={javascript} alt="" />
                                        <img className='h-12 w-12' src={api} alt="" />
                                        <img src={react} alt="" />
                                        <img className='h-12 w-11' src={es6} alt="" />
                                   </div>
                                   <p className='text-slate-300 mt-4'>Comfortable</p>
                                   <div className='grid grid-cols-5 gap-4 md:grid-cols-8'>
                                        <img src={node} alt="" />
                                        <img src={express} alt="" />
                                        <img src={mongodb} alt="" />
                                        <img src={jwt} alt="" />                                   
                                        <img src={firebse} alt="" />                                   
                                        <img className='h-12 w-11 object-cover' src={tanstack} alt="" />                                        
                                   </div>
                                   <p className='text-slate-300 mt-4'>Familiar</p>
                                   <div className='grid grid-cols-5 gap-4 md:grid-cols-8'>
                                        <img src={materialUi} alt="" />
                                        <img src={redux} alt="" />
                                        <img src={nextJs} alt="" />
                                                                                
                                   </div>
                                   <p className='text-slate-300 mt-4'>Tools</p>
                                   <div className='grid grid-cols-5 gap-4 md:grid-cols-8 mb-4'>
                                        <img src={git} alt="" />
                                        <img className='h-12 w-11 object-cover' src={github} alt="" />
                                        <img src={netlify} alt="" />
                                        <img src={figma} alt="" />
                                        <img src={vscode} alt="" />
                                        <img src={chrome} alt="" />                                        
                                                                                
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>

          </div>
     );
};

export default About;