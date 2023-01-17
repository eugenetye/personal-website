import React from 'react'
import Image from 'next/image'
import stock from '../public/assets/projects/stock.jpg'
import hearthstone from '../public/assets/projects/hearthstone.jpg'
import doggo from '../public/assets/projects/doggo.jpg'
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
                        title='Stock Market Predictor' 
                        backgroundImg={stock} 
                        projectURL='/stockmarketpredictor'
                        language='Python / Machine Learning'/>

                    <ProjectItem 
                        title='Hearthstone Card Parser' 
                        backgroundImg={hearthstone} 
                        projectURL='/hearthstone'
                        language='C'/>

                    <ProjectItem 
                        title='Image Classifier' 
                        backgroundImg={doggo} 
                        projectURL='/imageclassifier'
                        language='Python / Deep Learning'/>

                    <ProjectItem 
                        title='Coming soon' 
                        backgroundImg={netflixpic} 
                        projectURL='/netflix'
                        language='Coming Soon'/>

                </div>
            </div>
        </div>
    )
}

export default Projects
