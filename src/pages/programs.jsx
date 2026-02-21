import { useState } from 'react';
import { programs } from '../../constants';
const Programs = () => {
  return (
    <div className='min-h-screen w-full overflow-hidden'>
        <div className='relative h-64 md:h-80 lg:h-96'>

    <video
    src="/videos/goggins.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />
  <div className='absolute inset-0 bg-black/50'></div>
<div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-4xl font-zentry md:text-5xl lg:text-6xl font-bold text-white uppercase">
      TEAM PROGRAMES
    </h1>
  </div>
  </div>
   <div className="text-center mb-12 py-8">
        <p className="text-sm font-zentry uppercase tracking-widest text-gray-500 mb-2">
            So Far we have</p>
        <h2 className="text-5xl font-barlow md:text-8xl lg:text-5xl font-semibold tex-red-600 mb-6">
           Latest Programs & Gallery Post
           </h2>
           <div className="flex items-center justify-center gap-4">
             <span className="w-14 h-px bg-blue-700"></span>
             <span className="text-blue-700 text-sm">★</span>
              <span className="w-14 h-px bg-blue-700"></span>
              </div>
      </div>
      <div className='py-8 px-4 grid grid-cols-2 md:grid-cols-4 gap-3'>
        {programs.map((program, i)=>(
             <div
    key={i}
    style={{ animationDelay: `${i * 0.5}s` }}
    className='relative aspect-[3/4] rounded-sm overflow-hidden cursor-pointer group 
    animate-[floater_6s_ease-in-out_infinite]
    transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-2'
  >
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm md:text-base">
                  {program.title}
                </div>
            </div>
            
        ))}
      </div>
</div>
    
  );
};

export default Programs;