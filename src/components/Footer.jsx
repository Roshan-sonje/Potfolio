import React from 'react'
import { HashLink as NavLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <section id='footer'>
        <div className='bg-gray-300 px-4 pl-5 pt-5 pb-5 md:flex md:flex-row md:justify-around md:flex-wrap'>
            <div className='flex md:flex-col justify-between px-4 items-center'>
                <ul className='flex flex-col md:flex-row gap-3'>
                    <NavLink to="#home" className="flex items-center gap-2 font-[500]"><span className='h-2 w-2 bg-black rounded-[50%] mr-1 '></span> Home</NavLink>
                    <NavLink to="#about" className="flex items-center gap-2 font-[500]"><span className='h-2 w-2 bg-black rounded-[50%] mr-1 '></span> About</NavLink>
                    <NavLink to="#resume" className="flex items-center gap-2 font-[500]"><span className='h-2 w-2 bg-black rounded-[50%] mr-1 '></span> Resume</NavLink>
                    <NavLink to="#project" className="flex items-center gap-2 font-[500]"><span className='h-2 w-2 bg-black rounded-[50%] mr-1 '></span> Projects</NavLink>
                    <NavLink to="#contact" className="flex items-center gap-2 font-[500]"><span className='h-2 w-2 bg-black rounded-[50%] mr-1 '></span> Contact Me</NavLink>
                </ul>
                <ul className='flex md:flex-row flex-col gap-2 md:pt-4 md:gap-8 cursor-pointer'>
                    <a href="https://www.linkedin.com/in/roshan-sonje/"><img src="/src/assets/linkdein.svg" alt="" className='h-8 hover:opacity-70 hover:scale-110'/></a>
                    <a href="https://github.com/Roshan-sonje"><img src="/src/assets/git.svg" alt="" className='h-8 hover:opacity-70 hover:scale-110' /></a>
                    <a href="https://wa.me/qr/PCHDTAGZAOUDC1"><img src="/src/assets/whatsapp.svg" alt="" className='h-8 hover:opacity-70 hover:scale-110' /></a>
                    <a href="https://www.instagram.com/roshansonje?igsh=MWVqZDZnYXp1YTRsZw=="><img src="/src/assets/instagram.svg" alt="" className='h-8 hover:opacity-70 hover:scale-110' /></a>
                </ul>
            </div>
            <div className='py-3 mt-3 md:pt-0 self-end'>
                <h1 className='text-sm md:text-[16px] text-center'>Copyright ©2024 All rights reserved | This Website is made by <span className='text-blue-600 underline'><a href="#home">Roshan Sonje</a></span></h1>
            </div>
        </div>
    </section>
  )
}

export default Footer