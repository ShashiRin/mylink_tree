"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)

    if (!showNavbar) return null;

    return (
    <nav className='bg-white w-[90vw] md:w-[80vw] flex justify-between fixed top-4 md:top-10 right-[5vw] md:right-[10vw] rounded-full p-2 px-4 md:px-7 z-50 shadow-md'>
            <div className="logo text-black flex items-center gap-4 md:gap-48">
                <Link href={"/"}>
                <svg className='h-6 md:h-7' viewBox="0 0 1176 238" title="Linktree Logo" xmlns="http://www.w3.org/2000/svg"><path d="M0 25.5326H33.7257V202.802H127.205V233.988H0V25.5326ZM160.564 25.5326C172.111 25.5326 181.642 34.469 181.642 45.9586C181.642 57.6307 172.111 66.9318 160.564 66.9318C148.833 66.9318 139.485 57.6307 139.485 45.9586C139.485 34.469 148.833 25.5326 160.564 25.5326ZM144.067 83.7103H176.51V233.988H144.067V83.7103ZM195.572 83.7103H228.015V104.501C237.546 88.6345 254.042 79.6981 275.854 79.6981C311.046 79.6981 333.041 107.054 333.041 150.46V233.988H300.598V153.378C300.598 125.292 288.318 109.425 265.956 109.425C241.579 109.425 228.015 126.021 228.015 156.113V233.988H195.572V83.7103ZM350.087 25.5326H382.53V157.39L443.016 83.8927H483.707L419.188 159.031L483.707 233.988H443.016L382.53 160.673V233.988H350.087V25.5326ZM496.354 45.4114H529.347V83.7103H567.838V110.519H529.347V187.847C529.347 197.695 535.395 203.713 544.743 203.713H566.372V233.988H540.344C512.117 233.988 496.354 217.392 496.354 187.847V45.4114ZM584.5 83.7103H614.577V102.313C622.642 88.0873 636.022 79.6981 652.519 79.6981C657.468 79.6981 660.217 79.8805 663.883 81.1571V111.249C661.683 110.702 658.384 110.155 651.786 110.155C627.958 110.155 614.761 130.034 614.761 164.503V233.988H582.318V83.7103H584.5ZM739.582 79.6981C775.324 79.6981 813.999 101.218 813.999 162.314V166.691H697.792C700.358 193.5 715.938 208.273 741.965 208.273C760.661 208.273 776.607 198.242 780.09 184.199H813.082C809.783 214.291 778.44 238 741.965 238C695.226 238 665.899 207.726 665.899 158.667C665.899 115.261 694.309 79.6981 739.582 79.6981ZM779.54 139.882C774.958 121.28 760.294 109.608 739.766 109.608C719.97 109.608 706.04 121.644 700.541 139.882H779.54ZM902.162 79.6981C937.904 79.6981 976.578 101.218 976.578 162.314V166.691H860.372C862.938 193.5 878.517 208.273 904.545 208.273C923.241 208.273 939.187 198.242 942.669 184.199H975.662C972.363 214.291 941.02 238 904.545 238C857.805 238 828.479 207.726 828.479 158.667C828.479 115.261 856.889 79.6981 902.162 79.6981ZM942.12 139.882C937.538 121.28 922.874 109.608 902.346 109.608C882.55 109.608 868.62 121.644 863.121 139.882H942.12Z" fill="currentColor"/></svg>
                </Link>

                <button
                    className="md:hidden p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            <ul className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-md md:shadow-none p-4 md:p-0 flex-col md:flex-row flex gap-4 md:gap-10 text-black font-medium items-center ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
                <li><Link href="/generate" onClick={() => setMenuOpen(false)}>Generate Link</Link></li>
                <li><Link href="/" onClick={() => setMenuOpen(false)}>Discover</Link></li>
                <li><Link href="/" onClick={() => setMenuOpen(false)}>Learn</Link></li>
            </ul>

            <div className='hidden md:flex gap-3'>
                <button className="login bg-gray-400 px-3 py-2 md:px-4 md:py-3 m-2 md:m-4 rounded-lg font-bold text-black text-sm md:text-base">Log in</button>
                <button className="signup bg-gray-900 text-white font-bold px-3 py-2 md:px-4 md:py-3 m-2 md:m-4 rounded-full text-sm md:text-base">Sign up free</button>
            </div>
        </nav>
    )
}

export default Navbar
