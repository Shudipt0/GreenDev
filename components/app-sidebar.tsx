'use client'
import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Start",
      url: "#",
      items: [
        {
          title: "About Company",
          url: "#",
        },
        {
          title: "Users",
          url: "#",
        },
      ],
    },
    {
      title: "Service",
      url: "#",
      items: [
        {
          title: "Add Service",
          url: "/admin/services/addService",
        },
        {
          title: "View Services " ,
          url: "/admin/services",
        }
      
     ],
    },

        {
      title: "Our Team",
      url: "#",
      items: [
        {
          title: "Add Team Member",
          url: "/admin/team/addTeamMember",
        },
        {
          title: "View Team " ,
          url: "/admin/team",
         
        }
      
     ],
    },
   
   
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathName = usePathname();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
      <div className="flex items-end gap-4">
        <h1 className="text-[22px] text-black font-bold " >Dashboard</h1>
        <h3 className="text-[16px] font-serif text-blue-600 ">GreenDev.</h3>
      </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className={`${pathName === item.url? 'bg-blue-200 hover:bg-blue-200': ''}`} >
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
