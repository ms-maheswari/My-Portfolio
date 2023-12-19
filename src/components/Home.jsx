import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen  bg-gradient-to-l from-pink-500 to-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-2xl p-4 text-gray-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] italic font-serif p-6' >
          MAHESWARI
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-200'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-gray-200 justify-center text-center py-4 max-w-[700px] text-lg'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link to='work' smooth={true} duration={500}>
            View Work
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
