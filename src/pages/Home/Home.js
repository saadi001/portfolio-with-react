import React from 'react';
import About from '../About/About';
import LandingBanner from '../LandingBanner/LandingBanner';
import Navbar2 from '../Navbar2/Navbar2';

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
          </div>
     );
};

export default Home;