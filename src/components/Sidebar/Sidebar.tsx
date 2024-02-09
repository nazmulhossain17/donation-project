import Link from 'next/link'
import React from 'react'

const Sidebar = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 mt-12 p-9">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white">
        {/* Sidebar Content */}
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          {/* Add your sidebar links here */}
          <ul className="mt-4">
            <li className="mb-2">
              <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            </li>
            <li className="mb-2">
              <Link href="/create" className="hover:text-gray-300">Create</Link>
            </li>
            <li className="mb-2">
              <Link href="/all" className="hover:text-gray-300">All Info</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Content wrapper */}
        <div className="p-4">
          {/* Page title */}
          <h2 className="text-2xl font-semibold">{children}</h2>

          {/* Main content goes here */}
          <div className="mt-4">
            {/* Your main content components */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar
