'use client'

import { allData } from '@/lib/actions/all-data';
import {  handleUser } from '@/lib/actions/user';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface FormData {
    price: number;
    title: string;
    image: string;
    description: string;
  }

const CreateShoes = () => {
const { register, handleSubmit } = useForm<FormData>();
const [loading, setLoading] = useState<boolean>(false);


const handleRegister = async (data: FormData) => {
    console.log(data)

    try {
        setLoading(true);
  
        // Make a POST request to your backend API
        const response = await fetch('https://donation-server-three.vercel.app/api/post/create-post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const responseData = await response.json();
  
        // Handle the response accordingly
        if (response.ok) {
          console.log(responseData.message);
          toast.success("post created successfully")
          window.location.reload()
          // Optionally, you can perform additional actions upon success
        } else {
          console.error(responseData.error);
          // Handle error scenarios
        }
      } catch (error) {
        console.error('Error creating post:', error);
      } finally {
        setLoading(false);
      }
};
    return (
      <>
      <div className=''>
        <div className="">
          <div className="">
            <div className="rounded-sm border border-stroke bg-gray-100 shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Create Post
                </h3>
              </div>
              <form onSubmit={handleSubmit(handleRegister)}>
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Image url
                      </label>
                      <input
                        type="text"
                        {...register("image")}
                        placeholder="Image url"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
  
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Title
                      </label>
                      <input
                        type="text"
                        {...register("title")}
                        placeholder="title"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  
  
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                      price
                      </label>
                      <input
                        type="text"
                        {...register("price")}
                        placeholder="price"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
              
          
  
                  <div className="mb-6">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Description
                    </label>
                    <textarea
                      rows={6}
                      {...register("description")}
                      placeholder="Type your product description"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    ></textarea>
                  </div>
  
                  <button className="flex w-full justify-center rounded bg-purple-600 p-3 font-medium text-gray">
                    {loading ? "Creating Post..." : "Create Post"}
                  </button>
                </div>
              </form>
            </div>
          </div>
  
        
        </div>
        </div>
      </>
    );
  };
  
  export default CreateShoes;
