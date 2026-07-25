import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#B983FF] text-white px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-200 mb-8 text-center max-w-md">
        This Bittree doesn&apos;t exist yet. Claim it and create your own!
      </p>
      <Link
        href="/"
        className="bg-white text-[#B983FF] font-bold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        Go Home
      </Link>
    </div>
  );
}
