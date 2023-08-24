'use client'

import React, { useState } from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import Link from "next/link";

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            title: 'Home',
            link: '/',
        },
        {
            id: 2,
            title: 'About Me',
            link: '/about',
        },
        {
            id: 3,
            title: 'Projects',
            link: '/projects',
        },
        {
            id: 4,
            title: 'Contact',
            link: '/contact',
        },
    ]
  
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-zinc-300 bg-black ">
            <div>
                <h1 className="text-4xl font-bold font-signature">MMZ</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({id, title, link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-zinc-300 hover:scale-105'>
                        <Link href={link}>{title}</Link>
                    </li>
                ))}
            </ul>

            <ul className="hidden md:flex ">
                <li className='cursor-pointer pr-4 z-10 text-gray-500'>
                    <FaGithub size={30} />
                </li>
                <li className='cursor-pointer pr-4 z-10 text-gray-500'>
                    <FaLinkedin size={30} />
                </li>
            </ul>

            <div onClick={() => setNav(!nav)} 
            className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center 
                absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
                from-black to-gray-800 text-zinc-300'>
                    {links.map(({id, title, link}) => (
                        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-zinc-300 hover:scale-105'>
                            <Link href={link}>{title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}