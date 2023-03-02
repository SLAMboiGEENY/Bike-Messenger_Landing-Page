import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiOutlineMail, AiOutlineQuestion, AiOutlineDownload } from "react-icons/ai";
import { FaBicycle, FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    `1    `

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <div className="hidden lg:flex items-center bg-slate-400 rounded-full p-1 ml-2 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Now</p>
                    <p className="p-2">Later</p>
                </div>
            </div>
            {/* search input */}
            <div className='bg-gray-100 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input
                    className='bg-transparent p-2 w-full rounded-full'
                    type='text'
                    placeholder='Search'
                />
            </div>
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}

            <div className={nav ? "fixed top-0 left-0 w-[250px] h-auto bg-slate-400 z-10 duration-300" : "fixed top-0 left-[-100%] w-[250px] h-auto bg-slate-400 z-10 duration-300"}>
                <AiOutlineClose 
                        onClick={() => setNav(!nav)}
                    size={30}
                    className="absolute right-4 top-4 cursor-pointer"
                />
                <nav>
                    <ul className="flex h-screen flex-col justify-between p-4 text-black">
                        <li className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-6 ml-2 flex">
                            <a className="mr-4 uppercase font-semibold text-gray-800 hover:text-orange-400 duration-800 transition-colors ease-in" href="/">home</a>
                        </li>
                        <li className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-6 ml-2 flex">
                            <a className="mr-4 uppercase font-semibold text-gray-800 hover:text-orange-400 duration-800 transition-colors ease-in" href="/about">About</a>
                        </li>
                        <li className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-6 ml-2 flex">
                            <a className="mr-4 uppercase font-semibold text-gray-800 hover:text-orange-400 duration-800 transition-colors ease-in" href="/skills">Services</a>
                        </li>
                        <li className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-6 ml-2 flex">
                            <a className="mr-4 uppercase font-semibold text-gray-800 hover:text-orange-400 duration-800 transition-colors ease-in" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
