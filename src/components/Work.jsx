import React, { useState } from 'react';
import ActivismImg from '../assets/activism.jpg';
import realEstate from '../assets/realestate.jpg';
import ImagePopup from './ImagePopup';
import YouTubePopup from './YouTubePopup';
import FamilyTreePic from '../assets/familiytreepic.png'
import FamilyTreebg from '../assets/familytreebg.png'
import Psycl from '../assets/psyclpic.png'
import Psyclbg from '../assets/psyclbg.png'

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

          {/* Item 1 - Image Popup */}
          <div
            style={{ backgroundImage: `url(${Psyclbg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            onClick={() => togglePopup('item1')}
          >
            <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Psy.cl
              </span>
              <div className='pt-8 text-center'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Item 2 - Image Popup */}
          <div
            style={{ backgroundImage: `url(${FamilyTreebg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            onClick={() => togglePopup('item2')}
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Family Tree Maker
              </span>
              <div className='pt-8 text-center'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* Item 3 - Image Popup */}
          <div
            style={{ backgroundImage: `url(${ActivismImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            onClick={() => togglePopup('item3')}
          >
            <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                BeActive
              </span>
              <div className='pt-8 text-center'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        

        {/* Popups */}
        {activePopup === 'item1' && (
          <ImagePopup 
            onClose={() => togglePopup(null)} 
            imageUrl={Psycl}
            description="Psy.cl is a Flutter mobile project that I developed alongside several other Rice undergraduates as part of our university's software 
            development club, RiceApps. The main problem we sought to address was the lack of user input in predicting menstrual cycles for current applications 
            on the market. Therefore, we wanted to create an app that was more user-centric and gave better advice and predictions on their menstrual cycles. One
             approach that we took to address this was gathering daily information about the users on their mood, energy levels, sex drive, and other factors that 
             could play a role in determining menstrual cycles. Utilizing agile development with weekly 4-hr sprints and hour-long stand-ups, we were able to rapidly 
             deploy our application in iterative cycles and improve features weekly. As shown in the image, my contribution to the project involved constructing the 
             data entry framework, from conceptualization to gathering feedback from the Rice community to constructing its implementation and eventually 
             connecting it to an AWS backend!"
          />
        )}
        
        {activePopup === 'item2' && (
          <ImagePopup 
            onClose={() => togglePopup(null)} 
            imageUrl={FamilyTreePic}
            description="Family Tree Maker was a personal project that I started this winter break to assist my family in displaying our heritage to our relatives 
            overseas. Since many of the family tree maker sites online required subscriptions or payments, I took the initiative to create my own free version that I 
            could also use to customize to my family's needs. For example, I implemented cultural features like the lunar calendar and 天干地支 (Heavenly Stems and Earthly 
              Branches), a traditional Chinese system included in calendars, astrology, and divination. The tech stack that I originally used was simple HTML/CSS for the 
              front-end, with a local SQLite3 Flask backend. Eventually, as the project grew bigger, I switched to using a ReactJS Tailwind front-end with deployment to a 
              Heroku server utilizing Heroku PostgreSQL and SQLAlchemy. Currently, I am working towards improving the UI of the application and learning how I can apply modern software 
              technologies like Docker and CI/CD to improve my development efficiency. This project continues to challenge and teach me, with exciting updates coming soon!"
          />
        )}

        {activePopup === 'item3' && (
          <YouTubePopup 
            onClose={() => togglePopup(null)} 
            youtubeVideoId="rIrVqMl3yDg"
            description="BeActive is a HackRice hackathon project that I did last year with 3 friends. Please check out the video to learn more!"
          />
        )}
      </div>
    </div>
  );
};

export default Work;
