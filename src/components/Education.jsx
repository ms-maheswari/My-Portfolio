import React from 'react';
import TechProfile from './TechProfile';

const Education = () => {
  return (
    <div name='education' className='w-full h-full bg-[#0a192f] text-gray-300 mt-0 border-b-4 border-#708090-100 py-24'>
      <div className='flex flex-col justify-center items-center w-full h-full '>
       
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Education
            </p>
          </div>
          <ol className="border-l border-gray-500 ">
            <li>
                <div className="flex-start flex items-center pt-3">
                    <div
                    className="-ml-[7px] mr-3 h-[15px] w-[15px] rounded-full bg-blue-400"></div>
                    <h4 className="mb-1.5 text-xl font-semibold">Francis Xavier Engineering College</h4>
                    </div>
                    <div className="mb-6 ml-5 mt-2">
                        <p className="mb-3 ">
                            Tirunelveli 
                        </p>
                        <p className="mb-3 ">
                            UG : B.E - CSE
                        </p>
                        <p className="mb-3 ">
                            Batch : 2021 - 2025
                            </p>
                            <p className="mb-3 ">
                                CGPA : 8.5 (Upto 5th semester)
                                </p>
                                </div>
            </li>
            <li>
                <div className="flex-start flex items-center pt-3">
                    <div
                    className="-ml-[7px] mr-3 h-[15px] w-[15px] rounded-full bg-blue-400"></div>
                    <h4 className="mb-1.5 text-xl font-semibold">St. Ignatius Convent Hr. Sec. School</h4>
                    </div>
                    <div className="mb-6 ml-5 mt-2">
                        <p className="mb-3">
                            Tirunelveli
                            </p>
                            <p className="mb-3">
                                Class : XII
                                </p>
                                <p className="mb-3">
                                    Batch : 2021
                                    </p>
                                    <p className="mb-3">
                                        Percentage : 92%
                                        </p>
                                        </div>
            </li>
            <li>
                <div className="flex-start flex items-center pt-3">
                    <div
                    className="-ml-[7px] mr-3 h-[15px] w-[15px] rounded-full bg-blue-400"></div>
                    <h4 className="mb-1.5 text-xl font-semibold">Saratha Matriculation School</h4>
                    </div>
                    <div className="mb-6 ml-5 mt-2">
                        <p className="mb-3">
                            Tirunelveli
                            </p>
                            <p className="mb-3">
                                Class : X
                                </p>
                                <p className="mb-3">
                                    Batch : 2019
                                    </p>
                                    <p>
                                        Percentage : 92%
                                        </p>
                    </div>
            </li>
        </ol>
</div>
</div>
  );
};

export default Education;
