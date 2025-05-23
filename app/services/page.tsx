import React from 'react';
import Common from '../_components/Common';

const serviceDescription =  {
  page: "Our Services",
  title: "Services We Offers",
  description: "With  Our Awesome team we offers a variaty of services from UI/UX design to Video Productions,Our Goal is to help you on your Road to Create your product",
  buttonText: "Check our Projects",
  buttonLink: "/projects"
}

const page = () => {
  return (
   <div className='w-full container mx-auto px-6 lg:px-28 mt-32 flex flex-col items-center '>
     {/* part 1 */}
      <Common page={serviceDescription.page} title={serviceDescription.title}  description={serviceDescription.description} 
      buttonText={serviceDescription.buttonText} buttonLink={serviceDescription.buttonLink} />
     {/* part 2 */}

      <div className='w-full lg:py-32 ' >
          <h4 className='text-[22px] text-blue-500 font-bold pb-5 ' >Our Process</h4>

       <div className=' flex flex-col lg:flex-row justify-between gap-16' >
         {/* left site */}
        <div className='w-full   ' >
          <h1 className='text-[40px] font-bold leading-tight ' >Our Working Process help you to get the best from our team skill  </h1>
        </div>
        {/* right site */}
       <div className='w-full  ' >
        <p className='text-[#0E0E2C]/60 text-[22px] ' >With Our team knowloadg of different process
We Choose the perfect process to suit the Development of your Product </p>
       </div>
       </div>
      </div>

      {/* part 3 */}
      <div className='w-full lg:h-[435px] flex items-center ' >
         <div className='grid grid-cols-1 lg:grid-cols-4 justify-between items-center ' >
            {/* cart */}
            <div className='lg:w-[250px] space-y-4' >
            <h1 className='text-[22px] font-semibold flex gap-4 items-end ' ><span className='text-3xl font-bold text-blue-500 ' >01</span>User Research</h1>
            <p className='text-[16px] text-[#0E0E2C]/60 ' >User research helps us find out exactly how our target customers feel when interacting with a product </p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default page
