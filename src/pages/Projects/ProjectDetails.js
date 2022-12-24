import React, { useEffect, useState } from 'react';
import {useLoaderData} from 'react-router-dom';
import Navbar2 from '../Navbar2/Navbar2';

const ProjectDetails = () => {
    
     const project = useLoaderData();
     const {name,image,} = project;
     console.log(name )
     return (
          <div>
               <div className='bg-[#15202B] min-h-screen'>
                    <div className='w-full container mx-auto'>                         
                              <Navbar2></Navbar2>
                              <div className='flex'>
                                   <div><img src={image} alt="" /></div>
                                   <div>{name}</div>
                              </div>
                    </div>
               </div>
          </div>
     );
};

export default ProjectDetails;