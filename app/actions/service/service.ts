
import { prisma } from "@/lib/utils"
import { redirect } from "next/navigation";


export const upDateService = async (data: FormData)=> {
  'use server'
//   console.log(data)
// update service

const updateService = await prisma.service.update({
    where: {
        id: Number(data.get('id')),
    },
    data: {
       serviceName: (data.get('serviceName') ?? "") as string,
       description: (data.get('description') ?? "") as string,
       image: (data.get('image') ?? "") as string,
    },
});

console.log('successfully updated', updateService);
redirect("/admin/services")

};

export const addService = async (data: FormData) => {
    'use server'
    const addNew = await prisma.service.create({
        data: {
            
            serviceName: "" as string ,
            description: "" as string ,
            image: "" as string ,
        }
    });

    console.log("successfully added",addNew);
redirect("/admin/services")

    
}