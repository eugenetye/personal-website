import React from 'react'
import Image from 'next/image'
import twitch from '../public/assets/projects/twitch.jpg'
import property from '../public/assets/projects/property.jpg'
import crypto from '../public/assets/projects/crypto.jpg'
import netflixpic from '../public/assets/projects/netflix.jpg'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl uppercase tracking-widest text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className=' grid sm:grid grid-cols-1 md:grid-cols-2 gap-8 '>

                    <ProjectItem 
                        title='Twitch' 
                        backgroundImg={twitch} 
                        projectURL='/twitch'
                        language='Python'/>

                    <ProjectItem 
                        title='Property Finder' 
                        backgroundImg={property} 
                        projectURL='/property'
                        language='C, React, CSS'/>

                    <ProjectItem 
                        title='Crypto' 
                        backgroundImg={crypto} 
                        projectURL='/crypto'
                        language='R'/>

                    <ProjectItem 
                        title='Netflix' 
                        backgroundImg={netflixpic} 
                        projectURL='/netflix'
                        language='HTML'/>

                </div>
            </div>
        </div>
    )
}

export default Projects
