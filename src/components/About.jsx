import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Jerry, nice to meet you!</p>
                </div>
                <div>
                    <p> My experiences in software engineering and machine learning has fueled my passion for developing impactful software. Through designing web 
                        applications that streamline user interactions and crafting mobile apps that simplify daily tasks, I've seen firsthand how targeted solutions 
                        can enhance lives. These experiences, from enhancing customer service efficiency at a health tech startup to predicting chemical affinities for 
                        medical research, showed me the the transformative power of technology. My methodology is a combination of meticulous problem-solving and focusing 
                        on user-centric design, striving to produce not just functional but also user-friendly and accessible technology. Leveraging team collaboration, 
                        agile practices, and a zeal for perpetual learning, I'm dedicated to making a significant contribution to the technology sector, continuously exploring 
                        innovative challenges that drive progress and personal growth!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About