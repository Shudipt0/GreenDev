import React from 'react'
import TestCarousel from './TestCarousel'

const Testmonial = () => {
  return (
    <section className='h-[700px] bg-[#A0A4AB]/10 '>
        <div className="w-full lg:w-[660px] space-y-4 lg:space-y-8" > 
        <h4 className="text-[22px] font-semibold text-blue-500 ">
        Testmonial
      </h4>
      <h1 className="text-[34px] font-bold leading-tight ">
         You still hesitate about working with Us ? Check what They say about Us      </h1>
      </div>
      {/* carousel */}
      <div className='w-full '>
          <TestCarousel/>
      </div>
      
    </section>
  )
}

export default Testmonial
