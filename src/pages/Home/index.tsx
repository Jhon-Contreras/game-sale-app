import Hero from "./Hero";
import HomeGames from "./HomeGames";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="pt-20 pb-20">
        <h2 className="text-2xl md:text-2xl font-bold leading-tight text-center mb-10">
          Recommended <span className="text-indigo-400">Games</span>
        </h2>
        <HomeGames />
      </div>
    </>
  );
};

export default Home;
