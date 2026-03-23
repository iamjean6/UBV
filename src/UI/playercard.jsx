import { ExternalLink, ShoppingCart, Volume, Volume2, VolumeIcon } from 'lucide-react';
import { useState } from 'react';
import { POSITION_MAP } from '../../constants';

const PlayerCard = ({ player }) => {
  const handlePlayAudio = () => {
    const audio = new Audio(player.audio_url);
    audio.play();
  };

  const formatPosition = (pos) => {
    if (!pos) return '-';
    // Split by common delimiters like /, space, or comma
    const parts = pos.toString().split(/[\/\s,]+/).filter(Boolean);
    
    // Attempt to map each part, or the whole string if it's a known abbreviation like PGSG
    // If PGSG isn't in the map, try to split it into PG and SG if it's 4 chars? 
    // For now, I'll stick to the mapping added.
    
    if (POSITION_MAP[pos.toUpperCase()]) {
        return POSITION_MAP[pos.toUpperCase()];
    }

    return parts
      .map(p => POSITION_MAP[p.toUpperCase()] || p)
      .join(' / ');
  };

  const calculateEFF = (stats) => {
    if (!stats) return '-';
    const {
      ppg = 0, rpg = 0, apg = 0, spg = 0, bpg = 0,
      fga_pg = 0, fgm_pg = 0, fta_pg = 0, ftm_pg = 0, topg = 0
    } = stats;
    
    // EFF = (PTS + REB + AST + STL + BLK) − ((FGA − FGM) + (FTA − FTM) + TO)
    const eff = (Number(ppg) + Number(rpg) + Number(apg) + Number(spg) + Number(bpg)) - 
                ((Number(fga_pg) - Number(fgm_pg)) + (Number(fta_pg) - Number(ftm_pg)) + Number(topg));
    
    return eff.toFixed(1);
  };

  return (
    <div className='w-full bg-white font-industry rounded-xl shadow-md overflow-hidden border border-gray-200'>
      <div className='flex justify-between items-start font-medium px-4 py-4'>
        <div className='leading-tight'>
          <p className='text-xl font-extrabold '>{player.first_name}</p>
          <p className='text-3xl  font-bold ' >{player.last_name}</p>
        </div>
        <div>
          <span className='text-7xl font-extrabold text-orange-600 tracking-wider'>{player.jersey_number}</span>
        </div>
      </div>

      <div className="flex px-6 pt-4">

        <div className="w-1/2 text-sm">
          <p className="uppercase text-lg font-semibold text-gray-600 mb-4">
            {formatPosition(player.position)}
          </p>

          <div className="space-y-3">
            <div className="flex justify-between border-b border-gray-600 pb-1">
              <span className="font-semibold">HEIGHT</span>
              <span className='text-gray-600'>{player.height}</span>
            </div>

            <div className="flex justify-between border-b border-gray-600 pb-1">
              <span className="font-semibold">WEIGHT</span>
              <span className='text-gray-600'>{player.weight_kg}</span>
            </div>

            <div className="flex justify-between border-b border-gray-600 pb-1">
              <span className="font-semibold">AGE</span>
              <span className='text-gray-600'>{player.age}</span>
            </div>

            <div className="flex justify-between border-b border-gray-600 pb-1">
              <span className="font-semibold">NICKNAME</span>
              <span className='text-gray-600 uppercase'>{player.nickname}</span>
            </div>

            <div className="flex justify-between border-b  border-gray-600 pb-1">
              <span className="font-semibold">TEAM</span>
              <span className='text-gray-600 uppercase'>{player.team}</span>
            </div>
          </div>
        </div>


        <div className="w-1/2 flex justify-end items-end">
          <img
            src={player.image_url}
            alt={player.first_name}
            className="h-64 object-contain"
          />
        </div>
      </div>


      <div className="bg-gray-200 grid grid-cols-6 text-center text-sm py-4">
        <div>
          <p className="text-xs text-gray-600">SEASON</p>
          <p className="font-semibold text-orange-600">AVERAGES</p>
        </div>

        <div>
          <p className="font-semibold">GP</p>
          <p className="text-lg text-gray-600 font-bold">{player.stats?.gp || player.stats?.games_played || '-'}</p>
        </div>

        <div>
          <p className="font-semibold">PPG</p>
          <p className="text-lg text-gray-600 font-bold">{player.stats?.ppg || '-'}</p>
        </div>

        <div>
          <p className="font-semibold">APG</p>
          <p className="text-lg text-gray-600 font-bold">{player.stats?.apg || '-'}</p>
        </div>

        <div>
          <p className="font-semibold">RPG</p>
          <p className="text-lg text-gray-600 font-bold">{player.stats?.rpg || '-'}</p>
        </div>

        <div>
          <p className="font-semibold">EFF</p>
          <p className="text-lg text-blue-600 font-bold">{calculateEFF(player.stats)}</p>
        </div>

        <div className="col-span-full mt-2 pt-2 border-t border-gray-300 grid grid-cols-3 gap-1">
          <div>
            <p className="text-[10px] text-gray-500">FG%</p>
            <p className="font-bold text-gray-700">
              {player.stats?.fga_pg > 0 ? ((player.stats.fgm_pg / player.stats.fga_pg) * 100).toFixed(1) + '%' : '-'}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500">3P%</p>
            <p className="font-bold text-gray-700">
              {player.stats?.tpa_pg > 0 ? ((player.stats.tpm_pg / player.stats.tpa_pg) * 100).toFixed(1) + '%' : '-'}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500">FT%</p>
            <p className="font-bold text-gray-700">
              {player.stats?.fta_pg > 0 ? ((player.stats.ftm_pg / player.stats.fta_pg) * 100).toFixed(1) + '%' : '-'}
            </p>
          </div>
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
          <button className='hover:cursor-pointer' onClick={handlePlayAudio}>
            <Volume2 className='text-sm ' />
          </button>

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
