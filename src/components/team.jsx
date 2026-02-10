import {useEffect } from 'react';
import Button from './button';
import { TiLocationArrow } from 'react-icons/ti';

const Team = () => {
  return (
    <div className='min-h-screen bg-gray-50 w-full py-24 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
            <div className='overflow-hidden bg-gray-100 h-full'>
                <img src="img/jean.jpeg" 
                className='w-full h-[550px] object-cover overflow-hidden rounded-sm'
                alt="" srcset="" />
            </div>
        <div className='flex flex-col justify-center space-y-6'>
            <div className='space-y-2'>
                <p className='text-sm uppercase tracking-widest text-gray-500'>
                    Shooting Guard/ Small Forward
                </p>
                <h2 className='text-3xl lg:text-4xl font-extrabold text-gray-900'>
                    Jean Powell
                </h2>
            </div>
             <div className='flex items-center gap-3 text-gray-900'>
                <span className="text-lg text-gray-500 leading-relaxed">21 years</span>
                <span>|</span>
                <span className="text-lg text-gray-500 leading-relaxed"> 6 ft 00In</span>
                <span>|</span>
                <span className="text-lg text-gray-500 leading-relaxed"> 73kg</span>

             </div>
             <div className="space-y-3">
    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
      Player Biography
    </h3>

    <p className="text-gray-600 leading-relaxed">
      Lorem ipsum dolor sit amet, vis an altera torquatos, vel assum nostrum
      eleifend at. Choro posidonium vix et, ei mei iisque antiopam comprehensam.
      Putent repudiandae ei sed, eu vis accusamus sadipscing mea.
    </p>
  </div>

  <div>
    <button className="px-8 py-3 border border-gray-900 text-sm font-semibold uppercase tracking-wide hover:bg-blue-800 hover:text-white transition">
      View Profile
    </button>
  </div>
        </div>
        </div>

      </div>
      <div className='flex items-center justify-center py-8'>
        <Button 
        id="Meet the Team"
        title="Meet the Team"
         leftIcon={<TiLocationArrow />}
         containerClass="mt-4
          inline-flex items-center justify-center 
          px-8 py-4 
          !bg-orange-500 
          text-black 
          font-bold 
          !rounded-lg
          shadow-lg 
          gap-2 
          !hover:bg-green-300 
          transition
            "
        />

      </div>
    </div>
  );
};

export default Team;