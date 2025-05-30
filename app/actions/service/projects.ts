"use server";
import { prisma } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upDateProject = async (data: FormData) => {
  //   console.log(data)
  // update service

  const updateProject = await prisma.project.update({
    where: {
      id: Number(data.get("id")),
    },
    data: {
      category: (data.get("category") ?? "") as string,
      title: (data.get("title") ?? "") as string,
      description: (data.get("description") ?? "") as string,
      image: (data.get("image") ?? "") as string,
    },
  });

  // console.log('successfully updated', updateService);
  revalidatePath("/admin/projects")
  redirect("/admin/projects");
};

// add service
export const addProject = async (prevState: any, data: FormData) => {
  const serviceName = data.get("serviceName");
  const description = data.get("description");
  const image = data.get("image");

  if (!serviceName || !description || !image) {
    throw new Error("Missing fields");
  }

  const addNew = await prisma.project.create({
    data: {
      category: (data.get("category") ?? "") as string,
      title: (data.get("title") ?? "") as string,
      description: (data.get("description") ?? "") as string,
      image: (data.get("image") ?? "") as string,
    },
  });

  // console.log("successfully added",addNew);
  revalidatePath("/admin/projects")
  redirect("/admin/projects");
};

// delete service
export const deleteProject = async (data: any) => {
  const deleteItem = await prisma.project.delete({
    where: { id: Number(data) },
  });
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/projects")

};
