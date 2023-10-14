import React from 'react'
import WebDeV from '../images/WebDevelopment.png'

function ServiceCard3() {
  return (
    <div className='rounded bg-[#f9f9f9] items-center flex-col justify-center inline-block xs:px-3 xs:py-8 md:px-10 md:py-12'>
        <div className='items-center gap-4 justify-center flex flex-col'>
            <img className='h-14' src={WebDeV} alt=""  />
            <h3 className='text-center font-medium text-xl'>Web Development</h3>
            
            <p className='text-center w-56 h-1 bg-liteblue'></p>
        </div>

   

        <p className='text-xs font-FontB pt-8 font-medium w-auto max-w-xs text-gray text-center'>We are your trusted partner for web development. Our seasoned developers are skilled in turning your vision into a functional reality on the web. Whether you require a dynamic website, e-commerce platform, or custom web application, our team is equipped with the expertise to bring your digital projects to life.</p>
    </div>
  )
}

export default ServiceCard3