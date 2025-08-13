"use client"
import Editor from '@/components/templates/editor'
import GenericTemplate from '@/components/templates/generic-template'
import TextTemplate from '@/components/templates/text-template'
import { Button } from '@/components/ui/button'
import { templates } from '@/lib/templates'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Editor/>
    </div>
  )
}

export default page