import React from 'react';
import { data } from "../cdata/data.js";


const Progress = () => {

    
    const project = data;

  
  return (
    <div name='progress' className='w-full  text-gray-300 bg-[#0a192f] pt-24 border-b-4 border-[#708090]-100 py-36'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pb-12'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            My activities
          </p>
          <p className='py-12'>// Check out some of my recent practices</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.map((item,index) => (
            <div key={index}>
              <div className='flex '>
             <img src={item.icon} />
             <p className='pl-2'>{item.name}</p>
             </div>
          
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md my-6 mb-6
              flex justify-center text-center items-center mx-auto content-div "
  >
   
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      
      <div className="pt-8 text-center ">
       
        {/* eslint-disable-next-line */}
        <a href={item.link} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            View Progress
          </button>
        </a>
        
      </div>
      
    </div>
    
  </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Progress;
