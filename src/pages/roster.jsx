import PlayerCard from "../UI/playercard";
import { players,management } from "../../constants";
import { useEffect, useState } from "react";
import Coachescard from "../UI/coachescard";

const Roster = () => {
  const [activeTab , setActiveTab] = useState('ubv')
  const filteredPlayers = players.filter(
    (player) => player.team === activeTab.toLowerCase()
  );
  
  return (
    <section className="w-full py-16 px-4">
       <div className="border-t  border-gray-200"></div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-6 border-v border-gray-200 gap-4">

         <div>
          <h1 className="text-3xl font-bold text-orange-600 tracking-tight">
          ROSTER
        </h1>
         </div>
         
        <div className="flex items-center gap-2">
          <button
          onClick={() => setActiveTab("ubv")}
          className={`px-4 py-2 rounded-full hover:cursor-pointer ${
            activeTab === "ubv"
            ? "bg-blue-600 text-white"
            : "text-gray-600"
            }`}
            >
              UBV
            </button>

             <button
          onClick={() => setActiveTab("tritons")}
          className={`px-4 py-2 rounded-full hover:cursor-pointer ${
            activeTab === "tritons"
            ? "bg-blue-600 text-white"
            : "text-gray-600"
            }`}
            >
              Tritons
            </button>
          <div className="h-8 w-px bg-gray-300"></div>
           <button className="px-8 py-3 md:px-8 md:py-3 text-xs md:text-lg border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white hover:border-white hover:cursor-pointer transition-colors">
            TEAM PROFILE
          </button>
        </div>
       </div>
       <div className="border-t border-gray-200"></div>
        <div className="px-6 py-6">
        <h2 className="text-2xl uppercase font-semibold ">Players</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {filteredPlayers.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
      <div className="border-t  border-gray-200 "></div>
      <div>
          <h1 className="text-3xl py-4 font-bold text-orange-600 tracking-tight">
          MANAGEMENT
        </h1>
         </div>
        <div className="border-t  border-gray-200 pb-16"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {management.map((staff, index) => (
          <Coachescard key={index} staff={staff} />
        ))}
      </div>
    </section>
  );
};

export default Roster;
