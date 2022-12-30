import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import ThemeSwitch from '../components/ThemeSwitch'
import { useRouter } from 'next/router'
import logo from '../public/assets/navLogo.png'


const Navbar = () => {
    const[nav, setNav] = useState(false)
    const[shadow, setShadow] = useState(false)
    const[linkColor, setLinkColor] = useState('#1f2937') 
    const router = useRouter()

    useEffect(() => {
        if(
            router.asPath === '/property' ||
            router.asPath === '/crypto' ||
            router.asPath === '/netflix' ||
            router.asPath === '/twitch' 
        ) {
            setLinkColor('#ecf0f3')
        } else{
            setLinkColor('#1f2937')
        }

    }, [router])

    const handleNav = () => {
        setNav(!nav)
    }
    
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90){
                setShadow(true)
            } else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href='/'>
                    <Image src = {logo} alt = "/" width='65' height = '40'/>
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className="hidden md:flex"> 
                        <li className='ml-10'><ThemeSwitch/></li>
                        <Link href='/'>
                            <li className = 'ml-10 text-sm uppercase hover:border-b dark:text-gray-300'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className = 'ml-10 text-sm uppercase hover:border-b dark:text-gray-300'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className = 'ml-10 text-sm uppercase hover:border-b dark:text-gray-300'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className = 'ml-10 text-sm uppercase hover:border-b dark:text-gray-300'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className = 'ml-10 text-sm uppercase hover:border-b dark:text-gray-300'>Contact</li>
                        </Link>
                    </ul>
                    <div className='flex'>
                        <div className='md:hidden ml-10'><ThemeSwitch/></div>
                        <div onClick={handleNav} className='md:hidden cursor-pointer ml-10'>
                            <AiOutlineMenu size={25}/>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-gray-900" : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 '}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src = {logo} width = "87" height="35" alt="/" />
                                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                    <AiOutlineClose />
                                </div>
                                
                        </div>
                        <div className=' flex border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Welcome!</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'> 
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'> 
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'> 
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'> 
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'> 
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href='https://www.linkedin.com/in/wei-shun-tye/' target="_blank" rel='noopener noreferrer'> <FaLinkedinIn></FaLinkedinIn></a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href='https://github.com/eugenetye' target="_blank" rel='noopener noreferrer'><FaGithub></FaGithub></a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href='mailto:eugenetye123@gmail.com' target="_blank" rel='noopener noreferrer'><AiOutlineMail></AiOutlineMail></a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href='tel:5404861948' target="_blank" rel='noopener noreferrer'><BsFillPersonLinesFill></BsFillPersonLinesFill></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
