import ButtonSlider from "../components/ButtonSlider";
import prev from "../assets/Chevron left.svg";

import { Result } from "../interfaces/trendingAll";
import { useLocation } from "react-router-dom";
import { useDetailInfoMovie } from "../hooks/useDetailInfoMovie";

export default function Details() {
  const location = useLocation();
  const movie = location.state as Result;

  const { details } = useDetailInfoMovie(movie);

  console.log(details)

  return (
    <div className="w-[90%] md:w-[]1200px] mx-auto m-4">
      <ButtonSlider
        src={prev}
        handleClick={() => {
          window.history.back();
        }}
      />
      <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4">
        <section className="flex flex-col text-center items-center justify-end gap-4 h-[600px] overflow-hidden rounded-lg relative pb-16">
          <img
            className="w-full h-full object-cover absolute z-[-1]"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt="Poster"
          />
          <h1 className="md:w-[50%] w-[90%] text-balance">
            {movie?.title ?? movie.name}
          </h1>
          <p className="text-white/60 w-[80%] mb-2">{movie.overview}</p>
        </section>
        <section className="flex flex-col gap-4 bg-[#1A1A1A] p-8 rounded-lg">
          <div>
            <img src="" alt="" />
            <h3> Release year <span>{movie.release_date?.slice(0, 4) ?? movie.first_air_date?.slice(0, 4)}</span></h3>
          </div>
          <h3>
            Available languages <span>English, hindi, etc...</span>
          </h3>
          <h3>
            Genres <span>Action, Fantasy</span>
          </h3>
          <h3>
            IMDB <span>7.4</span>
          </h3>
        </section>
      </div>
    </div>
  );
}
