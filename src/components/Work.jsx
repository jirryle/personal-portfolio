import React, { useState } from 'react';
import ActivismImg from '../assets/activism.jpg';
import ImagePopup from './ImagePopup';
import YouTubePopup from './YouTubePopup';
import FamilyTreePic from '../assets/familiytreepic.png'
import FamilyTreebg from '../assets/familytreebg.png'
import Psycl from '../assets/psyclpic.png'
import Psyclbg from '../assets/psyclbg.png'
import ImageZoomPopup from './ImageZoomPopup';
import FDAPoster from '../assets/FDA_research_poster.png';

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

          {/* Item 1 - Psy.cl Popup */}
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

          {/* Item 2 - FDA Popup */}
          <div
            style={{ backgroundImage: `url(${FDAPoster})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            onClick={() => togglePopup('item2')}
          >
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Random Forests (FDA)
              </span>
              <div className='pt-8 text-center'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* Item 3 - Family Tree Popup */}
          <div
            style={{ backgroundImage: `url(${FamilyTreebg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            onClick={() => togglePopup('item3')}
          >
            <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
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
          {/* Item 4 - BeActive Popup */}
          <div
            style={{ backgroundImage: `url(${ActivismImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            onClick={() => togglePopup('item4')}
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
            description="In my role as a developer for Psy.cl, a Flutter mobile app created in collaboration with Rice University's software development club, RiceApps, 
            I successfully addressed the lack of user input in current menstrual cycle prediction applications. By implementing a data entry framework that gathers 
            daily information about users' mood, energy levels, sex drive, and other relevant factors, I enhanced the app's ability to provide accurate and personalized 
            menstrual cycle predictions. Throughout the development process, I utilized Agile methodology, participating in weekly 4-hour sprints and hour-long stand-ups. 
            This approach allowed for rapid deployment and iterative improvements to the application's features. My key contribution to the project involved 
            conceptualizing and implementing the data entry framework, gathering valuable feedback from the Rice community, and seamlessly integrating it with an AWS 
            backend. By working closely with fellow Rice undergraduates, I demonstrated strong collaboration skills and played a crucial role in delivering a user-centric 
            solution that addresses the limitations of existing menstrual cycle tracking apps. This experience showcases my ability to leverage cutting-edge technologies,
             adapt to Agile development practices, and contribute to the creation of impactful and innovative software solutions."
          />
        )}

        {activePopup === 'item2' && (
          <ImagePopup 
            onClose={() => togglePopup(null)} 
            imageUrl={FDAPoster}
            description="This research poster was a project I designed and developed alongside my mentors Dr. Huixiao Hong and Dr. Jie Liu under the 
            Bioinformatics branch of NCTR as part of the 2023 Food and Drug Administration Student Research Program at NCTR."
          />
        )}

        {activePopup === 'item3' && (
          <ImagePopup 
            onClose={() => togglePopup(null)} 
            imageUrl={FamilyTreePic}
            description="Over the winter break, I embarked on a personal project called Family Tree Maker to help my family showcase our heritage to relatives living abroad. 
            Motivated by the limitations of existing family tree websites that often require subscriptions or payments, I took the initiative to develop a customizable, free 
            alternative tailored to my family's specific needs.

            To make the application more culturally relevant, I incorporated features such as the lunar calendar and 天干地支 (Heavenly Stems and Earthly Branches), a 
            traditional Chinese system used in calendars, astrology, and divination. Initially, I built the project using a simple HTML/CSS front-end and a local SQLite3 
            Flask backend. However, as the project evolved, I migrated to a ReactJS Tailwind front-end and deployed the application to a Heroku server, leveraging Heroku 
            PostgreSQL and SQLAlchemy for enhanced performance and scalability.
            
            Currently, I am focusing on refining the user interface and exploring the integration of modern software technologies like Docker and CI/CD to streamline my 
            development process and improve efficiency. This project has been an incredible learning experience, continuously challenging me to expand my skills and 
            knowledge. I am excited about the upcoming updates and the opportunity to further enhance the Family Tree Maker application.
            
            Throughout this project, I have demonstrated my ability to identify a real-world problem, design and develop a practical solution, and adapt to new 
            technologies as the project requirements evolve. By combining my technical skills with a user-centric approach and cultural sensitivity, I have created a 
            meaningful application that serves the needs of my family and showcases my passion for software development."
          />
        )}

        {activePopup === 'item4' && (
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
