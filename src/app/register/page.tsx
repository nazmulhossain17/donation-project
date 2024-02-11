'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { createUser } from '@/lib/actions/create-user';

interface FormData {
    name: string;
    email: string;
    password: string;
  }

const Registerpage: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleRegister = async (data: FormData) => {
       console.log(data)
       const res = await createUser(data)
       console.log(res);
       if(res.ok){
        console.log("Register successfully");
        toast.success("Account created successful");
       }
       router.push("/login")
      };
      
  return (
    <>
    <div className='bg-white rounded-lg py-5'>
      <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign Up</h3>
                <p className="mb-4 text-grey-700">Create your account</p>
              <label htmlFor="name" className="mb-2 text-sm text-start text-slate-900">Name*</label>
                <input {...register("name")} required  type="name" placeholder="Enter your name" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-gray-700 bg-slate-100 text-black rounded-2xl"/>
              
                <label htmlFor="email" className="mb-2 text-sm text-start text-slate-900">Email*</label>
                <input {...register("email")} required  type="email" placeholder="Enter a email" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-gray-700 bg-slate-100 text-black rounded-2xl"/>
                <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
                <input {...register("password")} required  type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-gray-700 bg-slate-100 text-black rounded-2xl"/>
             
        
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-600 focus:ring-4 focus:ring-purple-100 bg-purple-500">
                {loading ? "Creating Account..." : "Sign up"}
                </button>
               
              </form>
           
            </div>
            {/* <p className="text-sm text-gray-900">Already have an account? <Link href="/login" className="font-bold text-grey-700">Sign in</Link></p> */}

          </div>

        </div>
      </div>


    </div>
  </>
  )
}

export default Registerpage
