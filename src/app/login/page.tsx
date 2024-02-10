"use client";
import { signIn } from 'next-auth/react';
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'

const Loginpage = () => {
    const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    signIn("donation", {
        email: email,
        password: password,
        callbackUrl: "/"
    })
  }
  return (
    <>
    <div className='bg-white rounded-lg py-5'>
      <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form onSubmit={handleSubmit} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign In</h3>
                <p className="mb-4 text-grey-700">Enter your email and password</p>
                {/* <a className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                  <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt=""/>
                  Sign in with Google
                </a> */}
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-gray-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-gray-500 grow" />
                </div>
                <label htmlFor="email" className="mb-2 text-sm text-start text-slate-900">Email*</label>
                <input  onChange={(e) => setEmail(e.target.value)} required id="email" type="email" placeholder="Enter a email" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-gray-700 bg-slate-100 text-black rounded-2xl"/>
                <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
                <input onChange={(e) => setPassword(e.target.value)} required id="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-gray-700 bg-slate-100 text-black rounded-2xl"/>
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-600 focus:ring-4 focus:ring-purple-100 bg-purple-500">Sign In</button>
                <p className="text-sm  text-gray-900">Not registered yet? <Link href="/register" className="font-bold text-grey-700">Create an Account</Link></p>
              </form>
              <br/>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
  )
}

export default Loginpage
