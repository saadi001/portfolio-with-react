import React from 'react';

const TechnologyDetail = ({tech}) => {
     const {title,description} = tech;
     console.log(tech)
     return (
          <div className='bg-[#22303C] rounded-md p-4'>
               <p className='text-slate-100 text-xl mb-2'>{title}</p>
               <p className='text-slate-400 text-sm'>{description}</p>
          </div>
     );
};

export default TechnologyDetail;