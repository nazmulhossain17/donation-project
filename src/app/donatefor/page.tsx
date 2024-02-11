'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { createDonation } from '@/lib/actions/create-donation';

interface FormData {
  name: string;
  email: string;
  price: number;
}

const Donateforpage = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleRegister = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch('https://donation-server-three.vercel.app/api/post/create-donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        cache: 'no-cache',
      });

      const responseData = await res.json();

      if (res.ok) {
        console.log('Donation successful');
        toast.success('Donation successful');
        router.push('/');
      } else {
        console.error(`Error creating donation. Status: ${res.status}. Response: ${JSON.stringify(responseData)}`);
        toast.error('Error creating donation');
      }
    } catch (error) {
      console.error('Error creating donation:', error);
      toast.error('Error creating donation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <form onSubmit={handleSubmit(handleRegister)}>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Full Name</label>
                        <input {...register('name')} type="text" name="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="email">Email Address</label>
                        <input {...register('email')} type="text" name="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="address">Amount</label>
                        <input {...register('price')} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {loading ? 'Submitting...' : 'Submit'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donateforpage;
