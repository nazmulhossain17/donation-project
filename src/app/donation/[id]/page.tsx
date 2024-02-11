'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface Post {
  id: string;
    title: string;
    image: string;
    description: string;
}
const DynamicData = ({ params }: { params: { id: string } })=> {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://donation-server-three.vercel.app/api/post/all-post/${params.id}`,{
          cache: "no-cache"
        });
        const data = await res.json();
        
        // Assuming data.post is a single post
        console.log(data.post);
        setPost(data.post);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  if (!post) {
    // Render loading state or return null
    return <div>Loading...</div>;
  }

  return (
    <div className=" p-12 m-4">
     
      {/* <p>Hello {posts.title}</p> */}
      <div  className="rounded overflow-hidden shadow-lg">

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
                        {/* <Link href={`/donation/${post.id}`}>Donate Now</Link>  */}Donate
                    </div>
                </a>

              </div>
              <div className="px-6 py-4">

<h1 className="font-semibold text-3xl m-4 inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{post.title}</h1>
<a href="#"
    className="font-semibold text-lg inline-block">{post.description}</a>

</div>
</div>
      
</div>
  )
}

export default DynamicData
