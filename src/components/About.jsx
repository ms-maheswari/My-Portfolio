import React from 'react';
import TechProfile from './TechProfile';

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-[#0a192f] text-gray-300 mt-0 border-b-4 border-#708090-100 py-24'>
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8  px-4'>
          <div className='sm:text-right text-xl font-bold'>
            <p>Hi. I'm <i>Maheswari</i>, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>Hi, I'm Maheswari, a Front-End Web Developer! 🌟

              I began my web development journey creating basic webpages using HTML, CSS, and JavaScript. Exploring Bootstrap enhanced my design skills before I immersed myself in React and Tailwind CSS. I've completed diverse projects leveraging React's interactivity and Tailwind's sleekness. Presently, I'm diving into the MERN stack (MongoDB, Express.js, React, Node.js) for comprehensive full-stack expertise. Passionate about crafting seamless user interfaces, I merge functionality and creativity. My portfolio showcases this evolution, displaying my growth from beginner to React adept. Eager for new challenges and collaborations, let's connect and create compelling web experiences! ✨
            </p>
          </div>
        </div>
      </div>
      <TechProfile />
    </div>
  );
};

export default About;
