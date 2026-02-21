import { useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi"
import { statusStyles, resultStyles } from "../../constants"
import { ChartArea, Play } from "lucide-react"

const GameCard = ({ game }) => {
  const [expanded, setExpanded] = useState(false)
  const resultColor = resultStyles[game.result]
  const statusKey = game.type === "FINAL" ? "FINAL" : game.status
  const currentStatus = statusStyles[statusKey]

  // ---------- DATE HANDLING ----------
  const gameDate = new Date(game.date)
  const day = gameDate.toLocaleString("default", { weekday: "long" })
  const formattedDate = gameDate.toLocaleDateString()
  const time = gameDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
 

  let primaryAction = {
    label: "Watch",
    icon: <Play className="text-xl" />
  }
  if (game.type === "FINAL") {
    primaryAction = {
      label: "Game Recap",
      icon: <Play className="text-xl" />,
    }
  }
  if (game.type === "LIVE") {
    primaryAction = {
      label: "Watch Live",
      icon: <Play className="text-xl" />,
    }
  }
  let secondaryAction = null
  if (game.type === "FINAL" || game.type === "LIVE") {
    secondaryAction = {
      label: "GameTracker",
      icon: <ChartArea className="text-xl" />
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      {/* MOBILE */}
      <div className="lg:hidden">
        <div
          className={`${currentStatus.bg} ${currentStatus.text} text-center py-2 text-sm font-bold tracking-widest uppercase`}
        >
          {game.status}
        </div>

        <div className="flex justify-between p-4">
          <div>
            <p className="text-sm uppercase tracking-wide font-bold font-semibold">{day}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{formattedDate}</h2>
            {game.type === "UPCOMING" ? (
              <p className="text-lg font-semibold">{time}</p>
            ) : (
              <p className="text-lg font-bold text-gray-700">FINAL</p>
            )}

            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p><span className="font-semibold">Venue:</span> {game.venue}</p>
              <p><span className="font-semibold">City:</span> {game.city}</p>
            </div>
            <div className="space-y-1 text-3xl">
               {game.type === "FINAL" && (
              <div className={`mt-1 font-bold ${resultColor}`}>
                {game.result} {game.homeScore} - {game.awayScore}
              </div> )}
            </div>
           
           
          </div>

          <div className="flex flex-col items-center px-8 gap-1">
            <img src={game.logo} alt="logo" className="w-40 h-40 object-contain" />
            <div>
              <p>{game.opponent}</p>
            </div>
          </div>
        </div>

        <div
          onClick={() => setExpanded(!expanded)}
          className="border-t flex justify-center py-2 cursor-pointer"
        >
          {expanded ? <HiChevronUp /> : <HiChevronDown />}
        </div>

        {expanded && (
          <div className="border-t p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <img src={game.jersey} alt="jersey" className="h-28 object-contain" />
                <p className="text-xs mt-2">Powered by: URBANVILLESPORTS</p>
              </div>
              <div>
                {game.eventImage ? (
                  <img src={game.eventImage} alt="event" className="w-full h-28 object-cover rounded-md" />
                ) : (
                  <div className="w-full h-28 bg-gray-100 rounded-md" />
                )}
              </div>
            </div>

            <button className="px-6 flex items-center gap-2 py-2 rounded-full hover:cursor-pointer border border-orange-500 text-orange-600 font-semibold transition-all duration-200 hover:bg-orange-600 hover:text-white">
              {primaryAction.icon}
              <span className="uppercase">{primaryAction.label}</span>
            </button>

            {secondaryAction && (
              <button className="px-6 flex items-center gap-2 py-2 rounded-full border hover:cursor-pointer border-orange-500 text-orange-600 font-semibold transition-all duration-200 hover:bg-orange-600 hover:text-white">
                {secondaryAction.icon}
                <span className="uppercase">{secondaryAction.label}</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex lg:flex-col">
        <div className="grid grid-cols-[70px_1.5fr_1fr_200px_200px]">
          <div className={`flex items-center justify-center ${currentStatus.bg} border-r ${currentStatus.border}`}>
            <span className={`rotate-[-90deg] text-xs font-bold tracking-widest uppercase ${currentStatus.text}`}>
              {game.status}
            </span>
          </div>

          <div className="p-6 space-y-4 border-r">
            <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">{day}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{formattedDate}</h2>
            {game.type === "UPCOMING" ? (
              <p className="text-lg font-semibold">{time}</p>
            ) : (
              <p className="text-lg font-bold text-gray-700">FINAL</p>
            )}

            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p><span className="font-semibold">Venue:</span> {game.venue}</p>
              <p><span className="font-semibold">City:</span> {game.city}</p>
            </div>
            <div className="space-y-1 text-3xl">
              {game.type === "FINAL" && (
              <div className={`mt-2 font-bold ${resultColor}`}>
                {game.result} {game.homeScore} - {game.awayScore}
              </div>
            )}
            </div>
            
          </div>

          <div className="flex flex-col items-center gap-4 p-6 border-r">
            <img src={game.logo} alt="logo" className="w-40 h-40 object-contain" />
            <div>
              <p className="font-bold text-xl">{game.opponent}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-4 border-r">
            <img src={game.jersey} alt="jersey" className="h-32 object-contain" />
            <p className="text-xs mt-2">Powered by: URBANVILLESPORTS</p>
          </div>

          <div className="flex items-center justify-center p-4">
            {game.eventImage ? (
              <img src={game.eventImage} alt="event" className="w-full h-40 object-cover rounded-md" />
            ) : (
              <div className="w-full h-40 bg-gray-100 rounded-md" />
            )}
          </div>
        </div>

        <div className="border-t p-4 flex flex-cols gap-2 items-center">
          <button className="px-6 flex items-center gap-2 py-2 rounded-full border border-orange-500 text-orange-600 font-semibold transition-all duration-200 hover:bg-orange-600 hover:text-white">
            <Play className="text-xl" />
            <span className="uppercase"> Watch Replay</span>
          </button>
          {secondaryAction && (
            <button className="px-6 flex items-center gap-2 py-2 rounded-full border hover:cursor-pointer border-orange-500 text-orange-600 font-semibold transition-all duration-200 hover:bg-orange-600 hover:text-white">
              {secondaryAction.icon}
              <span className="uppercase">{secondaryAction.label}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default GameCard