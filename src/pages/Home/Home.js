import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import LandingBanner from '../LandingBanner/LandingBanner';
import Navbar2 from '../Navbar2/Navbar2';
import Projects from '../Projects/Projects';

const Home = () => {     
     return (
          <div className=''>
               
               <div className='bg-[#15202B]'>
                    <div className='w-full container mx-auto'>                         
                              <Navbar2></Navbar2>
                              <LandingBanner></LandingBanner>                         
                    </div>
               </div>
               <About></About>
               <Projects></Projects>
               <Contact></Contact>
          </div>
     );
};

export default Home;