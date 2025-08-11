import useGames from "./useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useMemo, useState } from "react";
import BannerGames from "./BannerGames";

const Games = () => {
  const { data, isLoading } = useGames();

  const [sortBy, setSortBy] = useState<"alphabetical" | "price" | "savings">(
    "alphabetical"
  );

  const sortedGames = useMemo(() => {
    if (!data) return [];
    const gamesCopy = [...data];
    if (sortBy === "alphabetical") {
      gamesCopy.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "price") {
      gamesCopy.sort(
        (a, b) => parseFloat(a.salePrice) - parseFloat(b.salePrice)
      );
    } else if (sortBy === "savings") {
      gamesCopy.sort((a, b) => parseFloat(b.savings) - parseFloat(a.savings));
    }
    return gamesCopy;
  }, [data, sortBy]);

  // Si no hay datos, mostramos un esqueleto de carga
  if (isLoading) {
    return (
      <>
        <div>
          <BannerGames />
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-30 mt-[-64px] z-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <GameCardSkeleton key={i} />
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <BannerGames />
      </div>
      <div className="max-w-[1200px] mx-auto pt-20 pb-50 mt-[-64px] z-0 px-4">
        {/* Selector de orden */}
        <div className="mb-6 flex justify-end">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="border rounded px-3 py-1"
          >
            <option className="text-black" value="alphabetical">
              Order by A-Z
            </option>
            <option className="text-black" value="price">
              Order by Price
            </option>
            <option className="text-black" value="savings">
              Order by Savings
            </option>
          </select>
        </div>

        {/* Grid de juegos */}
        <div className="grid justify-items-center grid-cols-1 sm:justify-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedGames.map((game) => (
            <GameCard key={game.gameID} game={game} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Games;
