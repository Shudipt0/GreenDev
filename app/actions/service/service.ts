
import { prisma } from "@/lib/utils"
import { redirect } from "next/navigation";


export const upDateService = async (data: FormData)=> {
  'use server'
//   console.log(data)
// update service

const updateService = await prisma.service.update({
    where: {
        id: data.get('id') as string
    },
    data: {
       serviceName: data.get('serviceName') as string,
       description: data.get('description') as string,
       image: data.get('image') as string,
    },
});

console.log('successfully updated', updateService);
redirect("/admin/services")

}