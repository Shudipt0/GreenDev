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
      <div className='w-full p-32 space-y-6  ' >
        <h4 className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm'>Id: {service?.id}</h4>
        <h1 className='text-3xl font-bold text-black/80 bg-slate-100 px-8 py-3 rounded shadow-sm' >{service?.serviceName}</h1>
        <p className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm' >{service?.description}</p>
        {service?.image && (
          <div className='w-[300px] bg-slate-100 p-5 rounded shadow-sm'><Image src={service.image} alt="image" width={300} height={200} /></div>
        )}
      </div>
    </div>
  )
}

export default page
