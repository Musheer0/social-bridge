"use client"
import { GetUserInstagram } from '@/actions/user/accounts/instagram'
import { useSession } from '@/lib/auth-client'
import { useInstagram } from '@/stores/use-instagram'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

const InitializeInstagram = () => {
    const {isPending, data} = useSession();
    const {setIsLoading,setIG} = useInstagram()
    const getInstagram = async()=>{
      if(isPending) return;
      toast.loading('connecting to instagrams',{id:'insta-loading'})
      setIsLoading(true);
      const ig = await GetUserInstagram();
      toast.dismiss('insta-loading')
      if(!ig) toast.error("you have not linked your instagram account");
      else toast.success("connected")
      setIG(ig)
      setIsLoading(false);
    }
    useEffect(()=>{
      getInstagram()
    },[data])
  return (
    <div className='absolute'>

    </div>
  )
}

export default InitializeInstagram