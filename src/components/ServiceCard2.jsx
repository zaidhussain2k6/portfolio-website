import React from 'react'
import UIUXDes from '../images/UIUXDesigning.png'

function ServiceCard2() {
  return (
    <div className='rounded bg-[#f9f9f9] items-center flex-col justify-center inline-block xs:px-3 xs:py-8 md:px-10 md:py-12'>
        <div className='items-center gap-4 justify-center flex flex-col'>
            <img className='h-14' src={UIUXDes} alt=""  />
            <h3 className='text-center font-semibold text-xl'>UI/UX Designing</h3>
            
            <p className='text-center w-56 h-1 bg-liteblue'></p>
        </div>

   

        <p className='text-xs font-FontB pt-8 font-medium w-auto max-w-xs text-gray text-center'>We specialize in UI/UX design, where art meets functionality. Our expert designers are dedicated to creating seamless and delightful user experiences. Whether you're launching a new app or revamping an existing website, our team is committed to ensuring that every interaction with your product is intuitive and visually appealing.</p>
    </div>
  )
}

export default ServiceCard2