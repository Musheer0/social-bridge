import AutomationHeader from '@/components/automations/automations-header'
import AutomationsList from '@/components/automations/user-automations'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex-1 flex flex-col '>
      <AutomationHeader hideBanner/>
      <AutomationsList/>
    </div>
  )
}

export default page