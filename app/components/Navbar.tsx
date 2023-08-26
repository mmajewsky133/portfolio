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

    const socials = [
        {
            id: 'github',
            icon: <FaGithub size={30} />,
            link: 'https://github.com/mmajewsky133'
        },
        {
            id: 'linkedin',
            icon: <FaLinkedin size={30} />,
            link: 'https://www.linkedin.com/in/martin-majewsky-z/'
        },
    ]
  
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-zinc-300 bg-transparent fixed">
            <div>
                <h1 className="text-5xl font-bold font-signature">MMZ</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({id, title, link}) => (
                    <>
                        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-zinc-300 '>
                            <Link href={link}>{title}</Link>
                        </li>
                        <li className='px-4 font-medium text-zinc-300'> / </li>
                    </>
                ))}
            </ul>

            <ul className="hidden md:flex ">
                {socials.map(({id, icon, link}) => (
                    <li key={id} className='cursor-pointer pr-4 z-10 text-gray-500'>
                        <a href={link}>
                            {icon}
                        </a>
                    </li>
                ))}
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