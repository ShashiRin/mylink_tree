"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {

  const [handle, setHandle] = useState("");
  const router = useRouter();

  const handleClaim = () => {
    if (!handle.trim()) {
      alert("Please enter a handle first!");
      return;
    }
   
    router.push(`/${handle.trim().toLowerCase()}`);
  };



  return (
    <main>
      <section className="bg-green-800 min-h-screen grid grid-cols-2 flex justify-between">
        {/* Column :1 */}
        <div className=" flex justify-center flex-col ml-39 gap-9 pt-29">
          <div >
            <p className="text-yellow-400 font-bold text-6xl font-serif ">
              A link in bio has been added
            </p>
            <p className="text-yellow-400 font-bold text-6xl font-serif">
              built for you.
            </p>
          </div>
          <p className="text-gray-300">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex gap-2">
            <input
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="px-2 py-2 bg-gray-300 rounded-md placeholder-gray-950" type="text" placeholder="Enter your Handle" />
            <button
              onClick={handleClaim}
              className="bg-pink-300 rounded-full px-4 py-4 font-semibold text-emerald-800">Claim your Bittree</button>
          </div>
        </div>

        {/* Column -2 */}
        <div className="flex justify-center mr-5 pt-35">
          <img src="/Mona-removebg-preview.png" alt="Mona Image" className="max-w-md w-full h-auto object-contain" />
        </div>


      </section>

      
    </main>

  );
}
