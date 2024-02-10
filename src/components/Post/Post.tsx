'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

interface Post{
  id: string;
  title: string;
  image: string;
}

const Post = () => {
    const [posts, setPosts] = useState<Post[]>([]);

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
  return (
    <>
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
        </div>
        ))
       }
      </div>
    </>
  )
}

export default Post
