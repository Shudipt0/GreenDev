'use client'

import { updateUser } from "@/app/actions/user";

interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

const UserUpdateFormPage = (userData: UserData) => {
  return (
    <div className='w-full flex flex-col items-start  ' >
     <h3 className='text-[22px] text-black/80  font-semibold' > User Update</h3>
      <form action={updateUser} className='w-[600px] border p-10 flex flex-col justify-center items-center space-y-5 ' >
        <input type="hidden" name='id' value={userData.id} />
           <div className='w-full flex gap-4 items-center '  >
             <label htmlFor="email">Email</label>
             <input type="email" name='email' id='email' defaultValue={userData.email} className='border-2 border-gray-300 rounded px-2 py-1 ' disabled />
           </div>
           <div className='w-full flex gap-4 items-center '  >
             <label htmlFor="firstName">First Name:</label>
             <input type="text" name='firstName' id='firstName' defaultValue={userData.firstName} className='border-2 border-gray-300 rounded px-2 py-1 ' />
           </div>
           <div className='w-full flex gap-4 items-center '  >
             <label htmlFor="lastName">Last Name</label>
             <input type="text" name='lastName' id='lastName' defaultValue={userData.lastName} className='border-2 border-gray-300 rounded px-2 py-1 ' />
           </div>
            <div className='w-full flex gap-4 items-center'  >
             <label htmlFor="role">Role</label>
             <select name="role" id="role" defaultValue={userData.role} >
              <option value="none">Remove</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
             </select>
           </div>
           <button type='submit' className='text-white bg-blue-500 hover:bg-blue-700 rounded px-3 py-1' >Update User</button>
      </form>
    </div>
  )
}

export default UserUpdateFormPage
