import heroBg from "./../../assets/hero-bg.webp";
import useChuck from "./useChuck";
import { useNavigate } from "react-router";
import useScrollOffset from "../../hooks/useScrollOffset";

const Hero = () => {
  const navigate = useNavigate();

  const offsetY = useScrollOffset();

  // chuck norris chiste
  const { data, isLoading } = useChuck();

  return (
    <section
      className="relative pt-15 flex items-center justify-center min-h-[90vh]  text-white mt-[-64px] z-0"
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
          Welcome to <br /> <span className="text-indigo-400">Game Sale</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          A modern platform for finding deals (and we also tell jokes):{" "}
          {isLoading ? "Loading..." : data?.value}
        </p>
        <button
          onClick={() => navigate("/games")}
          className="mt-8 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg"
        >
          Start now
        </button>
      </div>
    </section>
  );
};

export default Hero;
