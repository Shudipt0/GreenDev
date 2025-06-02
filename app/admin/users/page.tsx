import { clerkClient } from '@clerk/nextjs/server'
import Image from 'next/image';
import React from 'react'

const UserPage = async () => {
    const client = await clerkClient();
    const users = await client.users.getUserList()
    console.log(users)
  return (
    <div>
      <table className='w-full table-auto' >
        <tbody>
            {users?.data?.map((user)=> (
                <tr key={user.id} >
                    <td><Image src={user.imageUrl} alt='profileImage' width={50} height={50} className='w-12 rounded-full ' /></td>
                    <td>{user.fullName}</td>
                    <td>{user.primaryEmailAddress ? user.primaryEmailAddress.emailAddress : ''}</td>
                    <td>{JSON.stringify(user.publicMetadata.role) || 'Default'}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserPage
