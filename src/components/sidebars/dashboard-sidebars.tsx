"use client"
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from '@/components/ui/sidebar'
import UserButton from '../shared/user-button'
import Image from 'next/image'
import { analytics_links, automation_links, plans_links } from '@/lib/links'
import { ModeToggle } from '../ui/mode-toggle'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const DashboardSidebar = () => {
    const pathname = usePathname()
    const isActive = (path:string)=>path===pathname
  return (
    <Sidebar collapsible='icon' className='group'>
                <SidebarRail/>

        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem className='flex items-center gap-2'>
                  <Image 
                  src={'/logo.svg'}
                  width={30}
                  height={30}
                  alt='logo'
                  />
                  <p className='font-black group-data-[collapsible=icon]:hidden'>Social Bridge</p>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
       <SidebarContent>
         <SidebarGroup>
            <SidebarGroupLabel>
                Analytics
            </SidebarGroupLabel>
           <SidebarGroupContent>
            <SidebarMenu>
             {analytics_links.map((e,i)=>{
                return(
                    <React.Fragment key={i}>
                        <SidebarMenuItem
                        
                        >
                          <Link href={e.href}>
                            <SidebarMenuButton
                             isActive={isActive(e.href)}
                              tooltip={e.name}
                            >
                                <e.icon/>
                                {e.name}
                            </SidebarMenuButton>
                           </Link>
                        </SidebarMenuItem>
                    </React.Fragment>
                )
            })}
           </SidebarMenu>
           </SidebarGroupContent>
        </SidebarGroup>
            <SidebarGroup>
            <SidebarGroupLabel>
                Automations
            </SidebarGroupLabel>
                    <SidebarGroupContent>
            <SidebarMenu>
             {automation_links.map((e,i)=>{
                return(
                    <React.Fragment key={i}>
                        <SidebarMenuItem>
                          <Link href={e.href}>
                            <SidebarMenuButton
                             isActive={isActive(e.href)}
                              tooltip={e.name}
                            >
                                <e.icon/>
                                {e.name}
                            </SidebarMenuButton>
                           </Link>
                        </SidebarMenuItem>
                    </React.Fragment>
                )
            })}
           </SidebarMenu>
           </SidebarGroupContent>
        </SidebarGroup>
             <SidebarGroup>
            <SidebarGroupLabel>
                Plans & Billings
            </SidebarGroupLabel>
                    <SidebarGroupContent>
            <SidebarMenu>
             {plans_links.map((e,i)=>{
                return(
                    <React.Fragment key={i}>
                        <SidebarMenuItem>
                           <Link href={e.href}>
                            <SidebarMenuButton
                             isActive={isActive(e.href)}
                              tooltip={e.name}
                            >
                                <e.icon/>
                                {e.name}
                            </SidebarMenuButton>
                           </Link>
                        </SidebarMenuItem>
                    </React.Fragment>
                )
            })}
           </SidebarMenu>
           </SidebarGroupContent>
        </SidebarGroup>
            <SidebarGroup>
            <SidebarGroupLabel>
               Theme
            </SidebarGroupLabel>
                    <SidebarGroupContent>
            <SidebarMenu>
             <SidebarMenuItem>
                            <SidebarMenuButton>
                               <ModeToggle/>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
           </SidebarMenu>
           </SidebarGroupContent>
        </SidebarGroup>
       </SidebarContent>
        <SidebarFooter>
        <UserButton showName/>
        </SidebarFooter>
    </Sidebar>
  )
}

export default DashboardSidebar