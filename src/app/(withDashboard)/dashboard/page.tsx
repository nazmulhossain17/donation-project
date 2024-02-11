'use client'
import React from 'react'

const DashboardHomePage = () => {
  
 
  return (
    <div className=''>

    <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">

      <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
        <h1 className="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>
        <div className="space-y-6 md:space-x-2 md:space-y-0">
         
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <span className="text-gray-400">Total Donar</span>
                <span className="text-lg font-semibold">100,221</span>
              </div>
              <div className="p-10 bg-gray-200 rounded-md"></div>
            </div>
            <div>
              <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">14%</span>
              <span>from 2023</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
  )
}

export default DashboardHomePage
