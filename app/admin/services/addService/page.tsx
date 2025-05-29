'use client'

import { addService } from '@/app/actions/service/service'
import React, { useActionState } from 'react'


const page = () => {
  const [state , action, isPending] = useActionState(addService , null)
  return (
    <div>
       <form action={action}>
              <label htmlFor="serviceName">Service Name</label>
              <input type="text" name='serviceName' id='serviceName'   />
              <br />
              <label htmlFor="description">Description</label>

              <input type="text" name='description' id='description' />
              <br />
              <label htmlFor="image">Image</label>
               <input type="text" name='image' id='image'  />
              <br />
              <button type='submit' >add</button>
            </form>
    </div>
  )
}

export default page
