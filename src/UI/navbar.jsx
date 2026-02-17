import { React, useEffect, useState} from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Button from '../components/button';
import { TiLocationArrow } from "react-icons/ti";
import { FaLess } from 'react-icons/fa';

const Navbar = () => {

  const location = useLocation()
  const isHome =location.pathname === "/"
  
  const navbarBg = isHome  ?"bg-transparent" : "bg-blue-800 shadow-md";
  const textColor =
  isHome 
    ? "text-white"
    : "text-white";

    const linkClass=({ isActive})=>
        ` text-2xl font-bold uppercase font-zentry tracking-wider hover:text-white transition-colors
        ${isActive ? 'text-orange-600'
           : isHome 
        ? "text-white/80"
        : "text-black"
          }`;

  return (
   <nav className={`w-full z-50 transition-all duration-300   ${isHome ? "absolute top-0 left-0" : "relative"} ${navbarBg}`}>
      <div className=" mx-auto px-4 sm:px-6 text-black lg:px-8">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 px-2 py-4 '>
                    <img src="img/badge1.jpeg" alt="Urbanville Logo" 
                    className='w-15 h-15 bg-white rounded-full flex-shrink-0'
                    />
                    <p className={`hidden md:block  font-zentry text-xl font-bold uppercase tracking-wide ${textColor}`}>
                        Urbanville Basketball
                    </p>
                </div>
                <div className='hidden lg:flex text-sm text-white items-center gap-4 flex-1 justify-center'>
        <NavLink to="/" className={linkClass}>
             Home
          </NavLink>

        <NavLink to="/about" className={linkClass}>
             About Us
          </NavLink>
          <NavLink to="/programs" className={linkClass}>
            Programs
          </NavLink>

          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>

          <NavLink to="/merch" className={linkClass}>
            Shop
          </NavLink>

          <NavLink to="/contacts" className={linkClass}>
            Contact Us
          </NavLink>
           </div>
            <div className='hidden lg:flex items-center gap-4'>
                <div>
                    <CiSearch  
                    className="w-10 h-10 text-white/80 hover:text-blue-900 transition-colors cursor-pointer"
                    />
                </div>
                            <Button
                            id="Support Us "
                            title="Support Us"
                            leftIcon={<TiLocationArrow />}
                            containerClass="mt-4
                            inline-flex items-center justify-center 
                            px-8 py-4 
                            !bg-orange-500 text-black 
                            font-bold 
                            shadow-lg 
                             gap-2 
                             hover:bg-green-300 
                             transition
                             "
                             />

            </div>
            </div>
           
        </div>
    </nav>
  );
};

export default Navbar;