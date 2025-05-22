import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-gray-300'>Let's build something together</p>
                    <h1 className='py-4 text-gray-700 dark:text-gray-300'>
                        Hi, I'm <span className='text-[#5651e5]'> Eugene </span> 
                    </h1>
                    <h1 className='py-2 text-gray-700 dark:text-gray-300'>
                        A Software Engineer 
                    </h1>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href='https://www.linkedin.com/in/wei-shun-tye/' target="_blank" rel='noopener noreferrer'> <FaLinkedinIn></FaLinkedinIn></a>  
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href='https://github.com/eugenetye' target="_blank" rel='noopener noreferrer'><FaGithub></FaGithub></a> 
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href='mailto:eugenetye123@gmail.com' target="_blank" rel='noopener noreferrer'><AiOutlineMail></AiOutlineMail></a>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href='tel:5404861948' target="_blank" rel='noopener noreferrer'><BsFillPersonLinesFill></BsFillPersonLinesFill></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
