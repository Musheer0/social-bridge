
import Provider from '@/components/providers/provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import DashboardSidebar from '@/components/sidebars/dashboard-sidebars'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

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
          <DashboardSidebar/>
          {children}
        </SidebarProvider>
      </Provider>
     </ThemeProvider>
  )
}

export default Layout