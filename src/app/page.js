"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

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
      <section className="bg-green-800 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-12 gap-8 lg:gap-12">
        {/* Column :1 */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-9 order-2 lg:order-1">
          <div>
            <p className="text-yellow-400 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              A link in bio has been added
            </p>
            <p className="text-yellow-400 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              built for you.
            </p>
          </div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex flex-col sm:flex-row gap-3 sm:gap-2">
            <input
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="px-4 py-3 bg-gray-300 rounded-md placeholder-gray-950 w-full sm:w-auto" type="text" placeholder="Enter your Handle" />
            <button
              onClick={handleClaim}
              className="bg-pink-300 rounded-full px-6 py-3 font-semibold text-emerald-800 text-sm sm:text-base whitespace-nowrap">Claim your Bittree</button>
          </div>
        </div>

        {/* Column -2 */}
        <div className="flex justify-center order-1 lg:order-2">
          <img src="/Mona-removebg-preview.png" alt="Mona Image" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto object-contain" />
        </div>
      </section>
    </main>
  );
}
