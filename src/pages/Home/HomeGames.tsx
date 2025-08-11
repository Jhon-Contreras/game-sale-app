import useGames, { type Game } from "../Games/useGames";
import GameCardSkeleton from "../Games/GameCardSkeleton";
import GameCard from "../Games/GameCard";

function getRandomGames(games: Game[], count: number) {
  // mezclar aleatoriamente el array
  const shuffled = [...games].sort(() => 0.5 - Math.random());
  // Obtener solo los primeros count elementos
  return shuffled.slice(0, count);
}

const HomeGames = () => {
  const { data, isLoading } = useGames();

  if (isLoading) {
    return (
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <GameCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  // Cuando data ya está disponible, llama a getRandomGames para obtener 4 juegos aleatorios.
  const randomGames = data ? getRandomGames(data, 4) : [];
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
      {randomGames.map((game) => (
        <GameCard key={game.gameID} game={game} />
      ))}
    </div>
  );
};

export default HomeGames;
