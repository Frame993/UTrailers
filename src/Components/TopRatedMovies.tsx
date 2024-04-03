import imdb from "../assets/imdb.png";

import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useState, useEffect } from "react";
import { Result } from "../interfaces/trendingAll";

export default function TopRatedMovies() {
  const { getTopRatedMovies } = useTopRatedMovies();
  const [topRatedMovies, setTopRatedMovies] = useState<Result[]>([]);

  useEffect(() => {
    getTopRatedMovies().then((data) => {
      setTopRatedMovies(data.results);
    });
  }, []);

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 justify-beetween gap-x-8 gap-y-16">
      {topRatedMovies.map((movie) => (
        <li key={movie.id} className="flex flex-col rounded-lg">
          <div className="p-4 flex flex-col gap-2">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="poster"
              className="rounded-lg"
            />
            <p className="text-white/60 font-[12px]">
              {movie.release_date?.slice(0, 4)}
            </p>
            <h4>{movie.title}</h4>
            <div className="critic-container flex flex-row gap-4">
              <div className="imdb-container flex gap-2 items-center">
                <img src={imdb} alt="imbd_icon" className="w-full h-[18px]" />
                <p>{movie.vote_average.toFixed(1)}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
