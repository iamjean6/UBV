import { useState } from 'react';
import GameCard from '../UI/gamecard';
import { games } from '../../constants';
const Games = () => {
   const [activeTab , setActiveTab] = useState(null)
  const filteredGames = activeTab
  ? games.filter(game => game.type === activeTab)
  : games;
  return (
    <div className='min-h-screen w-full bg-gray-100 py-16 px-4'>
      <div className="border-t  border-gray-200"></div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-6 border-v border-gray-200 gap-4">

         <div>
          <h1 className="text-3xl font-bold text-orange-600 tracking-tight">
          GAME SCHEDULE
        </h1>
         </div>
         
        <div className="flex items-center gap-2">
          <button
          onClick={() => setActiveTab("FINAL")}
          className={`px-4 py-2 rounded-full font-barlow font-black hover:cursor-pointer ${
            activeTab === "FINAL"
            ? "bg-blue-600 text-white"
            : "text-gray-600"
            }`}
            >
              PAST
            </button>

             <button
          onClick={() => setActiveTab("UPCOMING")}
          className={`px-4 py-2 rounded-full font-black hover:cursor-pointer font-barlow ${
            activeTab === "UPCOMING"
            ? "bg-blue-600 text-white"
            : "text-gray-600"
            }`}
            >
              UPCOMING
            </button>
          <div className="h-8 w-px bg-gray-300"></div>
           <button className="px-8 py-3 md:px-8 md:py-3 text-xs md:text-lg border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white hover:border-white hover:cursor-pointer transition-colors">
            TEAM PROFILE
          </button>
        </div>
        
       </div>

        <div className="border-t  border-gray-200"></div>
         <div className="max-w-7xl mx-auto px-4 py-16 space-y-6 ">
      {filteredGames.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div> 
    </div>
    
  );
};

export default Games;