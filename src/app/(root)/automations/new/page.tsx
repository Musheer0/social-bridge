"use client"
import { Button } from '@/components/ui/button'
import { useAutomationDraft } from '@/stores/use-automation-draft'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
// const types = [
//   {
//     name: "",
//     slug:"POST",
//     poster:'/comment.png'
//   },
//   {
//     name: 'When user sends me a message',
//     slug:"DM",
//     poster:'/dm.png'
//   },
// ]
const Page = () => {
  const {setAutomationType,AutomationType} = useAutomationDraft()
  return (
    <div className='flex relative  p-4 flex-col flex-1 w-full items-center gap-5'>
     
            <h1 className='text-center mx-auto font-bold text-2xl'>Select Your Automation Trigger</h1>
            <h1 className='text-center mx-auto font-semibold  leading-none text-lg text-muted-foreground'>Tap one any one of the cards</h1>
      <div className="types flex-1   w-full flex items-center gap-2 flex-wrap sm:flex-row flex-col">
     

      {/* //comment */}
       <div
       onClick={()=>setAutomationType('POST')}
       className='max-w-lg relative max-h-[700px] group cursor-pointer  relative shadow-lg border w-full flex-1 h-full mx-auto bg-gradient-to-b from-primary rounded-4xl overflow-hidden'>
         {AutomationType==='POST' &&
          <div className='absolute text-2xl z-10  top-0 left-0 w-full h-full bg-zinc-950/50 flex flex-col items-center gap-2 justify-center font-bold text-zinc-100'>
      <CheckCircle />
      <p>Selected</p>
         <Link href={'/automations/new/select-post'}>
      <Button className=' px-5 bg-gradient-to-b from-primary to-green-700 rounded-full   z-10'>
          Next <ArrowRight/>
      </Button>
      </Link>
      </div>
         }
         
          <p className='p-4 font-bold text-xl text-zinc-50 absolute text-center transition-all duration-300 ease-in-out w-full top-0 left-0 '>When user comment&apos;s on my post</p>
        <img src='/comment.png' className='translate-y-[100px] transition-all duration-300 ease-in-out group-hover:translate-y-[60px]  object-cover mx-auto' alt="When user comment's on my post" />
        </div>
        {/* //dm */}
       <div
              onClick={()=>setAutomationType('DM')}

       className='max-w-lg max-h-[700px] relative group cursor-pointer shadow-lg border w-full flex-1 h-full mx-auto  rounded-4xl bg-gradient-to-b to-primary overflow-hidden'>
         
           {AutomationType==='DM' &&
          <div className='absolute text-2xl z-10 top-0 left-0 w-full h-full bg-zinc-950/50 flex flex-col items-center gap-2 justify-center font-bold text-zinc-100'>
      <CheckCircle />
      <p>Selected</p>
      <Link href={'/automations/new/keyword'}>
      <Button className=' px-5 bg-gradient-to-b from-primary to-green-700 rounded-full   z-10'>
          Next <ArrowRight/>
      </Button>
      </Link>
      </div>
         }
           <p className='p-4 font-bold text-xl text-zinc-50  absolute text-center transition-all duration-300 ease-in-out  w-full bottom-0 left-0 '>When user comment&apos;s on my post</p>
        <img src='/dm.png' className='-translate-y-[100px] transition-all duration-300 ease-in-out rounded-4xl h-[90%] group-hover:-translate-y-10  object-cover mx-auto' alt="When user comment's on my post" />
        </div>
      </div>
     
    </div>
  )
}

export default Page