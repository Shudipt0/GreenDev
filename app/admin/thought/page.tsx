import { DataTable } from '@/app/_components/DataTable';
import { columns } from '@/lib/data/ThoughtColumn';

import { prisma } from '@/lib/utils'
import React from 'react'


const ThoughtPage = async () => {
    const thoughts = await prisma.thought.findMany();
    // console.log(team)
  return (
    <div>
      <DataTable data={thoughts}  columns={columns} />
    </div>
  )
}

export default ThoughtPage