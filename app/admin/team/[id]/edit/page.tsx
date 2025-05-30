
import { upDateTeamMember } from '@/app/actions/service/team'
import { prisma } from '@/lib/utils'

import React from 'react'


type Props = {
    params: Promise<{id: string}>
}
export const TeamEditPage = async (props: Props) => {
       const {id} = await props.params;

    const teamMember = await prisma.team.findUnique({
      where: {id: Number(id)},
    });
  return (
    <div>
     <form action={upDateTeamMember}>
        <input type="hidden" name='id' id='id' defaultValue={teamMember?.id} readOnly={true} className='hidden' />
        <input type="text" name='name' id='name' defaultValue={teamMember?.name}  />
        <br />
        <input type="text" name='profession' id='profession' defaultValue={teamMember?.profession} />
        <br />
        <input type="text" name='bio_data' id='bio_data' defaultValue={teamMember?.bio_data} />
        <br />
         <input type="text" name='image' id='image' defaultValue={teamMember?.image} />
        <br />
        <button type='submit' >Update</button>
      </form>
    </div>
  )
}