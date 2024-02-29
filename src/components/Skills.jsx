import React from 'react';
import HTML from '../assets/skills/html.png';
import CSS from '../assets/skills/css.png';
import JavaScript from '../assets/skills/javascript.png';
import ReactImg from '../assets/skills/react.png';
import Node from '../assets/skills/node.png';
import Java from '../assets/skills/java.png';
import GitHub from '../assets/skills/github.png';
import Tailwind from '../assets/skills/tailwind.png';
import Mongo from '../assets/skills/mongo.png';

import mysql from '../assets/skills/mysql.svg'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-auto bg-[#0a192f] text-gray-300 py-24 border-b-4 border-#708090-100'>
    <div className='max-w-[1000px] mx-auto p-4'>
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills & Tools</p>
        <p className='py-4 mt-2text-xl'>These are the technologies I have worked with</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                  <img className='w-20 mx-auto' src={mysql} alt="HTML icon" />
                  <p className='my-4'>MYSQL</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
