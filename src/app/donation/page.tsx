'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
  id: string;
    title: string;
    image: string;
}

const Donation = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="mt-20">

      <div className="m-3 p-3 flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 p-3 m-3">
       {
        filteredPosts.map(post => (
            <div key={post.id} className="rounded overflow-hidden shadow-lg">

            <div className="relative">
                <a href="#">
                    <Image className="w-full"
                        src={post.image}
                        width={400}
                        height={300}
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="absolute bottom-0 left-0 bg-green-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <Link href={`/donation/${post.id}`}>Donate Now</Link> 
                    </div>
                </a>

              
            </div>
            <div className="px-6 py-4">

                <a href="#"
                    className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{post.title}</a>
                
            </div>
        </div>
        ))
       }
      </div>
    </div>
  )
}

export default Donation
