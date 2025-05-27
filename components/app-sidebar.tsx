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
      title: "Sections",
      url: "#",
      items: [
        {
          title: "Services",
          url: "#",
        },
        {
          title: "Developers and Disgners",
          url: "#",
          isActive: true,
        },
        {
          title: "All Projects",
          url: "#",
        },
        {
          title: "Expert's thoughts",
          url: "#",
        },
        {
          title: "Customers Contact inforation",
          url: "#",
        },
      
      ],
    },
   
   
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
                    <SidebarMenuButton asChild isActive={item.isActive}>
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
