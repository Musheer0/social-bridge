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

const PublishAutomation = () => {
  const query_client = useQueryClient()
  const { Title, Text, ProductImage, Buttons, Keyword, AutomationType, PostId, TemplateType ,resetAll,post_url} = useAutomationDraft()
  const disabled = !Keyword || !AutomationType || !TemplateType 
  const router = useRouter()
  const [showConfetti, setShowConfetti] = useState(false)

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: CreateAutomation,
    onError: () => {
      toast.error('error publishing your automation, try again')
    },
   onSuccess: (data) => {
  toast.success('published ');
  setShowConfetti(true);
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
        disabled={isPending || disabled}
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
          <>{isSuccess ? 'Published' : 'Publish'}</>
        )}
      </Button>
    </>
  )
}

export default PublishAutomation
