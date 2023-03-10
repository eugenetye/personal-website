import React from 'react'
import Image from 'next/image'
import pythonImg from '../public/assets/skills/python.png'
import cImg from '../public/assets/skills/c.png'
import rImg from '../public/assets/skills/r.png'
import phpImg from '../public/assets/skills/php.png'
import mysqlImg from '../public/assets/skills/mysql.png'
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css.png'
import javascriptImg from '../public/assets/skills/javascript.png'
import reactImg from '../public/assets/skills/react.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import githubImg from '../public/assets/skills/github1.png'
import nextjs from '../public/assets/skills/nextjs.png'
import tensorflow from '../public/assets/skills/tensorflow.png'
import keras from '../public/assets/skills/keras.png'
import opencv from '../public/assets/skills/opencv.png'

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={pythonImg} alt='/' width='64' height='64'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Python</h3>
                                </div>
                            </div>
                    </div>
                    
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={cImg} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={rImg} alt='/' width='64' height='64'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>R</h3>
                                </div>
                            </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={phpImg} alt='/' width='64' height='64'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>PHP</h3>
                                </div>
                            </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={mysqlImg} alt='/' width='64' height='64'/>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>MySQL</h3>
                                </div>
                            </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={htmlImg} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={cssImg} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={javascriptImg} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={reactImg} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={tailwindImg} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={githubImg} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>GitHub</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={nextjs} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NextJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={tensorflow} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tensorflow</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={keras} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Keras</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={opencv} alt='/' width='64' height='64'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>OpenCV</h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Skills
 