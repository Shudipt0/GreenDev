import { DataTable } from '@/app/_components/DataTable'
import { prisma } from '@/lib/utils'
import React from 'react'

const page = async () => {
  const services = await prisma.service.findMany();
  // console.log(services)
  return (
    <div>
      <DataTable services={services} />
    </div>
  )
}

export default page
