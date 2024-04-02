import HeroSection from "./Components/HeroSection";
import InputSearch from "./Components/InputSearch";
import next from "./assets/Chevron right.svg";
import prev from "./assets/Chevron left.svg";
import Menu from "./assets/Menu.svg";
import logo from "/device-tv.svg"


import { useEffect, useState } from "react";
import { useTrendingMovies } from "./hooks/useTrendingMovies";
import { Result, trendingMovies } from "./interfaces/trendingMovies";
import ButtonSlider from "./Components/ButtonSlider";

export default function App() {
  const { getTrendings } = useTrendingMovies();
  const [trending, setTrending] = useState<Result[]>([]);
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    getTrendings().then((data: trendingMovies) => {
      setTrending((data.results as Result[]).slice(0, 12));
    });
  }, []);

  const handleNext = (pos: any) => {
    setAuto(false);
    current == 11 ? setCurrent(0) : setCurrent(current + pos);
  };

  const handlePrev = (pos: any) => {
    setAuto(false);
    current == 0 ? setCurrent(11) : setCurrent(current + pos);
  };

  useEffect(() => {
    setTimeout(() => {
      if (auto) {
        current == 11 ? setCurrent(0) : setCurrent(current + 1);
      }
    }, 10000);
  }, [current]);

  return (
    <div>
      <ul className="relative">
        {trending.map((movie, index) => (
          <li key={movie.id} className="absolute top-0 w-full">
            <HeroSection
              title={movie.title}
              overview={movie.overview.length > 250 ? movie.overview.slice(0, 250) + "..." : movie.overview}
              vote={`${movie.vote_average.toFixed(1)}`}
              isVisible={current == index}
              poster={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            >
            <ButtonSlider handleClick={() => handlePrev(-1)} src={prev} />  
            <ButtonSlider handleClick={() => handleNext(1)} src={next} />  
            </HeroSection>
          </li>
        ))}
      </ul>
      <header className="absolute top-0 h-[60px] w-full flex items-center justify-center z-[0] py-4">
        <div className="md:w-[1200px] w-[90%] flex flex-row items-center justify-between">
          <a href="/"><span className="text-xl font-bold flex gap-2">
            <img src={logo} alt="logo" />
            UTrailers</span></a>
          <InputSearch />
          <div className="menu flex flex-row items-center gap-6">
            <a href="#"><p>Sign in</p></a>
            <button><img src={Menu} alt="icon_menu" /></button>
          </div>
        </div>
      </header>
    </div>
  );
}
