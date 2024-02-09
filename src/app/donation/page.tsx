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
    <div className="mt-20">
      <h1>Donation page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
       {
        posts.map(post => (
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
            {/* <div className="px-6 py-4 flex flex-row items-center">
                <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                        style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                            </g>
                        </g>
                    </svg>
                    <span className="ml-1">6 mins ago</span></span>
            </div> */}
        </div>
        ))
       }
      </div>
    </div>
  )
}

export default Donation
