
import {useLoaderData} from 'react-router-dom';
import TechnologyDetail from './TechnologyDetail';

const ProjectDetails = () => {
    
     const project = useLoaderData();
     const {name,image,details,shortDescription,technology} = project;
     console.log(project )
     return (
          <div>
               <div className='bg-[#15202B] min-h-screen'>
                    <div className='w-full container mx-auto py-6 md:py-10 px-4'>                                                       
                              <div className='flex flex-col pb-5'>
                                   <div className='text-teal-500 text-3xl md:text-5xl pb-4 font-semibold font-mono'>{name}</div>
                                   <div><img className='w-full md:w-1/2 rounded-md' src={image} alt="" /></div>
                              </div>
                              <div className='w-full md:w-1/2 flex justify-between items-center flex-wrap'>
                                   <p className='text-teal-500 text-2xl mb-3'>Overview: </p>
                                   <p className='text-slate-200'>-{shortDescription}</p>
                              </div>
                              <div className='mt-5'>
                                   <p className='text-teal-500 text-2xl mb-3'>Features:</p>
                                   {
                                        details.map((detail,i) => <li key={i} className='text-slate-200 pl-2'>{detail.option}</li>)
                                   }
                              </div>
                              <div className='my-5'>
                                   <p className='text-teal-500 text-2xl'>Technology used:</p>
                                   <div className='grid grid-cols-1 md:grid-cols-2  gap-5 mt-4'>
                                       {
                                        technology.map((tech,i) => <TechnologyDetail
                                        key={i}
                                        tech={tech}
                                        ></TechnologyDetail>)
                                       } 
                                   </div>
                              </div>
                    </div>
               </div>
          </div>
     );
};

export default ProjectDetails;