"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ArrowRight, MessageSquare } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAutomationDraft } from "@/stores/use-automation-draft"
import { CommentPreview } from "@/components/templates/comment-preview"
import { MessagePreview } from "@/components/templates/message-preview"

const Page = () => {
  const {Keyword,setKeyword: setKeywordDraft,AutomationType} = useAutomationDraft()
  const router = useRouter()
  const handleNext = () => {
    if (Keyword.trim()) {
      router.push('/automations/new/template')
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <Card className="w-full max-w-md border-none">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Set Trigger Keyword</CardTitle>
          <CardDescription>Configure the keyword that will activate your automation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="keyword" className="text-sm font-medium">
              Trigger Keyword
            </Label>
            <Input
              id="keyword"
              placeholder="Enter keyword (e.g., Link, Subscribe, Info)"
              value={Keyword}
              onChange={(e) => setKeywordDraft(e.target.value)}
              className="w-full"
            />
          </div>

          {Keyword && (
            <div className=" p-4 flex flex-col gap-2">
              <p className="font-semibold">Preview</p>
            {AutomationType==='DM' ? <MessagePreview isKeywordPreviw  keyword={Keyword}/> : <CommentPreview
            text={Keyword}
            />}
            </div>
          )}

          <Button onClick={handleNext} disabled={!Keyword.trim()} className="w-full py-3" size="lg">
            Continue Setup
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page
