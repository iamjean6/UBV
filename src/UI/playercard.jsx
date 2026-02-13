import { ExternalLink, ShoppingCart, Volume, Volume2, VolumeIcon } from 'lucide-react';
import { useState } from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div className='w-full bg-white font-industry rounded-xl shadow-md overflow-hidden border border-gray-200'>
      <div className='flex justify-between items-start font-medium px-4 py-4'>
        <div  className='leading-tight'>
          <p className='text-xl font-extrabold '>{player.firstName}</p>
          <p className='text-3xl  font-bold ' >{player.lastName}</p>
        </div>
        <div>
          <span className='text-7xl font-extrabold text-orange-600 tracking-wider'>{player.number}</span>
        </div>
      </div>
    
<div className="flex px-6 pt-4">
  
  <div className="w-1/2 text-sm">
    <p className="uppercase text-lg font-semibold text-gray-600 mb-4">
      {player.position}
    </p>

    <div className="space-y-3">
      <div className="flex justify-between border-b border-gray-600 pb-1">
        <span className="font-semibold">HEIGHT</span>
        <span className='text-gray-600'>{player.height}</span>
      </div>

      <div className="flex justify-between border-b border-gray-600 pb-1">
        <span className="font-semibold">WEIGHT</span>
        <span className='text-gray-600'>{player.weight}</span>
      </div>

      <div className="flex justify-between border-b border-gray-600 pb-1">
        <span className="font-semibold">AGE</span>
        <span className='text-gray-600'>{player.age}</span>
      </div>

      <div className="flex justify-between border-b border-gray-600 pb-1">
        <span className="font-semibold">YEARS PRO</span>
        <span className='text-gray-600'>{player.yearsPro}</span>
      </div>

      <div className="flex justify-between border-b  border-gray-600 pb-1">
        <span className="font-semibold">COUNTRY</span>
        <span className='text-gray-600'>{player.country}</span>
      </div>
    </div>
  </div>

  
  <div className="w-1/2 flex justify-end items-end">
    <img
      src={player.image}
      alt={player.firstName}
      className="h-64 object-contain"
    />
  </div>
</div>


<div className="bg-gray-200 grid grid-cols-5 text-center text-sm py-4">
  <div>
    <p className="text-xs text-gray-600">SEASON</p>
  </div>

  <div>
    <p className="font-semibold">GP</p>
    <p className="text-lg text-gray-600 font-bold">{player.stats.gp}</p>
  </div>

  <div>
    <p className="font-semibold">PPG</p>
    <p className="text-lg text-gray-600 font-bold">{player.stats.ppg}</p>
  </div>

  <div>
    <p className="font-semibold">APG</p>
    <p className="text-lg text-gray-600 font-bold">{player.stats.apg}</p>
  </div>

  <div>
    <p className="font-semibold">RPG</p>
    <p className="text-lg text-gray-600 font-bold">{player.stats.rpg}</p>
  </div>
</div>
      <div className='flex justify-between items-center px-6 py-4 border-t border-gray-200 '>
        <div className='flex items-center gap-2 text-orange-600 hover:cursor-pointer'> 
            <button className='text-sm hover:cursor-pointer font-medium hover:underline'>
                Bio
            </button>
            <ExternalLink className='text-sm ' />
        </div>
         <div className='flex items-center gap-2 text-orange-600 hover:cursor-pointer'> 
            
            <Volume2 className='text-sm ' />
        </div>
        <div className='flex items-center gap-2 text-orange-600 hover:cursor-pointer'>
            <button className='text-sm font-medium hover:underline hover:cursor-pointer'>
                Shop
            </button>
            <ShoppingCart className='text-sm ' />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
