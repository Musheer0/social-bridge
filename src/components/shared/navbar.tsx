"use client"
import Image from 'next/image'
import React from 'react'
import UserButton from './user-button'
import { analytics_links, automation_links, plans_links } from '@/lib/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export const Navbar = () => {
  const pathname = usePathname()
      const isActive = (path:string)=>path===pathname

  return (
  <>
   <nav className='w-full p-2 flex justify-between border-b md:hidden  py-4'>
        <div className='flex items-center gap-2'>
                  <Image
                  src={'/logo.svg'}
                  width={30}
                  height={30}
                  alt='logo'
                  />
                  <p className='font-black '>Social Bridge</p>
                </div>
                <UserButton/>
   </nav>
   <div className='fixed z-[9999] backdrop-blur-3xl bottom-0 md:hidden flex items-center justify-between left-0 w-full bg-background/50 p-2'>
   {analytics_links.map((e,i)=>{
    const acitve = isActive(e.href)
    return(
      <React.Fragment key={i}>
        <Link
        href={e.href}
        className='flex flex-col items-center justify-center gap-2'>
          <span className={cn(
            ' px-0 transition-all duration-300 py-2 rounded-full',
            acitve && 'bg-primary px-5'
          )}>
            <e.icon size={15}/>
          </span>
          <p className='text-xs text-muted-foreground'>{e.name}</p>
        </Link>
      </React.Fragment>
    )
   })}
   {automation_links.map((e,i)=>{
    const acitve = isActive(e.href)
    return(
      <React.Fragment key={i}>
        <Link
        href={e.href}
        className='flex flex-col items-center justify-center gap-2'>
          <span className={cn(
            ' px-0 transition-all duration-300 py-2 rounded-full',
            acitve && 'bg-primary px-5'
          )}>
            <e.icon size={15}/>
          </span>
          <p className='text-xs text-muted-foreground'>{e.name}</p>
        </Link>
      </React.Fragment>
    )
   })}
   {plans_links.map((e,i)=>{
    const acitve = isActive(e.href)
    return(
      <React.Fragment key={i}>
        <Link
        href={e.href}
        className='flex flex-col items-center justify-center gap-2'>
          <span className={cn(
            ' px-0 transition-all duration-300 py-2 rounded-full',
            acitve && 'bg-primary px-5'
          )}>
            <e.icon size={15}/>
          </span>
          <p className='text-xs text-muted-foreground'>{e.name}</p>
        </Link>
      </React.Fragment>
    )
   })}
   </div>
  </>
  )
}
