import ConnectInstagramCard from '@/components/sidebars/connect-instagram-card'

import React from 'react'

const page = () => {
  return (
    <div className='w-full flex-1'>
        <div className="header w-full px-3 py-5 border-b">
            <p className='font-semibold'>Linked Accounts</p>
        </div>
        <div className="body flex flex-col w-full  gap-2 py-4 px-3">
          <ConnectInstagramCard/>
        </div>
    </div>
  )
}

export default page