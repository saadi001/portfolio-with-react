import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
     return (
          <div>
               <section id='contact' className="bg-[#15202B]">
                    <div className="container px-6 py-12 mx-auto">
                         <h3 className='text-slate-300 text-3xl uppercase text-center font-semibold hidden md:block'>Contact</h3>
                         <div className="lg:flex lg:items-center lg:-mx-6">
                              <div className="lg:w-1/2 lg:mx-6">
                                   <h1 className="text-2xl font-semibold text-slate-300 capitalize dark:text-white lg:text-3xl">
                                        Contact me for <br /> more info
                                   </h1>

                                   <div className="mt-6 space-y-8 md:mt-8">
                                        <p className="flex items-start -mx-2">
                                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-teal-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                             </svg>

                                             <span className="mx-2 text-slate-400 truncate w-72  dark:text-gray-400">
                                                  Khagan, Ashulia, Dhaka, Bangladesh
                                             </span>
                                        </p>

                                        <p className="flex items-start -mx-2">
                                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-teal-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                             </svg>

                                             <span className="mx-2 text-slate-400 truncate w-72 dark:text-gray-400">+8801836530309</span>
                                        </p>

                                        <p className="flex items-start -mx-2">
                                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-teal-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                             </svg>

                                             <span className="mx-2 text-slate-400 truncate w-72 dark:text-gray-400">sheikhsadi1620@gmail.com</span>
                                        </p>
                                   </div>

                              </div>

                              <div className="mt-8 lg:w-1/2 lg:mx-6">
                                   <div
                                        className="w-full px-8 py-10 mx-auto overflow-hidden bg-[#22303C] rounded-lg shadow-sm dark:bg-gray-900 lg:max-w-xl shadow-gray-200/50 dark:shadow-black/50">
                                        <h1 className="text-lg font-medium capitalize text-slate-300">Send Me Email</h1>

                                        <form className="mt-6">

                                             <div className="flex-1 mt-6">
                                                  {/* <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label> */}
                                                  <input type="email" placeholder="Email Adress" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-900 border border-none rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-teal-400 dark:focus:border-blue-400 focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                             </div>

                                             <div className="w-full mt-6">
                                                  {/* <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label> */}
                                                  <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-900 border-none rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-teal-400 dark:focus:border-blue-400 focus:ring-teal-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                             </div>

                                             <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 uppercase">
                                                  Send
                                             </button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='container md:mx-auto h-[1px] border-b-[1px] border-slate-400 mx-4 '>

                    </div>
                    {/* footer  */}
                    <footer class=" dark:bg-gray-900">
                         <div class="container flex flex-col items-center justify-center p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                              <Link href='/' className="normal-case text-xs text-slate-200 px-1 mr-5">sheikh <br /> <span className='text-2xl leading-3 text-teal-200'>saadi</span></Link>

                              <p class="text-sm text-gray-400 dark:text-gray-300">?? Copyright 2023. All Rights Reserved.</p>

                         </div>
                    </footer>
               </section>
          </div>
     );
};

export default Contact;