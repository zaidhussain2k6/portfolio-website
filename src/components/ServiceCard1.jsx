import React from 'react'
import WebDes from '../images/WebDesigning.png'
// import UIUXDes from '../images/UIUXDesigning.png'
// import WebDeV from '../images/WebDesigning.png'

function ServiceCard1() {
  return (
    <div className='rounded bg-[#f9f9f9] items-center flex-col justify-center inline-block xs:px-3 xs:py-8 md:px-10 md:py-12'>
        <div className='items-center gap-4 justify-center flex flex-col'>
            <img className='h-14' src={WebDes} alt=""  />
            <h3 className='text-center font-semibold text-xl'>Web Designing</h3>
            
            <p className='text-center w-56 h-1 bg-liteblue'></p>
        </div>

   

        <p className='text-xs font-FontB pt-8 font-medium w-auto max-w-xs text-gray text-center'>We excel in web design. Our team crafts visually captivating and user-friendly websites that drive results. Whether you're a startup, small business, or large corporation, we tailor our services to your unique needs. We focus on aesthetics, functionality, and user experience to help you make a lasting impact in the digital world.</p>
    </div>
  )
}

export default ServiceCard1