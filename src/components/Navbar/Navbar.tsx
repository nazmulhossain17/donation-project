'use client'

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

interface NavbarProps {
  session: boolean;
  role?: string; // Add the role prop
}
function Navbar({ session, role }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const router = useRouter()
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    console.log(role)
    console.log(session)
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  const handleLogout = () =>{
    signOut()
    router.push("/")
  }
  
    return (
      <>
        <header className={`w-full fixed top-0 left-0 right-0 ${isSticky ? "bg-white" : ""}`}>
          <nav className="py-4 md:px-8 px-4 bg-gradient-to-r from-[#f7ffef] to-slate-100">
            <div className="flex items-center justify-between">
              <div className="font-bold text-2xl cursor-pointer text-black">
                <Link href="/">Donation </Link>
              </div>
  
              <div className="lg:flex items-center gap-3 hidden text-stone-700">
                <Link href="/" className="block hover:text-green-700 py-2 px-4 font-semibold">
                  Home
                </Link>
                <Link href="/donation" className="block hover:text-green-700 py-2 px-4 font-semibold">
                  Donation
                </Link>
                <Link href="/about" className="block hover:text-green-700 py-2 px-4 font-semibold">
                  About
                </Link>
                <Link href="/statics" className="block hover:text-green-700 py-2 px-4 font-semibold">
                  Statics
                </Link>
                {session ? (
          <>
            {role === 'admin' ? (
              <>
                <Link href="/dashboard" className="block hover:text-green-700 py-2 px-4 font-semibold">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="hover:text-red-700 py-2 px-4 font-semibold">
                  Logout
                </button>
              </>
            ) : role === 'user' ? (
             <>
              <Link href="/profile" className="block hover:text-green-700 py-2 px-4 font-semibold">
                Profile
              </Link>
              <button onClick={handleLogout} className="hover:text-red-700 py-2 px-4 font-semibold">
              Logout
            </button>
             </>
            ) : (
              <Link href="/login" className="block hover:text-green-700 py-2 px-4 font-semibold">
                Login
              </Link>
            )}
          </>
        ) : (
          <Link href="/login" className="block hover:text-green-700 py-2 px-4 font-semibold">
            Login
          </Link>
        )}
              </div>
  
              <button onClick={toggleMenu} className="lg:hidden text-red-400 text-3xl">
                <HiMenu />
              </button>
            </div>
  
            {isMenuOpen && (
              <div className="mt-4 bg-green-600 text-white rounded py-4">
                <Link href="/" className="block hover:text-gray-400 py-2 px-4">
                  Home
                </Link>
                <Link href="/donation" className="block hover:text-gray-400 py-2 px-4">
                  Donation
                </Link>
                <Link href="/about" className="block hover:text-gray-400 py-2 px-4">
                  About
                </Link>
                <Link href="/statics" className="block hover:text-gray-400 py-2 px-4">
                  Statics
                </Link>
                {session? (
                  <>
                  <Link href="/dashboard" className="block hover:text-green-700 py-2 px-4 font-semibold">
                  Dashboard
                </Link>
                <button onClick={()=> signOut()} className="block hover:text-red-700 py-2 px-4 font-semibold">Logout</button>
                  </>
                ):(
                  <Link href="/login" className="block hover:text-green-700 py-2 px-4 font-semibold">
                  Login
                </Link>
                )}
               
              </div>
            )}
          </nav>
        </header>
      </>
    );
  }

export default Navbar