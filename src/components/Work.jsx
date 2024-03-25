import React, { useState } from 'react';
import ActivismImg from '../assets/activism.jpg';
import realEstate from '../assets/realestate.jpg';
import Popup from './Popup.jsx';
import HackRiceVid from '../assets/hackricevid.mp4';

const Work = () => {
  const [activePopup, setActivePopup] = useState(null);

  const togglePopup = (itemId) => {
    setActivePopup(activePopup === itemId ? null : itemId);
  };

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work!</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Item 1 */}
          <div
            style={{ backgroundImage: `url(${ActivismImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                BeActive
              </span>
              <div className='pt-8 text-center'>
                <button onClick={() => togglePopup('item1')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Learn More
                </button>
              </div>
            </div>
          </div> {/* Close Item 1 div properly */}

          {/* Item 2 */}
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Family Tree Maker
              </span>
              <div className='pt-8 text-center'>
                <button onClick={() => togglePopup('item2')} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Coming soon!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popups */}
        {activePopup === 'item1' && <Popup 
          onClose={() => togglePopup(null)} 
          videoSrc={HackRiceVid}
          description="Lorem ipsum dolor sit amet..."
        />}
        
        {activePopup === 'item2' && <Popup 
          onClose={() => togglePopup(null)} 
          videoSrc="path_to_another_video.mp4" // Placeholder, update with real video source
          description="Coming soon!"
        />}
      </div>
    </div>
  );
};

export default Work;
