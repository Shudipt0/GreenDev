import { upDateService } from '@/app/actions/service/service'
import { prisma } from '@/lib/utils'
import { number } from 'motion/react'
import React from 'react'


type Props = {
    params: Promise<{id: string}>
}
const page = async (props: Props) => {
    const {id} = await props.params
    // console.log(typeof(id))
    
    const service = await prisma.service.findUnique({
       where: { id: Number(id) },
    })
  return (
    <div>
     <form action={upDateService}>
        <input type="hidden" name='id' id='id' defaultValue={service?.id} readOnly={true} className='hidden' />
        <input type="text" name='name' id='name' defaultValue={service?.serviceName}  />
        <br />
        <input type="text" name='description' id='description' defaultValue={service?.description} />
        <br />
         <input type="text" name='image' id='image' defaultValue={service?.image} />
        <br />
        <button type='submit' >Update</button>
      </form>
    </div>
  )
}

export default page
