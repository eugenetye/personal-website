import React from 'react'
import Image from 'next/image'
import hearthstoneImg from '../public/assets/projects/hearthstone.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const property = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                    <Image className='absolute z-1' layout='fill' objectFit='cover' src={hearthstoneImg} alt='/' />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                        <h2 className='py-2'>Hearthstone Card Parser</h2>
                        <h3 className='text-xl'>C</h3>
                    </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Project</p>
                    <h2 className='py-4'>Overview</h2>
                    <p>This program is built using C. It parses a .csv file full of Hearthstone data (4000+ cards) and stores them. It will also de-duplicate, sort, and then print out the cards.

</p>
                    <a href='https://github.com/eugenetye/HearthstoneCardParser' target="_blank" rel='noopener noreferrer'><button className='py-2 px-8 mt-4'>GitHub Link</button></a>
                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                            <div className='grid grid-cols-3 md:grid-cols-1'>
                                <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> C</p>
                            </div>
                    </div>
                </div>

                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>

        </div>
    )
}

export default property
