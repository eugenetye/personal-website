import React from 'react'
import Image from 'next/image'
import toxicImg from '../public/assets/projects/toxic.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const toxic = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                    <Image className='absolute z-1' layout='fill' objectFit='cover' src={toxicImg} alt='/' />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                        <h2 className='py-2'>Toxic Comment Classification</h2>
                        <h3 className='text-xl'>Python / Deep Learning</h3>
                    </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Project</p>
                    <h2 className='py-4'>Overview</h2>
                    <p>This project classifies toxic comments using deep learning and Python. The dataset leveraged is originally from Kaggle, which 
                        provided a large number of Wikipedia comments which have been labeled by human raters for toxic behavior. The types of toxicity are:</p>
                        <br></br>
                        <ul className='ml-10 list-disc'>
                            <li >toxic</li>
                            <li>severe_toxic</li>
                            <li>obscene</li>
                            <li>threat</li>
                            <li>insult</li>
                            <li>identity_hate</li>
                        </ul>
                        <br></br>
                    <p>A model which predicts the probability of each type of toxicity for each comment is created. Finally, the model is integrated into a Gradio app to be demoed.</p>

                    <a href='https://github.com/eugenetye/toxic-comment-classification' target="_blank" rel='noopener noreferrer'><button className='py-2 px-8 mt-4'>GitHub Link</button></a>
                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                            <div className='grid grid-cols-3 md:grid-cols-1'>
                                <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Python</p>
                            </div>
                            <div className=''>
                                <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> TensorFlow</p>
                            </div>
                            <div className=''>
                                <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Keras</p>
                            </div>
                            <div className=''>
                                <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Pandas</p>
                            </div>
                            <div className=''>
                                <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Matplotlib</p>
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

export default toxic
