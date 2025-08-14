import React, { Suspense } from 'react'
import UserReels from './_components/user-reels'
import InstagramReelsLoader from './_components/loader'

const page = () => {
  return (
    <Suspense fallback={<InstagramReelsLoader/>}>
      <UserReels/>
    </Suspense>
  )
}

export default page