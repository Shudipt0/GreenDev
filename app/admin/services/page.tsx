import { DataTable } from '@/app/_components/DataTable'
import { prisma } from '@/lib/utils'
import {columns} from '@/lib/data/ServiceColumn'

const page = async () => {
  const services = await prisma.service.findMany();
  // console.log(services)
  return (
    <div>
      <DataTable data={services} columns={columns} />
    </div>
  )
}

export default page
