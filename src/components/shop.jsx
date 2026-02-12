import { useState } from 'react';
import { merch } from '../../constants';
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Shop = () => {
    const [isActive, setIsActive] =useState(null)
    const [liked, setLiked] = useState({});
    const [burst, setBurst] = useState(null);


  return (
    <div className='min-h-screen  w-full py-16 '>
      <div className='mx-auto mb-6 text-left px-4 py-16'>
        <h1 className='text-4xl lg:text-5xl mb-4 font-bold '>
            Get Our Merch
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2  px-4'>
       
        {merch.map((merch)=>{
            return( <div className='flex flex-col'>
                <div className='relative w-full h-[500px] bg-gray-100 overflow-hidden'>
                <img
                src={merch.img}
                alt={merch.alt}
                className='w-full h-full object-cover'
                
                />
                <button
                onClick={() =>{
                     setLiked(prev => ({
                        ...prev,
                        [merch.id]: !prev[merch.id]
                    }))
                    setBurst(merch.id);
                    setTimeout(() => setBurst(null), 600);
                }   
                }
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
                >
                    {liked[merch.id] ? (
                        <FaHeart className="text-red-500 text-2xl animate-ping-once" />
                    ) : (
                    <FiHeart className="text-gray-800 text-2xl" />
                    )}
                    </button>
                    {burst === merch.id && (
                        <FaHeart className="absolute bottom-10 right-5 text-red-500 text-xl animate-float" />
                        )}


            </div>
            <div className='mt-4 space-y-1'>
                <h3 className='text-sm font-medium'>
                    {merch.name}
                </h3>
                <p className='text-sm text-gray-600'>
                    {merch.price}
                </p>
            </div> 
            <Link to={`/shop/${merch.id}`}>
              <button className="mt-4 w-full border border-gray-900 py-3 text-sm uppercase tracking-wide hover:bg-gray-900 hover:text-white transition">
                Choose options
            </button>
            </Link>
           
            </div>)
               
            
      

        })}

       
      </div>
    </div>
  );
};

export default Shop;