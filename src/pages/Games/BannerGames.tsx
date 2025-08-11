import useScrollOffset from "../../hooks/useScrollOffset";
import heroBg from "./../../assets/hero-bg.webp";

const BannerGames = () => {
  const offsetY = useScrollOffset();
  return (
    <div
      className="relative pt-15 flex items-center justify-center min-h-[50vh]  text-white mt-[-64px] z-0"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPositionY: `${offsetY * -0.1}px`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-transparent backdrop-blur-xs" />

      {/* Contenido centrado */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          All <span className="text-indigo-400">Games</span>
        </h1>
      </div>
    </div>
  );
};

export default BannerGames;
