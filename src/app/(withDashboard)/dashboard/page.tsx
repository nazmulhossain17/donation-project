import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';
import React from 'react'

const DashboardHomePage = async(req: NextRequest) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log(token?.user)
  return (
    <div className='mt-12 p-12'>
      <h1>Welvom to dashboard</h1>
    </div>
  )
}

export default DashboardHomePage
