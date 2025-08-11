export default function GameCardSkeleton() {
  return (
    <div className="max-w-sm bg-black/20 backdrop-blur-md rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div> {/* título */}
        <div className="flex items-center space-x-2">
          <div className="h-5 bg-gray-300 rounded w-16"></div> {/* precio 1 */}
          <div className="h-5 bg-gray-300 rounded w-12"></div> {/* precio 2 */}
          <div className="h-5 bg-gray-300 rounded w-8"></div> {/* ahorro */}
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-300 rounded w-24"></div>{" "}
          {/* metacritic */}
          <div className="h-4 bg-gray-300 rounded w-20"></div>{" "}
          {/* steam rating */}
        </div>
        <div className="h-3 bg-gray-300 rounded w-32"></div> {/* lanzamiento */}
        <div className="h-3 bg-gray-300 rounded w-20"></div>{" "}
        {/* rating oferta */}
      </div>
    </div>
  );
}
