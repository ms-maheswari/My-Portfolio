import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const TechProfile = () => {
  return (
    <div className='mt-10 flex flex-row mx-4 md:mx-6 p-4 justify-center items-center'>
      <ul className="flex space-x-4 md:space-x-12 text-gray-500">
        
        <li className="relative social-icon bg-white hover:bg-yellow-500 hover:text-orange-900" data-tooltip="LeetCode">
          <span className="tooltip-text"></span>
          <a href='https://leetcode.com/ms-maheswari/'>
            <SiLeetcode className='text-xl' size={30} />
          </a>
        </li>
        <li className="relative social-icon bg-white hover:bg-green-500 hover:text-white" data-tooltip="GFG">
          <span className="tooltip-text"></span>
          <a href='https://auth.geeksforgeeks.org/user/msmaheswari'>
            <SiGeeksforgeeks className="text-xl" size={30} />
          </a>
        </li>
        <li className="relative social-icon bg-white hover:bg-[#7c2d12]-500 hover:bg-orange-900 hover:text-white" data-tooltip="CodeChef">
          <span className="tooltip-text"></span>
          <a href='https://www.codechef.com/users/mahes7439'>
            <SiCodechef className="text-xl" size={30} />
          </a>
        </li>
        <li className="relative social-icon bg-white hover:bg-blue-600 hover:text-white" data-tooltip="LinkedIn">
          <span className="tooltip-text"></span>
          <a href='https://linkedin.com/in/ms-maheswari'>
            <FaLinkedin className="text-xl" size={30} />
          </a>
        </li>
        <li className="relative social-icon bg-white hover:bg-black" data-tooltip="Github">
          <span className="tooltip-text"></span>
          <a href='https://github.com/ms-maheswari'>
            <FaGithub className="text-xl" size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TechProfile;


