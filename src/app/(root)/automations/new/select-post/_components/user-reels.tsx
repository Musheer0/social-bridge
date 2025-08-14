import { GetReels } from '@/actions/instagram/reels'
import { CardCarousel } from "@/components/ui/card-carousel"

import React from 'react'

const UserReels =async () => {
  const reels = await GetReels()
  return (
    <div className='flex-1 overflow-hidden max-h-screen  h-full'>
      <CardCarousel
        showNavigation
        showPagination
      images={reels.map((r)=>{return {src:r.thumbnail_url, alt:r.id,caption:r.caption,post_url:r.permalink}})}
      />
    </div>
  )
}

export default UserReels