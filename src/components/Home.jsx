import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] font-medium text-sm px-5 py-13 text-center border-b-4 border-#708090-100' >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full py-6'>
        <p className='text-lg sm:text-3xl pt-16 sm:pt-24 text-gray-600'>Hi, my name is</p>
        <h1 className='text-lg sm:text-6xl font-bold text-[#ccd6f6] italic font-serif p-2 sm:p-6'>
          MAHESWARI
        </h1>
        <h2 className='text-lg sm:text-6xl font-bold text-gray-200'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-gray-200 justify-center text-center py-4 max-w-[1000px] mx-auto text-base sm:text-lg'>
          Welcome to my corner of the web! 👋 I'm Maheswari, a passionate front-end web developer dedicated to crafting engaging and user-centric digital experiences. I specialize in building captivating user interfaces using the power of HTML, CSS, JavaScript, React, and Tailwind CSS. From concept to execution, I merge creativity with functionality to bring ideas to life on the web.
        </p>
        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to='work' smooth={true} duration={500}>
              View Work
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
