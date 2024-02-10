'use client';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface FormData {
    price: number;
    title: string;
    image: string;
    description: string;
}

const Updatepage = ({ params }: { params: { id: string } }) => {
    console.log(params.id)
    const { register, handleSubmit } = useForm<FormData>();
    const [loading, setLoading] = useState<boolean>(false);


    const handleRegister = async (data: FormData) => {
    try {
        setLoading(true);
  
        const response = await fetch(`https://donation-server-three.vercel.app/api/post/posts/${params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          console.log('Post updated successfully');
          window.location.reload()
        } else {
          console.error('Error updating post');
        }
      } catch (error) {
        console.error('Error updating post:', error);
      } finally {
        setLoading(false);
      }
}
  return (
    <div>
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
                        placeholder="Product Name"
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
                    {loading ? "Updating Post..." : "Update Post"}
                    
                  </button>
                </div>
              </form>
            </div>
    </div>
  )
}

export default Updatepage
