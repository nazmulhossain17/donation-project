'use client'
import Modal from '@/components/Modal/Modal';
import React, { useEffect, useState } from 'react'

interface Post {
  id: string;
  name: string;
  email: string; 
  price: string;
  createdAt: string;
}
const DashboardHomePage = () => {
  const [donation, setDonation] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('https://donation-server-three.vercel.app/api/post/all-donation', {
          cache: 'no-cache',
        });
        const data = await res.json();
        console.log(data);
        console.log(data.donations);
        setDonation(data.donations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, []);

  const openModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const handleDelete = async () => {
    if (selectedPost) {
      try {
        const response = await fetch(`https://donation-server-three.vercel.app/api/post/delete-donation/${selectedPost.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log("Post deleted successfully");
      
          // Optionally, update the state or fetch posts again after deletion
          setDonation((prevPosts) => prevPosts.filter((post) => post.id !== selectedPost.id));
        } else {
          console.error("Error deleting post");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }

      closeModal();
    }
  };
 
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
    <div>
    <div>
         
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    CreatedAt
                </th>
              
                <th scope="col" className="px-6 py-3">
                    Amout
                </th>
            
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        {
            donation.map((post) =>(
   
        <tbody key={post.id}>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {post.name}
                </th>
                <td className="px-6 py-4">
                    {post.email}
                </td>
                <td className="px-6 py-4">
                    {post.createdAt}
                </td>
             
                <td className="px-6 py-4">
                ${post.price}
                </td>
                
                <td className="px-6 py-4">
                    <button onClick={() => openModal(post)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Delete
                  </button>
                   
                </td>
            </tr>
        </tbody>
            ))
        }
        </table>
        <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleDelete} />
      </div> 
      
    </div>
    </div>
  </div>
  )
}

export default DashboardHomePage
