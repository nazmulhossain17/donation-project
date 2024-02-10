import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';
import React from 'react'

const DashboardHomePage = async(request: NextRequest) => {
  const token = await getToken({req: request});
  console.log(token?.user.role)
  return (
    <div className='mt-12 p-12'>
      <h1>Welvom to dashboard</h1>
    </div>
  )
}

export default DashboardHomePage
