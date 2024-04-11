import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useState, useEffect } from "react";
import { TopRatedMoviesResult } from "../interfaces/topRatedMovies";
import CardComponent from "./CardComponent";
import { useNavigate } from "react-router-dom";

export default function TopRatedMovies() {
  const { getTopRatedMovies } = useTopRatedMovies();
  const [topRatedMovies, setTopRatedMovies] = useState<TopRatedMoviesResult[]>([]);

  useEffect(() => {
    getTopRatedMovies().then((data) => {
      setTopRatedMovies(data?.results || []);
    });
  }, []);

  const navigate = useNavigate()

  return (
    <ul className="grid grid-cols-2 md:grid-cols-5 justify-beetween md:gap-x-2 md:gap-y-4 gap-x-4 gap-y-8">
      {topRatedMovies.map((movie) => (
        <li  key={movie.id}  className="flex flex-col rounded-lg">
          <CardComponent 
            onCardClick={(movie) => navigate(`/details/${movie.title}`, { state: movie })}
            movie={movie as TopRatedMoviesResult}
          />
        </li>
      ))}
    </ul>
  );
}
