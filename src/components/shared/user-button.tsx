"use client"
import React from 'react'
import {signOut, useSession} from '@/lib/auth-client'
import { Skeleton } from '../ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { LogOutIcon } from 'lucide-react'
const UserButton = ({showName}:{showName?:boolean}) => {
    
    const {isPending,data} = useSession()


if(isPending)
  return (
    <div className='flex items-center p-2 gap-2 w-full'>
        <Skeleton className='w-7 h-7 rounded-full'/>
       {showName &&  <Skeleton className='flex-1 h-4 '/>}
    </div>
  )
if(data?.user)
 return (
  <DropdownMenu>
    <DropdownMenuTrigger className='w-full  hover:bg-muted-foreground/5 cursor-pointer p-2 rounded-sm flex items-center justify-center group-data-[collapsible=icon]:p-0'>
          <div className='flex items-center w-full gap-2'>
        <Avatar>
            <AvatarFallback>AN</AvatarFallback>
            <AvatarImage src={data.user.image!}/>
        </Avatar>
        {showName && <span className='text-sm font-bold group-data-[collapsible=icon]:hidden transition-all group-data-[collapsible=icon]:opacity-0 opacity-100 duration-300'>{data.user.name}</span>}
    </div>
    </DropdownMenuTrigger >
    <DropdownMenuContent >
        <DropdownMenuItem 
        onClick={()=>signOut().then(()=>{window.location.reload()})}
        className='text-destructive  flex items-center  cursor-pointer'>
            <DropdownMenuLabel
            
            className='flex items-center justify-between w-full text-destructive gap-3 '>
                Logout <LogOutIcon className='text-destructive'/>
            </DropdownMenuLabel>
        </DropdownMenuItem>
      
        <DropdownMenuSeparator/>
        <DropdownMenuLabel >{data.user.email}</DropdownMenuLabel>
    </DropdownMenuContent>
  </DropdownMenu>
 )
}

export default UserButton