import React, { PropsWithChildren } from 'react'
import Sidebar from './_components/sidebar'

const layout = ({children}:PropsWithChildren) => {
  return (
    <main className="h-full">
    <Sidebar />

    <div className="pl-[60px] h-full">
      <div className="flex gap-x-3 h-full">
        {/* <OrgSidebar /> */}
        <div className="h-full flex-1">
          {/* <Navbar /> */}

          {children}
        </div>
      </div>
    </div>
  </main>
  )
}

export default layout