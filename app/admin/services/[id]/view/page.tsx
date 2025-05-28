import { prisma } from '@/lib/utils';
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
    <div>
      {service?.serviceName}
    </div>
  )
}

export default page
