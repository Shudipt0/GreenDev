import { DataTable } from '@/app/_components/DataTable';

import { prisma } from '@/lib/utils'
import React from 'react'
import { columns } from '../../../lib/data/ProjectColumn';

const ProjectPage = async () => {
    const projects = await prisma.project.findMany();
    // console.log(team)
  return (
    <div>
      <DataTable data={projects}  columns={columns} />
    </div>
  )
}

export default ProjectPage