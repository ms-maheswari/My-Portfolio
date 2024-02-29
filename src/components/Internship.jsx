import React from 'react';

const Internship = () => {
  return (
    <div name='internship' className='w-full h-full bg-[#0a192f] text-gray-300 mt-0 border-b-4 border-#708090-100 py-24 lg:py-12'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full p-4'>
        <p className='text-2xl md:text-4xl lg:text-4xl font-bold inline border-b-4 border-pink-600 mb-8 md:mb-8 lg:mb-24'>
          Internships
        </p>

        <ol className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6'>
          <li className="flex-grow flex flex-col md:flex-row mb-4 sm:mb-8 space-y-2 md:space-y-4">
            <div className="flex-grow flex flex-col justify-between block p-4 rounded-lg bg-gray-200 md:max-w-md lg:h-[400px]">
              <div className="block flex-col md:flex-row mb-2 md:mb-4">
                <a href="https://zenanvibe.com/" className="text-purple-600 hover:text-purple-900 focus:text-purple-400 font-bold text-lg mb-1 md:mb-0">Zenanvibe </a>
                <p className="font-medium text-purple-600 mb-1 md:mb-0">Hybrid - Sep '23 to Oct '23</p>
              </div>
              <ul className='list-disc ml-4 text-gray-700 mb-4 md:mb-6'>
                <li>Gained practical expertise in React Tailwind CSS for rapid styling</li>
                <li>Mastered responsiveness to ensure seamless user experiences across various devices.</li>
              </ul>
              <div className='flex flex-col md:flex-row mx-2 md:mx-4 gap-2 md:gap-4'>
                <button type="button" className="inline-block px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 bg-purple-600 text-white font-medium rounded hover:bg-purple-700">
                  <a href='https://vegetable-shop-rust.vercel.app/'>Project</a>
                </button>
                <button type="button" className='inline-block px-4 sm:px-6 py-1 sm:py-1.5 bg-purple-600 text-white font-medium rounded hover:bg-purple-700'>
                  <a href='https://drive.google.com/file/d/1EzY9Cz1ibOJb_e13Ab8qP4aFSy3f59EK/view?usp=sharing'>Certificate</a>
                </button>
              </div>
            </div>
          </li>

          <li className="flex-grow flex flex-col md:flex-row mb-4 sm:mb-8 space-y-2 md:space-y-4">
            <div className="flex-grow flex flex-col justify-between block p-4 rounded-lg bg-gray-200 md:max-w-md lg:h-[400px]">
              <div className="block flex-col md:flex-row mb-2 md:mb-4">
                <a href="https://www.qantler.com/" className="text-purple-600 hover:text-purple-900 focus:text-purple-400 font-bold text-lg mb-1 md:mb-0">Qantler Technologies </a>
                <p className="font-medium text-purple-600 mb-1 md:mb-0">Onsite - June 2023 - July 2023</p>
              </div>
              <ul className='list-disc ml-4 text-gray-700 mb-4 md:mb-6'>
              <li>Gained extensive proficiency in validation, input types, JavaScript functions, styling, and the creation of forms with validation and CRUD (Create, Read, Update, Delete) operations.</li>
              </ul>
              <div className='flex flex-col md:flex-row mx-2 md:mx-4 gap-2 md:gap-4'>
                <button type="button" className="inline-block px-4 sm:px-6 py-1 sm:py-1.5 bg-purple-600 text-white font-medium rounded hover:bg-purple-700">
                  <a href='https://crud-operation-roan.vercel.app/'>Project</a>
                </button>
                <button type="button" className='inline-block px-4 sm:px-6 py-1 sm:py-1.5 bg-purple-600 text-white font-medium rounded hover:bg-purple-700'>
                  <a href='https://drive.google.com/file/d/1uFUVGgqsjMbbbWipVXcNqaUPkvUfG1d8/view?usp=sharing'>Certificate</a>
                </button>
              </div>
            </div>
          </li>
          
          <li className="flex-grow flex flex-col md:flex-row mb-4 sm:mb-8 space-y-2 md:space-y-4">
            <div className="flex-grow flex flex-col justify-between block p-4 rounded-lg bg-gray-200 md:max-w-md lg:h-[400px]">
              <div className="block flex-col md:flex-row mb-2 md:mb-4">
                <a href="https://nullclass.com/home-2/" className="text-purple-600 hover:text-purple-900 focus:text-purple-400 font-bold text-lg mb-1 md:mb-0">NULLCLASS </a>
                <p className="font-medium text-purple-600 mb-1 md:mb-0">Remote - March 2023 - May 2023</p>
              </div>
              <ul className='list-disc ml-4 text-gray-700 mb-4 md:mb-6'>
              <li>Crafted and launched a responsive web application utilizing the MERN stack with user interaction</li>
                      <li>Integrated user authentication and authorization functionalities, empowering users to securely establish accounts, log in, and oversee their profiles.</li>
              </ul>
              <div className='flex flex-col md:flex-row mx-2 md:mx-4 gap-2 md:gap-4'>
                <button type="button" className="inline-block px-4 sm:px-6 py-1 sm:py-1.5 bg-purple-600 text-white font-medium rounded hover:bg-purple-700">
                  <a href='https://stack-clone-frontend.vercel.app/'>Project</a>
                </button>
                <button type="button" className='inline-block px-4 sm:px-6 py-1 sm:py-1.5 bg-purple-600 text-white font-medium rounded hover:bg-purple-700'>
                  <a href='https://drive.google.com/file/d/18AYwIzm04GiB_virOr9nYoRO4gAlkcmO/view?usp=sharing'>Certificate</a>
                </button>
              </div>
            </div>
          </li>
         
        </ol>
      </div>
    </div>
  );
}

export default Internship;
