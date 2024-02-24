import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donation",
  description: "Generated by Syed Nazmul Hossain",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await getServerSession(authOptions)) as {
    user?: { role?: string };
  };
  console.log(session);
  const role = session?.user?.role;
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Navbar session={session ? true : false} role={role} />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
