import React from 'react';
import { IoHome } from "react-icons/io5";
import { FaCode, FaRegNewspaper } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../../Pages/Home';

function NavBar() {
  const location = useLocation();

  return (
    <>
      <nav className='bg-red-600 flex py-3 justify-between items-center px-[50px]'>
        <div>
          <img src="https://cdn4.vectorstock.com/i/1000x1000/32/78/white-web-design-and-front-end-development-icon-vector-36723278.jpg" className='w-[40px]' alt="" />
        </div>

        <div className='text-white font-bold text-[18px] font-serif class'>
          <ul className='flex gap-5'>
            <li className={`flex items-center gap-2 hover:text-black ${location.pathname === '/' ? 'text-black' : ''}`}><IoHome />Home</li>
            <li className='flex items-center gap-2 hover:text-black'><FaCode />Contributions</li>
            <li className='flex items-center gap-2 hover:text-black'><FaRegNewspaper />Articles</li>
            <li className='flex items-center gap-2 hover:text-black'><SiReaddotcv />Resume</li>
            <li className='flex items-center gap-2 hover:text-black'><IoMdContact />Contact</li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default NavBar;
