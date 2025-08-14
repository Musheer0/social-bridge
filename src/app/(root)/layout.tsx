
import InitializeInstagram from '@/components/initializer/Initialize-instagram'
import Provider from '@/components/providers/provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import ConfettiTrigger from '@/components/shared/confetti-trigger'
import { Navbar } from '@/components/shared/navbar'
import DashboardSidebar from '@/components/sidebars/dashboard-sidebars'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { Toaster } from 'sonner'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
     <ThemeProvider
      attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
     >
       <Provider>
        <SidebarProvider>
          <Toaster richColors swipeDirections={['right','left']}/>
          <InitializeInstagram>
          <DashboardSidebar/>
          <ConfettiTrigger/>
         <main className='flex flex-1 flex-col w-full pb-20'>
           <Navbar/>
          {children}
         </main>
         </InitializeInstagram>
        </SidebarProvider>
      </Provider>
     </ThemeProvider>
  )
}

export default Layout