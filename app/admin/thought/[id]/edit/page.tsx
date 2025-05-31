

import { upDateThought } from '@/app/actions/service/thought'
import { prisma } from '@/lib/utils'

import React from 'react'


type Props = {
    params: Promise<{id: string}>
}
export const ThoughtEditPage = async (props: Props) => {
       const {id} = await props.params;

    const thoughts = await prisma.thought.findUnique({
      where: {id: Number(id)},
    });
  return (
    <div>
     <form action={upDateThought}>
        <input type="hidden" name='id' id='id' defaultValue={thoughts?.id} readOnly={true} className='hidden' />
        <input type="text" name='experts_name' id='experts_name' defaultValue={thoughts?.experts_name}  />
        <br />
        <input type="text" name='bio_data' id='bio_data' defaultValue={thoughts?.bio_data} />
        <br />
        <input type="text" name='thought' id='thought' defaultValue={thoughts?.thought} />
        <br />
         <input type="text" name='image' id='image' defaultValue={thoughts?.image} />
        <br />
        <button type='submit' >Update</button>
      </form>
    </div>
  )
}