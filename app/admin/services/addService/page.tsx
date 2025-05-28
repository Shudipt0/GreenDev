import { addService } from '@/app/actions/service/service'
import React from 'react'

const page = () => {
  return (
    <div>
       <form action={addService}>
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
