'use client';
import React, { useEffect, useState } from 'react'

interface Post {
    id: string;
    title: string;
    createdAt: string; 
  }
const AllPage = () => {
    const [postz, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/post/all-post",{
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
  return (
    <div>
        all post {postz.length}
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
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>
        </tbody>
            ))
        }
        </table>
      </div>
    </div>
  )
}

export default AllPage
