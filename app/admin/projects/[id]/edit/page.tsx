
import ProjectUpdateFormPage from '@/app/admin/_components/ProjectUpdateForm'
import { prisma } from '@/lib/utils'

import React from 'react'


type Props = {
    params: Promise<{id: string}>
}
 const ProjectEditPage = async (props: Props) => {
       const {id} = await props.params;

    const projects = await prisma.project.findUnique({
      where: {id: Number(id)},
    });
  return (
    <div>
     {projects && (
        <ProjectUpdateFormPage
          id={projects.id.toString()}
          category={projects.category}
          title={projects.title}
          description={projects.description}
          image={projects.image}
        />
      )}
    </div>
  )
}

export default ProjectEditPage