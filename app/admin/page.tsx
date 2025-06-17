import React from 'react'
import banner from '../images/banner.png'
import Image from 'next/image'

const page = () => {
  return (
    <div className=' w-full ' >      
      <Image src={banner} alt='banner' className='bg-cover h-screen' />
    </div>
  )
}

export default page
