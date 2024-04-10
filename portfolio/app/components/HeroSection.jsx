"use client"
import React from 'react'
import Image from 'next/image'
import Avatar from '/images/avatar.png'

import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return(
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>

                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>Welcome, I&apos;m {''}</span> 
                    
                    <br></br>
                    <TypeAnimation
                        sequence={[
                        // Time in milliseconds! Don't forget!
                        'Joevany',
                        1000,
                        'A Developer',
                        1000,
                        'An Analyst',
                        1000,
                        'A Pharmacy Technician',
                        1000
                        ]}
                        wrapper="span"
                        speed={150}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>

                <p className='text-[#DBBBF5] text-base mb-6 sm:text-lg lg:text-xl'>
                    If you&apos;re here, thank you for conidering me. I&apos;m excited to get to work, I&apos;m passionate about what I do, and I hope to impress you as we begin our journey together! This site, truly is just the beginning of who I am and I hope it leaves a great impression.
                </p>

                <div>    
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-purple-400 to-blue-400 hover:bg-slate-200 text-white font-semibold'>Hire Me!</button>
                    <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-purple-400 to-blue-400 hover:bg-slate-800 mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-500 rounded-full px-5 py-2'>Download Resume!</span>
                    </button>
                </div>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-400 lg:h-400 relative'>
                    <Image
                    src= {Avatar}
                    alt= 'avatar image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
)}

export default HeroSection