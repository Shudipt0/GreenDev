import { prisma } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

type Props = {
    params: Promise<{id: string}>
}

const teamViewPage = async (props: Props) => {
    const {id} = await props.params;

    const projects = await prisma.project.findUnique({
        where: {id: Number(id)},
    })
  return (
    <div className='w-full flex items-center justify-center ' >
      <div className='w-full p-32 space-y-6  ' >
        <h4 className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm'>Id: {projects?.id}</h4>
        <h1 className='text-3xl font-bold text-black/80 bg-slate-100 px-8 py-3 rounded shadow-sm' >{projects?.category}</h1>
        <p className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm' >{projects?.title}</p>
        <p className='text-lg font-semibold text-black/60 bg-slate-100 px-8 py-3 rounded shadow-sm' >{projects?.description}</p>
        {projects?.image && (
          <div className='w-[300px] bg-slate-100 p-5 rounded shadow-sm'><Image src={projects?.image} alt="image" width={300} height={200} /></div>
        )}
      </div>
    </div>
  )
}

export default teamViewPage
