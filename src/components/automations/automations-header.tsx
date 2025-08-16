"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { useAutomationDraft } from '@/stores/use-automation-draft'
import { InfiniteData, useQueryClient } from '@tanstack/react-query'
import { useUser } from '@/stores/use-user'
import { AutomationsPage } from '@/types/types'

const AutomationHeader = ({hideBanner}:{hideBanner?:boolean}) => {
  const router = useRouter()
  const query_client = useQueryClient()
  const {user} = useUser()
    const automations = query_client.getQueryData<InfiniteData<AutomationsPage>>(['automations', 'user-automations'])
  const isRateLimited = (() => {
  if (!automations || !user) return false;

  const todayAutomations = automations.pages[0].automations.filter(a => {
    const createdDate = new Date(a.createdAt);
    const today = new Date();
    return (
      createdDate.getFullYear() === today.getFullYear() &&
      createdDate.getMonth() === today.getMonth() &&
      createdDate.getDate() === today.getDate()
    );
  });
  console.log(todayAutomations)
  // free users limited to 1 automation per day
  return user.plan === 'free' && todayAutomations.length >= 2;
})();

  const [showDialog, setShowDialog] = useState(false)
  const {AutomationType,PostId,Keyword,resetAll} = useAutomationDraft()
  const handleCreateClick = () => {
    const existing_draft =AutomationType
    if (existing_draft) {
      setShowDialog(true)
      return
    }
    router.push('/automations/new')
  }

  const handleContinueOld = () => {

  // If it has automation type but NO PostId or Keyword
  if (AutomationType && !PostId && !Keyword) {
    if (AutomationType === "DM") {
      router.push("/automations/new/keyword")
      return
    }
    // for post type
    router.push("/automations/new/select-post")
    return
  }

  // If it has automation type (and it's a post, comment, poll, etc. — basically NOT DM)
  // and has both PostId and Keyword
  if (AutomationType && PostId && Keyword) {
    router.push("/automations/new/template")
    return
  }

  // If it has PostId but NO Keyword
  if (PostId && !Keyword) {
    router.push("/automations/new/keyword")
    return
  }

  // If it has NO PostId
  if (!PostId) {
    router.push("/automations/new/select-post")
    return
  }

  // Default fallback — send them to base automations page
  router.push("/automations/new")
}


  const handleDeleteAndNew = () => {
    localStorage.removeItem('product-template-store')
    setShowDialog(false)
    resetAll()
    router.push('/automations/new')
  }

  return (
    <>
   {(AutomationType && hideBanner && !isRateLimited) &&
    <div className='w-full flex items-center justify-between p-2'>
       <div className='flex-1 flex items-center gap-2 rounded-xl justify-between p-4 bg-destructive/50'>
         <h1 className='sm:text-xl  font-bold'>You have unsaved changes</h1>
        <Button onClick={handleContinueOld} className='px-4 ml-auto' variant={'outline'}>
       Continue
      </Button>
       <Button onClick={()=>{
         localStorage.removeItem('product-template-store')
    setShowDialog(false)
    resetAll()
       }} className='px-4' variant={'destructive'}>
       Discard
      </Button>
       </div>
    </div>
   }
   
    <div className='w-full p-2 py-4 flex items-center justify-between'>
      <h1 className='font-semibold text-lg'>Your Automations</h1>
      <Button disabled={isRateLimited} onClick={handleCreateClick} className='px-4' variant={'outline'}>
       {isRateLimited ? "you've reached your daily limit":<> Create New <span className='md:flex hidden'>Automation</span> <PlusIcon /></>}
      </Button>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Continue or Start Fresh?</DialogTitle>
            <DialogDescription>
              You already have an existing draft. Do you want to keep working on it or delete it and start a new project?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2">
            <Button variant="secondary" className='px-3' onClick={handleContinueOld}>
              Continue Old Project
            </Button>
            <Button variant="destructive" className='px-4' onClick={handleDeleteAndNew}>
              Delete & Start Fresh
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    </>
  )
}

export default AutomationHeader
