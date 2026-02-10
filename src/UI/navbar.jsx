import { React} from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Button from '../components/button';
import { TiLocationArrow } from "react-icons/ti";

const Navbar = () => {
    const linkClass=({ isActive})=>
        ` text-2xl font-bold uppercase font-zentry tracking-wider hover:text-blue-900 transition-colors
        ${isActive ? 'text-blue-900' : 'text-white/70'}`;

  return (
    <nav className='relative w-full mt-4  z-50'>
        <div className=" mx-auto px-4 sm:px-6 text-black lg:px-8">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 px-2 py-4 '>
                    <img src="img/logo.png" alt="Urbanville Logo" 
                    className='w-15 h-15 bg-white rounded-full flex-shrink-0'
                    />
                    <p className=' font-zentry text-white text-2xl font-bold uppercase tracking-wide'>
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

          <NavLink to="/shop" className={linkClass}>
            Shop
          </NavLink>

          <NavLink to="/contacts" className={linkClass}>
            Contact Us
          </NavLink>
           </div>
            <div className='flex items-center gap-4'>
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