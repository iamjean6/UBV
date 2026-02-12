import { useState } from 'react';
import GameCard from '../UI/gamecard';
import { games } from '../../constants';
const Games = () => {
  return (
    <div className='min-h-screen w-full bg-blue-900'>
         <div className="max-w-7xl mx-auto px-4 py-16 space-y-6 ">
      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div> 
    </div>
    
  );
};

export default Games;