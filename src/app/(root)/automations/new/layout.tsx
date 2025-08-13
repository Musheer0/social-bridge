import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className='w-full  flex flex-col p-3 h-screen'>
        {children}
    </section>
  )
}

export default layout