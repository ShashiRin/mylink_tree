"use client"
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [handle, sethandle] = useState("")
  const [pic, setpic] = useState("")

  const [links, setlinks] = useState([{ link: "", linktext: "" }])

  const HandleChanges = (index, linktext, link) => {
    setlinks((initiallinks) => {
      return initiallinks.map((item, i) => {
        if (i == index) {
          return { linktext: linktext, link: link };
        }
        else {
          return item
        }
      })
    })
  }

  const addlink = () => {
    setlinks(links.concat([{ link: "", linktext: "" }]))
  }

  const submitData = async () => {
    if (!handle) {
      toast.error("Please choose a handle first!");
      return;
    }

    const payload = {
      handle: handle,
      pic: pic,
      links: links
    };

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(`${data.message || 'Your BitTree was successfully saved!'}`);
        sethandle("");
        setpic("");
        setlinks([{ link: "", linktext: "" }]);
      } else {
        toast.error(data.message || 'Something went wrong saving to the database.');
      }
    } catch (error) {
      console.error("Database connection error:", error);
      toast.error('Failed to reach backend server.');
    }
  }

  return (
    <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-24 md:pt-36'>

      <div className='flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-24 xl:px-32 text-[#322A4E]'>
        <h1 className='font-bold text-3xl md:text-4xl mb-8 md:mb-10'>Create your Bittree</h1>

        {/* Step 1 */}
        <div className="mb-6 md:mb-8">
          <h2 className='font-semibold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-[#443862]'>Step 1: Claim your Handle</h2>
          <input
            value={handle}
            onChange={e => sethandle(e.target.value)}
            className='w-full max-w-xs px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#443862] rounded-full shadow-sm text-gray-800'
            type="text"
            placeholder='Choose a Handle'
          />
        </div>

        {/* Step 2 */}
        <div className="mb-6 md:mb-8">
          <h2 className='font-semibold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-[#493d68]'>Step 2: Add Links</h2>
          {links && links.map((item, index) => {
            return <div key={index} className='flex flex-col sm:flex-row gap-3 items-start sm:items-center'>
              <input
                value={item.linktext}
                onChange={e => HandleChanges(index, e.target.value, item.link)}
                className='w-full sm:w-auto px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#443862] rounded-full shadow-sm text-gray-800 mt-3'
                type="text"
                placeholder='Enter link text'
              />
              <input
                value={item.link}
                onChange={e => HandleChanges(index, item.linktext, e.target.value)}
                className='w-full sm:w-auto px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#443862] rounded-full shadow-sm text-gray-800'
                type="text"
                placeholder='Enter link'
              />
            </div>
          })}

          <button
            onClick={addlink}
            className='bg-[#10172A] hover:bg-black text-white px-6 py-3 font-semibold rounded-full shadow-md transition-colors mt-4'>
            + Add Link
          </button>

        </div>

        {/* Step 3 */}
        <div className="mb-8">
          <h2 className='font-semibold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-[#443862]'>Step 3: Add Picture and Finalize</h2>
          <div className='flex flex-col gap-4'>
            <input
              value={pic}
              onChange={e => setpic(e.target.value)}
              className='w-full max-w-xs px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#443862] rounded-full shadow-sm text-gray-800'
              type="text"
              placeholder='Enter link to your Picture'
            />

            <button
              onClick={() => { submitData() }}
              className='disabled:bg-slate-500 bg-[#10172A] hover:bg-black text-white w-fit px-8 py-3 font-bold rounded-full shadow-md mt-4 transition-colors'>
              Create your BitTree
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start lg:items-center w-full h-full p-6 md:p-8 lg:pt-0">
        <img
          className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] object-contain drop-shadow-2xl'
          src="/moonie.jpg"
          alt="Generate your links"
        />
      </div>

    </div>
  )
}

export default Page;
