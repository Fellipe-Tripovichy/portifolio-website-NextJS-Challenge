"use client"
import React from 'react'
import Image from 'next/image'
import { HiArrowDown } from "react-icons/hi"
import { Link } from "react-scroll"

const HeroSection = () => {
  return (
    <section id='about'>
        <div className='flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-52 sm:py-32'>
            <div className='md:w-1/2 md:mt-2'>
                <Image className='rounded-full shadow-2xl' alt='' src='/photo.jpg' width={300} height={300}/>
            </div>
            <div className='md:w-1/2 md:mt-2'>
                <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>Hi, I'm Fellipe</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>I am a Brazilian tech enthusiast currently pursuing a Bachelor's degree in Information Systems at the University of São Paulo. I have experience working on challenging but rewarding tech projects, designing and developing digital products.</p>
            </div>
        </div>
        <div className='flex flex-row justify-center'>
            <Link to='skills' activeClass='active' spy={true} smooth={true} offset={-100} duration={500}>
                <HiArrowDown size={35} className='animate-bounce'/>
            </Link>
        </div>
    </section>
  )
}

export default HeroSection