import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  )
}

export default DashboardLayout
