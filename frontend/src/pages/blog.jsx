import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate =useNavigate()
    const goHome= ()=>{
        navigate("/")
    }
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white px-6">
      
      <div className="flex flex-col items-center text-center space-y-6 max-w-xl">
        
        <img
          src="/img/build.gif"
          alt="Under construction"
          className="w-48 md:w-64 animate-pulse"
        />

        <h1 className="text-5xl md:text-6xl font-bold tracking-wider text-red-500">
          404
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-wide">
          Page Under Construction
        </h2>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          We're building something powerful for you.  
          Check back soon.
        </p>

        <button onClick={goHome} className="mt-4 px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300">
          Go Back Home
        </button>

      </div>

    </div>
  );
};

export default Blog;