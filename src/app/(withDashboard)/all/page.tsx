'use client';
import Modal from '@/components/Modal/Modal';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

interface Post {
    id: string;
    title: string;
    price: string;
    createdAt: string; 
  }
const AllPage = () => {
    const [postz, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("https://donation-server-three.vercel.app/api/post/all-post",{
            cache: "no-cache"
          });
          const data = await res.json();
          console.log(data.posts);
          console.log(data);
          setPosts(data.posts);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
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
            const response = await fetch(`https://donation-server-three.vercel.app/api/post/delete-post/${selectedPost.id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
    
            if (response.ok) {
              console.log("Post deleted successfully");
          
              // Optionally, update the state or fetch posts again after deletion
              setPosts((prevPosts) => prevPosts.filter((post) => post.id !== selectedPost.id));
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
    <div>
        all post {postz?.length}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    CreatedAt
                </th>
              
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        {
            postz.map((post) =>(
   
        <tbody key={post.id}>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {post.title}
                </th>
                <td className="px-6 py-4">
                    {post.createdAt}
                </td>
             
                <td className="px-6 py-4">
                    ${post.price}
                </td>
                <td className="px-6 py-4">
                    <Link href={`/all/${post.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </Link>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <button onClick={() => openModal(post)}>
                    Delete
                  </button></a>
                   
                </td>
            </tr>
        </tbody>
            ))
        }
        </table>
        <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleDelete} />
      </div>
      
    </div>
  )
}

export default AllPage
