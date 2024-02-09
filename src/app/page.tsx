
'use client'
import Image from "next/image";
import Link from "next/link";
import donate from "../assest/donate.jpeg"
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Post from "@/components/Post/Post";

export default function Home() {
  
  
  return (
    <>
    <Toaster />
    <p>Hello world</p>
    <section className="flex flex-col container mx-auto bg-[#f7ffef] rounded-[59px] pt-16 px-10 md:items-center md:px-20 md:pt-[68px] md:flex-row md:justify-between gap-10 z-30 mt-20">
      <div className="flex flex-col items-start text-black">
        <h1 className="text-3xl font-black  leading-[125%] sm:text-3xl md:text-[80px] md:leading-[125%]">
          <span className="text-green-500 after:h-full after:bg-white after:block after:absolute after:-z-10 after:top-0 after:-rotate-2">
            OUR
          </span>
          <br /> GOAL <br />
          <span>IS TO HELP</span>
          <br /> PEOPLE.
        </h1>
        <p className="md:text-[32px]">
          Donate people and save a life
        </p>
        <div className="flex flex-col md:flex-row md:items-center justify-evenly gap-9 pt-8">
          <Link
            href="/donation"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white "
          >
            See Doations 
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          className="h-auto max-w-full mb-12"
          src={donate}
          width={500}
          alt="banner image"
        />
      </div>
    </section>
    <section className="m-12 p-12">
      <div>
       <Post/>
      </div>
    </section>
    
    </>
  );
}
