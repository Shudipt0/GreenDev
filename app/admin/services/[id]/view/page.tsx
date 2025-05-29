import { prisma } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

type Props = {
    params: Promise<{id: string}>
}

const page = async (props: Props) => {
    const {id} = await props.params;

    const service = await prisma.service.findUnique({
        where: {id: Number(id)},
    })
  return (
    <div className='w-full flex items-center justify-center ' >
      <div className='w-full p-32 space-y-4 ' >
        <h4 className='text-lg font-semibold text-black/60 '>Id: {service?.id}</h4>
        <h1 className='text-3xl font-bold text-black/80 ' >{service?.serviceName}</h1>
        <p className='text-lg font-semibold text-black/60 ' >{service?.description}</p>
        {/* {service?.image && (
          <div className='w-[300px] '  ><Image src={service.image} alt="image"  /></div>
        )} */}
      </div>
    </div>
  )
}

export default page
