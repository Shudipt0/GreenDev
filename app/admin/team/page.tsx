import { DataTable } from '@/app/_components/DataTable';
import { columns } from '@/lib/data/TeamColumn';
import { prisma } from '@/lib/utils'
import React from 'react'

const TeamPage = async () => {
    const team = await prisma.team.findMany();
    // console.log(team)
  return (
    <div>
      <DataTable data={team}  columns={columns} />
    </div>
  )
}

export default TeamPage
