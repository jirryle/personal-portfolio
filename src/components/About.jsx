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
                    <p>Hi, I'm Jerry Li, nice to meet you!</p>
                    <br></br>
                    <p>I am currently a junior at Rice University studying Computer Science.</p>
                </div>
                <div>
                    <p> As a dedicated software engineer and machine learning enthusiast, I have worked on a wide range of impactful projects. At Apothewell, 
                        I developed a MERN stack web application that significantly improved customer service efficiency. I also interned at the FDA, where I 
                        created a highly accurate machine learning model to predict mu-opioid receptor affinity for a large dataset of chemicals. </p>
                    <br></br>
                    <p> In addition to my internships, I have worked on personal projects such as Family Tree Maker, a full-stack web application for genealogical 
                        data management, and Psy.cl, a menstrual cycle tracking mobile app. These projects allowed me to gain experience with various technologies, 
                        including cloud-based databases, CI/CD pipelines, and containerization. </p>
                    <br></br>
                    <p> Throughout my experiences, I have developed a strong foundation in programming languages, frameworks, and tools, such as Java, Python, 
                        ReactJS, NodeJS, and more. I am passionate about leveraging my skills to create impactful software solutions that solve real-world problems 
                        and enhance people's lives. As I continue to grow as a software engineer, I am excited to take on new challenges and contribute to the 
                        ever-evolving technology landscape. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About