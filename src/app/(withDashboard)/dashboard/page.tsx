
import { NextRequest } from 'next/server';
import React from 'react'

const DashboardHomePage = async(req: NextRequest) => {
 
  return (
    <div className='mt-12 p-12'>
      <h1>Welvom to dashboard</h1>
    </div>
  )
}

export default DashboardHomePage
