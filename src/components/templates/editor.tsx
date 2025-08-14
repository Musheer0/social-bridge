"use client"

import { useAutomationDraft } from '@/stores/use-automation-draft'
import React from 'react'
import TextTemplate from './text-template'
import GenericTemplate from './generic-template'

const Editor = () => {
    const {TemplateType} = useAutomationDraft()
  if(TemplateType)
  return <TextTemplate templateType={TemplateType}/>


}

export default Editor
