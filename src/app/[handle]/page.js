import clientPromise from "../../../lib/mongodb";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function UserProfile({ params }) {
  const { handle } = await params;

  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  const userData = await collection.findOne({ handle: handle.toLowerCase() });

  if (!userData) {
    return notFound();
  }

  return (
    <div className="bg-[#B983FF] min-h-screen flex flex-col items-center pt-24 px-4 text-white relative">
      
      {/* top left arrow button */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all border border-white/20 shadow-sm"
        title="Go Back to Home"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-6 h-6 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </Link>

      <div className="w-full max-w-xl flex flex-col items-center">
        
        {/* Image setup */}
        {userData.pic && userData.pic.trim() !== "" ? (
          <img
            src={userData.pic}
            alt={userData.handle}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl mb-4"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-purple-700 border-4 border-white shadow-xl mb-4 flex items-center justify-center font-bold text-4xl uppercase">
            {userData.handle[0]}
          </div>
        )}
        

        {/* Userhandle */}
        <h1 className="text-2xl font-bold mb-6">@{userData.handle}</h1>

        {/* Listlink button */}
        <div className="w-full flex flex-col gap-4">
          {userData.links && userData.links.map((item, index) => {
            if (item.link && item.linktext) {
              return (
                <a
                  key={index}
                  href={item.link.startsWith("http") ? item.link : `https://${item.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#F5F5F5] text-center py-4 px-6 font-medium rounded-md shadow-md hover:scale-[1.02] transition-transform text-black border border-gray-200"
                >
                  {item.linktext}
                </a>
              );
            }
            return null;
          })}
        </div>

      </div>
    </div>
  );
}