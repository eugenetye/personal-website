import React from 'react'
import Image from 'next/image'
import contact from '../public/assets/contact.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>

                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-gray-400 shadow-xl rounded-xl p-4'>
                        <div className='lg:p-4 h-full '>
                            <div>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contact} alt='/' width = '400' height = '400'/>
                            </div>
                            <div>
                                <h2 className='py-2'>Eugene Tye</h2>
                                <p>Aspiring Software Engineer</p>
                                <p className='py-4'>I am available for Summer 2023 internship positions. Contact me!</p>
                            </div>
                            <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between'>
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

                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4 '>
                            <form method="POST" action='https://formsubmit.co/eugenetye123@gmail.com'> 

                                {/* Honeypot */}
                                <input type='text' name='_honey' className='hidden'></input>

                                {/* Override captcha */}
                                <input type="hidden" name="_captcha" value="false"></input>

                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='Name'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>phone number</label>
                                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='Phone Number'/>
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='Email'/>  
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='Subject'/>  
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='Message'/>  
                                </div>
                                <button type='submit' className='w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-[#5651e5] to-[#709dff]'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
