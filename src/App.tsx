import HeroSection from "./Components/HeroSection";
import InputSearch from "./Components/InputSearch";

import { useEffect, useState } from "react";
import { useTrendingMovies } from "./hooks/useTrendingMovies";
import { Result, trendingMovies } from "./interfaces/trendingMovies";

export default function App() {
  const { getTrendings } = useTrendingMovies();
  const [trending, setTrending] = useState<Result[]>([]);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    getTrendings().then((data: trendingMovies) => {
      setTrending((data.results as Result[]).slice(0, 6));
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      visibleIndex == 5
        ? setVisibleIndex(0)
        : setVisibleIndex(visibleIndex + 1);
    }, 5000);
  }, [visibleIndex]);

  return (
    <div>
      <ul className="relative">
        {trending.map((movie, index) => (
          <li key={movie.id} className="absolute top-0 w-full">
            <HeroSection
              title={movie.title}
              overview={movie.overview}
              poster={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              isVisible={visibleIndex == index}
            />
          </li>
        ))}
      </ul>
      <header className="absolute top-0 h-[60px] w-full flex items-center justify-center z-[0]">
        <div className="md:w-[1200px] w-[90%] flex flex-row items-center justify-between">
          <span className="text-xl font-bold">UTraiers</span>
          <InputSearch />
        </div>
      </header>
    </div>
  );
}
