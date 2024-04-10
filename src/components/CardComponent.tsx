import imdb from "../assets/imdb.png";
import { Result } from "../interfaces/topRatedMovies";



interface Props {
  movie: Result;
  onCardClick: (movie : Result) => void;
}
export default function CardComponent({ movie, onCardClick }: Props) {
  return (
    <div onClick={() => onCardClick(movie)}>
      <div className="md:p-4 flex flex-col gap-2 cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="poster"
          className="rounded-lg"
        />
        <p className="text-white/60 font-[12px]">{movie.release_date.slice(0, 4)}</p>
        <h4>{movie.title}</h4>
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
