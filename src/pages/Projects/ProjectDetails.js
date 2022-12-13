import React, { useEffect, useState } from 'react';
import {useLoaderData} from 'react-router-dom';

const ProjectDetails = () => {
     const [projectData, setProjectData] = useState();
     const data = useLoaderData();
     console.log(data)

     // useEffect(()=>{
     //      fetch('projectData.json/')
     // },[])
     // console.log(data)
     return (
          <div>
               this is project details page
          </div>
     );
};

export default ProjectDetails;