import React, { Suspense } from 'react'
import Authenticate from './_components/auth'
import IGAUTHLoader from '@/components/loaders/instagram-auth-loader'

const page = ({searchParams}:{searchParams:Promise<{code:string}>}) => {
  return (
    <Suspense fallback={<IGAUTHLoader/>}>
      <Authenticate searchParams={searchParams}/>
    </Suspense>
  )
}

export default page