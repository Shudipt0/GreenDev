import { DataTable } from '@/app/_components/DataTable';
import { columns } from '@/lib/data/UserContactColumn';

import { prisma } from '@/lib/utils'
import React from 'react'

const UserContactPage = async () => {
    const userContact = await prisma.contact.findMany();
    // console.log(team)
  return (
    <div>
      <DataTable data={userContact}  columns={columns} />
    </div>
  )
}

export default UserContactPage