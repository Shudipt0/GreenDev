
import { upDateProject } from '@/app/actions/service/projects'
import { prisma } from '@/lib/utils'

import React from 'react'


type Props = {
    params: Promise<{id: string}>
}
export const ProjectEditPage = async (props: Props) => {
       const {id} = await props.params;

    const projects = await prisma.project.findUnique({
      where: {id: Number(id)},
    });
  return (
    <div>
     <form action={upDateProject}>
        <input type="hidden" name='id' id='id' defaultValue={projects?.id} readOnly={true} className='hidden' />
        <input type="text" name='category' id='category' defaultValue={projects?.category}  />
        <br />
        <input type="text" name='title' id='title' defaultValue={projects?.title} />
        <br />
        <input type="text" name='description' id='description' defaultValue={projects?.description} />
        <br />
         <input type="text" name='image' id='image' defaultValue={projects?.image} />
        <br />
        <button type='submit' >Update</button>
      </form>
    </div>
  )
}