import React from 'react'

import Java from '../assets/java_icon.png';
import Python from '../assets/python_icon.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Pandas from '../assets/pandas_icon.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Heroku from '../assets/heroku_icon.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'> Theres are some of the recent technologies I've worked with!</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 h-20 mx-auto' src={Java} alt="Java icon"></img>
                <p className='my-4'>Java</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 h-20 mx-auto' src={Python} alt="Python icon"></img>
                <p className='my-4'>Python</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 h-20 mx-auto' src={JavaScript} alt="HTML icon"></img>
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 h-20 mx-auto' src={ReactImg} alt="HTML icon"></img>
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 h-20 mx-auto' src={GitHub} alt="HTML icon"></img>
                <p className='my-4'>GitHub</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 h-20 mx-auto' src={Heroku} alt="Heroku icon"></img>
                <p className='my-4'>Heroku</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 h-20 mx-auto' src={Pandas} alt="Pandas icon"></img>
                <p className='my-4'>Pandas</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 h-20 mx-auto' src={Tailwind} alt="HTML icon"></img>
                <p className='my-4'>Tailwind</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
