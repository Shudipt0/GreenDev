"use client"

import * as React from "react"
import {
  ColumnDef,
 
} from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deleteProject } from "@/app/actions/service/projects"






// Define the Services type if not already defined or import it from the correct location
type Projects = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

export const columns: ColumnDef<Projects>[] = [
 {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize ">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "title",
  header: "Title",
    cell: ({ row }) => <div className="capitalize">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "description",
  header: "Description",
    cell: ({ row }) => <div className="capitalize">{row.getValue("description")}</div>,
  },
   {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("image")}</div>
    ),
  },
  
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const service = row.original
// delete item
      const handleDelete = async () =>{
        const id = row.getValue("id")
        const deleteItem = await deleteProject(id)
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={()=> (window.location.href = `/admin/projects/${row.getValue('id')}/view`)} >
              View Details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=> (window.location.href = `/admin/projects/${row.getValue('id')}/edit`)}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]