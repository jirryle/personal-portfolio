import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profilePic from '../assets/jerry_pfp.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1300px] mx-auto px-8 flex justify-center h-full'>
        {/* Flex Container for Text and Image */}
        <div className='flex flex-row items-center justify-between w-full'>
          {/* Text Container */}
          <div className='flex-1'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jerry Li</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Engineer</h2>
            <p className='text-[#8892b0] py-4'>
              I'm an undergraduate at Rice University studying Computer Science.
            </p>
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className='flex-1'>
            <img src={profilePic} alt="Jerry Li" className='w-full h-auto rounded-lg'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
