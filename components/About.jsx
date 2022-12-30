import React from 'react'
import Image from 'next/image'
import profilePic from '../public/assets/profilePic.jpg'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600 dark:text-gray-300'>My name is Wei Shun Tye, but people usually call me Eugene. I am currently a senior majoring in Computer Science at Western Michigan University (WMU). 
                    I have always been fascinated by the world of technology and am excited to learn more about how to design and build software that makes a difference in people's lives.
                    </p>
                    <p className='py-2 text-gray-600 dark:text-gray-300'>I am passionate about learning new technologies and am always seeking out opportunities to expand my knowledge and skills.
                    In my free time, I am a sports fanatic, casual League player, and a ramen connoisseur.
                    </p>
                    <p className='py-2 text-gray-600 underline dark:text-gray-300'>Scroll for more!</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src={profilePic} alt="/" width = '500' height = '500'/>
                </div>
            </div>
        </div>
    )
}

export default About
