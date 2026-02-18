import { React, useEffect, useState} from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Coins, LogIn, ShoppingCart } from 'lucide-react';
import Button from '../components/button';
import { TiLocationArrow } from "react-icons/ti";
import { FaLess } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const location = useLocation()
  const isHome =location.pathname === "/"
  const [totalQuantity, setTotalQuantity]= useState(0)
  const carts =useSelector (store => store.cart.items)
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
        useEffect(()=>{
          let total =0
          carts.forEach(items=> total+= items.quantity)
          setTotalQuantity(total)
        },[carts])
  return (
   <nav className={`w-full z-50 transition-all duration-300   ${isHome ? "absolute top-0 left-0" : "relative"} ${navbarBg}`}>
      <div className=" mx-auto px-4 sm:px-6 text-black lg:px-8">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 px-2 py-4 '>
                    <img src="/img/badge1.jpeg" alt="Urbanville Logo" 
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
            <div className='flex items-center gap-4'>
              <LogIn className='text-3xl text-white hover:cursor-pointer' />
              <Coins className='text-3xl text-white hover:cursor-pointer' />
              <div className=' rounded-full flex justify-center items items-center relative'>
                <ShoppingCart className='text-3xl text-white hover:cursor-pointer' />   
                <span className='absolute top-2/3 right-1/4 bg-red-500 text-black text-sm w-5 h-5
                rounded-full flex justify-center items-center'>{totalQuantity}</span>
              </div>
              
               
            </div>
            </div>
           
        </div>
    </nav>
  );
};

export default Navbar;