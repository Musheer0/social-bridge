"use client"
import { signIn } from '@/lib/auth-client'
import React from 'react'

const page = () => {
  return (
    <div>
      
      <button
      onClick={()=>signIn.social({provider:'github'})}
      >login</button>
    </div>
  )
}

export default page