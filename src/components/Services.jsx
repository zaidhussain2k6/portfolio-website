import React from 'react'
import Card1 from './ServiceCard1'
import Card2 from './ServiceCard2'
import Card3 from './ServiceCard3'

function Services() {
  return (
    <div>
        <div className="bg-[#cedaf5b7] px-auto py-24 items-center justify-center gap-28 flex flex-col">
            <h4 className='text-4xl font-FontA font-semibold xs:text-center md:text-left text-darkblue'>
            My <span className="text-liteblue underline">Services</span>
            </h4>
            <div className='items-center inline-flex justify-center gap-8 flex-wrap'>
                <Card1/>
                <Card2/>
                <Card3/>
            </div>
        </div>
    </div>
  )
}

export default Services