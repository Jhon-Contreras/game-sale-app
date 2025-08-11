import type { Game } from "./useGames";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div
        onClick={() => {
          window.location.href = `https://www.cheapshark.com/redirect?dealID=${game.dealID}`;
        }}
        className="max-w-sm bg-black/20 backdrop-blur-md rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        <img
          src={game.thumb}
          alt={`Portada de ${game.title}`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-1 truncate">{game.title}</h3>

          <div className="flex items-center space-x-2 mb-2">
            {game.isOnSale === "1" ? (
              <>
                <span className="text-red-600 font-semibold">
                  ${game.salePrice}
                </span>
                <span className="line-through text-white-400">
                  ${game.normalPrice}
                </span>
                <span className="text-green-600 font-semibold">
                  -{parseFloat(game.savings).toFixed(0)}%
                </span>
              </>
            ) : (
              <span className="font-semibold">${game.normalPrice}</span>
            )}
          </div>

          <div className="flex justify-between text-sm text-white-600 mb-2">
            <a
              href={game.metacriticLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Metacritic: {game.metacriticScore || "N/A"}
            </a>
            <span>{game.steamRatingText || "Sin valoración"}</span>
          </div>

          <div className="text-xs text-gray-400 mb-2">
            Lanzamiento:{" "}
            {new Date(game.releaseDate * 1000).toLocaleDateString()}
          </div>

          <div className="text-xs text-gray-700 font-medium">
            Rating oferta: {game.dealRating || "N/A"}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
