"use client"

import { useAutomationDraft } from '@/stores/use-automation-draft'
import React from 'react'
import TextTemplate from './text-template'
import GenericTemplate from './generic-template'

const Editor = () => {
    const {TemplateType} = useAutomationDraft()

if(TemplateType==='button')
  return <TextTemplate/>
else if( TemplateType==='generic')
      return <GenericTemplate/>

}

export default Editor
