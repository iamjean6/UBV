import PlayerCard from "../UI/playercard";
import { players } from "../../constants";

const Roster = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </section>
  );
};

export default Roster;
