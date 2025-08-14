"use client"
import { Button } from '@/components/ui/button'
import { signIn } from '@/lib/auth-client'
import { GithubIcon, Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
  const [isLoading ,setIsLoading] = useState(false)
  return (
    <div 
    className='w-full h-screen sm:flex-row flex-col flex '
    >
      <div className="left sm:flex-1 flex-col items-center justify-center sm:justify-between flex h-full p-10">
        <div className="logo justify-start w-full hidden sm:flex items-center gap-2">
         
        <p className='text-xl  font-bold'>Social Bridge</p>
        </div>
       <div className="content flex flex-col items-center sm:items-start w-full">
         <Image
        src={'logo.svg'}
        width={100}
        height={100}
        alt='logo'
        />
         <h1 className='text-3xl py-3  font-black'>
          Sign up for <br className='hidden sm:flex'/>Social Bridge
        </h1>
        <p className='text-muted-foreground'>
          Here for the first time? Let&apos;s get you settled in

        </p>
       </div>

       <Button className='mr-auto hidden sm:flex hover:bg-transparent hover:underline' variant={'ghost'} >Privacy Policy</Button>
      </div>

      <div className="right flex flex-col p-5 items-center justify-center flex-1">
        <Button
        onClick={()=>{
          setIsLoading(true);
          signIn.social({provider:'github'})
        }}
        disabled={isLoading}
        size={'lg'} className='px-20 py-4 rounded-full' variant={'outline'}>
          {isLoading ?
        <Loader2Icon className='animate-spin'/>
        :
        <>
        <GithubIcon/>Continue with Github
        </>  
        }
        </Button>
        {/* <Button
        onClick={()=>{
          setIsLoading(true);
          signIn.social({provider:'google'})
        }}
        disabled={isLoading}
        size={'lg'} className='px-20 my-2 py-4 rounded-full' variant={'outline'}>
          {isLoading ?
        <Loader2Icon className='animate-spin'/>
        :
        <>
        Continue with Google
        </>  
        }
        </Button> */}
        <p className='max-w-[250px] text-xs text-center py-5'>
          By signing up, you agree to Social Bridge&apos;s
Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default Page