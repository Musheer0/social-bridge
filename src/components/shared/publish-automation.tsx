"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateAutomation } from '@/actions/automations/create-automation'
import { toast } from 'sonner'
import { Loader2Icon } from 'lucide-react'
import { useAutomationDraft } from '@/stores/use-automation-draft'
import Confetti from "react-confetti";
import { useRouter } from 'next/navigation'
import { AutomationsPage } from '@/types/types'
import { useUser } from '@/stores/use-user'

const PublishAutomation = () => {
  const query_client = useQueryClient()
  const {user} = useUser()
  const { Title, Text, ProductImage, Buttons, Keyword, AutomationType, PostId, TemplateType ,resetAll,post_url} = useAutomationDraft()
  const disabled = !Keyword || !AutomationType || !TemplateType 
  const router = useRouter()
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

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: CreateAutomation,
    onError: () => {
      toast.error('error publishing your automation, try again');
     
    },
   onSuccess: (data) => {
    if('error' in data){
      toast.error('you have reached your limit for today')
         router.push('/automations');
        return;
    }
  toast.success('published ');
  localStorage.removeItem('product-template-store');
  resetAll();
  router.push('/automations?conffeti=true');

  // 1️⃣ Update automations list
  query_client.setQueryData<InfiniteData<AutomationsPage>>(
    ['automations', 'user-automations'],
    (oldData) => {
      if (!oldData) return oldData;

      const firstPage = oldData.pages[0];
      const updatedPages = [...oldData.pages];
      updatedPages[0] = {
        ...firstPage,
        automations: [data, ...firstPage.automations],
      };

      return {
        ...oldData,
        pages: updatedPages,
      };
    }
  );

  // 2️⃣ Update dashboard cache
  query_client.setQueryData<{ automations: number; success: number; failure: number } | null>(
    ['dashboard'],
    (oldDashboard) => {
      if (!oldDashboard) return oldDashboard;
      return {
        ...oldDashboard,
        automations: oldDashboard.automations + 1,
      };
    }
  );
}

  })

  return (
    <>
     
      <Button
        disabled={isPending || disabled||isRateLimited }
        onClick={() => {
          if (disabled) return;
          mutate({
            template: TemplateType,
            automation: AutomationType,
            buttons: Buttons,
            keyword: Keyword,
            text: Text,
            img: ProductImage,
            postId: PostId,
            description: Text,
            title: Title,
            post_url
          })
        }}
        className='px-4'>
        {isPending ? (
          <>
            <Loader2Icon className='animate-spin' /> Publishing
          </>
        ) : (
          <>{isSuccess ? 'Published' : isRateLimited ? "you have reached today's limit":'Publish'}</>
        )}
      </Button>
    </>
  )
}

export default PublishAutomation
