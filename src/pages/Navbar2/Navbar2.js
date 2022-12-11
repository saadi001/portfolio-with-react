import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
     const menuItems = <>
          <li><a className=''>Home</a></li>          
          <li><a href='#about'>About</a></li>
          <li><a className='mr-3'>Projects</a></li>
          {/* <li><a>Contact</a></li> */}
          <li><p className='bg-teal-400 text-slate-600'>Contact Me</p></li>
          
     </>
     return (
          <div>
              <div className="navbar">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                   {menuItems}
                                   
                              </ul>
                         </div>
                         <Link href='/' className="normal-case text-xs text-slate-200 px-1">sheikh <br /> <span className='text-2xl leading-3 text-teal-200'>saadi</span></Link>
                    </div>
                    {/* large device  */}
                    <div className="navbar-end hidden lg:flex">
                         <ul className="menu menu-horizontal px-1 text-slate-300">
                              {menuItems}
                             
                         </ul>
                    </div>
                    
               </div>
          </div>
     );
};

export default Navbar2;