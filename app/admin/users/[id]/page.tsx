import { updateUser } from '@/app/actions/user';
import { checkRole } from '@/lib/authUtils';
import { clerkClient } from '@clerk/nextjs/server';
import Link from 'next/link';
import React from 'react'
import UserUpdateFormPage from '../../_components/UserUpdateForm';

type Props = {
    params: Promise<{id: string}>
}
const UserUpdatePage = async (props: Props) => {
    const {id} = await props.params;

    const isAdmin = await checkRole('admin');
    if(!isAdmin) return <div className='mx-auto p-64' >Unauthorized. Must be Admin to access, <Link href='/admin/users' className='text-[18px] text-blue-500 font-semibold underline ' ></Link></div>

    const client = await clerkClient();
    const user = await client.users.getUser(id);
    const userData = {
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
      firstName: user.firstName ?? "Empty",
      lastName: user.lastName ?? "Empty",
      role: user.publicMetadata?.role as string ?? 'none'
    }

    // console.log(userData)

  return (
    <div>
        <UserUpdateFormPage
          id={userData.id}
          email={userData.email}
          firstName={userData.firstName}
          lastName={userData.lastName}
          role={userData.role}
        />
    </div>
  )
}

export default UserUpdatePage