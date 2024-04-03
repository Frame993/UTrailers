import HeroSection from "./Components/HeroSection";
import InputSearch from "./Components/InputSearch";
import next from "./assets/Chevron right.svg";
import prev from "./assets/Chevron left.svg";
import Menu from "./assets/Menu.svg";
import logo from "/device-tv.svg";

import { useEffect, useState } from "react";
import { useTrendingMovies } from "./hooks/useTrendingMovies";
import { Result, trendingAll } from "./interfaces/trendingAll";
import ButtonSlider from "./Components/ButtonSlider";
import TopRatedMovies from "./Components/TopRatedMovies";
import TopRatedSeries from "./Components/TopRatedSeries";

export default function App() {
  const { getTrendings } = useTrendingMovies();
  const [trending, setTrending] = useState<Result[]>([]);
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const [movies, setMovies] = useState(true);
 
  useEffect(() => {
    getTrendings().then((data: trendingAll) => {
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
    <div className="flex flex-col">
      <header className="absolute top-0 h-[60px] w-full flex items-center justify-center z-10 py-4">
        <div className="md:w-[1200px] w-[90%] flex flex-row items-center justify-between">
          <a href="/">
            <span className="text-xl font-bold flex gap-2">
              <img src={logo} alt="logo" />
              UTrailers
            </span>
          </a>
          <InputSearch />
          <div className="menu flex flex-row items-center gap-6">
            <a href="#">
              <p>Sign in</p>
            </a>
            <button>
              <img src={Menu} alt="icon_menu" />
            </button>
          </div>
        </div>
      </header>
      <ul className="relative h-screen">
        {trending.map((movie, index) => (
          <li key={movie.id} className="w-full absolute top-0">
            <HeroSection
              title={movie.title || movie.name}
              overview={
                movie.overview.length > 250
                  ? movie.overview.slice(0, 250) + "..."
                  : movie.overview
              }
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
      <div className="flex flex-col w-[90%] md:w-[1200px] my-10 mx-auto">
        <div className="mb-16 flex flex-row gap-4 items-center">
          <h2 className="mr-4">Top Rated</h2>
          <button
            className={`bg-[#E50000] px-6 py-2 rounded-lg`}
            onClick={() => setMovies(true)}
          >
            Movies
          </button>
          <button
            className={`px-6 py-2 rounded-lg`}
            onClick={() => setMovies(false)}
          >
            Series
          </button>
        </div>
        {movies ? <TopRatedMovies /> : <TopRatedSeries />}
      </div>
    </div>
  );
}
