import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useState, useEffect } from "react";
import { Result } from "../interfaces/trendingAll";
import CardComponent from "./CardComponent";
export default function TopRatedMovies() {
  const { getTopRatedMovies } = useTopRatedMovies();
  const [topRatedMovies, setTopRatedMovies] = useState<Result[]>([]);

  useEffect(() => {
    getTopRatedMovies().then((data) => {
      setTopRatedMovies(data.results);
    });
  }, []);

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 justify-beetween md:gap-x-6 md:gap-y-6 gap-6">
      {topRatedMovies.map((movie) => (
        <li key={movie.id} className="flex flex-col rounded-lg">
          <CardComponent
            poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            title={movie.title}
            date={movie.release_date}
            vote={movie.vote_average}
          />
        </li>
      ))}
    </ul>
  );
}
