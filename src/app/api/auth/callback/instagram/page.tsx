import { ConnectInstagram } from '@/lib/login-user'
import React from 'react'

const page = async({searchParams}:{searchParams:Promise<{code:string}>}) => {
    const {code} = await searchParams
   await ConnectInstagram(code);
  return (
    <div>
        <p>Loadingg</p>
    </div>
  )
}

export default page