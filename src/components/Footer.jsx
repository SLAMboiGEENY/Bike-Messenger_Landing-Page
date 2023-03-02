import React from "react";
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineCodepen,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='relative bottom-0 left-0 z-20 w-full bg-gray-500 shadow-gray-500 shadow md:flex md:items-center md:justify-between md:p-6 '>
            <span className='flex justify-center text-sm text-black sm:text-center'>
                © 2023
            </span>
            <span className='flex justify-center text-sm text-black sm:text-center'>
                All Rights Reserved by Ebro Lyon
            </span>
            <ul className='flex flex-wrap flex-row justify-center items-center space-x-14 mt-3 sm:mt-0 text-black'>
                <li>
                    <a
                        href='https://github.com/pleatedRASH'
                        className='text-4xl flex mr-4 md:mr-6 hover:underline hover:text-orange-500 transition-all duration-500'
                    >
                        <AiOutlineGithub />
                    </a>
                </li>
                <li>
                    <a
                        href='https://codepen.io/pleatedRASH'
                        className='text-4xl flex mr-4 md:mr-6 hover:underline hover:text-orange-500 transition-all duration-500'
                    >
                        <AiOutlineCodepen />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
