import imdb from "../assets/imdb.png";
import { TopRatedMoviesResult } from "../interfaces/topRatedMovies";
import { TopRatedSeriesResult} from "../interfaces/topRatedSeries";

type ResultUnion = TopRatedMoviesResult & TopRatedSeriesResult

interface Props {
  movie:  ResultUnion;
  onCardClick: (movie : ResultUnion) => void;
}
export default function CardComponent({ movie, onCardClick }: Props) {
  return (
    <div onClick={() => onCardClick(movie)}>
      <div className="md:p-4 flex flex-col gap-2 cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster"
          className="rounded-lg"
        />
        <p className="text-white/60 font-[12px]">{movie.release_date?.slice(0, 4) ?? movie.first_air_date?.slice(0, 4)}</p>
        <h4>{movie.title || movie.name}</h4>
        <div className="critic-container flex flex-row gap-4">
          <div className="imdb-container flex gap-2 items-center">
            <img src={imdb} alt="imbd_icon" className="w-full h-[18px]" />
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
