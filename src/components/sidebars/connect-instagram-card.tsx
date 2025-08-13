"use client"
import { ig_oauth_url } from '@/lib/constants';
import { useInstagram } from '@/stores/use-instagram';
import { InstagramIcon } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';

const ConnectInstagramCard = () => {
    const router = useRouter();
    const {ig,isLoading} = useInstagram();
    const HandleClick = ()=>{
        if(!ig) router.push(ig_oauth_url)
    }
  return (
   <div className="instagram w-full max-w-xl flex items-center justify-between bg-gradient-to-l from-red-600 to-pink-600 text-zinc-50 p-5 rounded-xl">
                <div className="info">
                    <InstagramIcon/>
                    <p className='font-semibold'>Instagram</p>
                    <p className='text-xs opacity-70'>Connect your instagram account to enable automations</p>
                </div>
                <Button
                disabled={!!ig || isLoading}
                onClick={HandleClick}
                variant={'outline'} className='px-4 hover:bg-zinc-400/10  text-zinc-900 dark:text-zinc-200 rounded-full'>
                    {ig ? 'Connected':isLoading ? 'Loading':'Connect'}
                </Button>
            </div>
  )
}

export default ConnectInstagramCard