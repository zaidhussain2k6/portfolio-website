import React from 'react'
import Linkedin from '../images/linkedin.svg'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Behance from '../images/behance.svg'
import AboutMe from '../images/AboutMe.svg'

function AboutMeSec() {
  return (
    <div className='flex-wrap px-24 xs:gap-12 lg:gap-16 py-36 flex items-center justify-between md:gap-28'>

    <div className='py-24 items-center flex gap-12'>
      <div>
      <img src={AboutMe} alt="" />
      </div>

        <div className='space-y-8 items-center justify-center flex-col flex'>
          <img className='cursor-pointer' src={Linkedin} alt="" />
          <img className='cursor-pointer' src={Facebook} alt="" />
          <img className='cursor-pointer' src={Instagram} alt="" />
          <img className='cursor-pointer' src={Behance} alt="" />
        </div>
        </div>

    
          <div className='space-y-6'>
            <h3 className='font-FontA font-semibold lg:text-4xl xl:text-6xl text-3xl text-darkblue'>UI/UX Designer & Frontend Developer</h3>
            <p className='font-medium xl:text-2xl text-xl text-gray w-auto max-w-[820px] xl:max-w-[1200px] font-FontB'>I'm a passionate Designer and Developer hailing from Pakistan. With a profound love for coding, I find immense joy in crafting visually appealing and functional digital experiences. Let's create something remarkable together! 💻📱🚀</p>
          </div>

    </div>
  )
}

export default AboutMeSec