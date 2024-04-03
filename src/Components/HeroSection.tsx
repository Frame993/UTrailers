import imdb from "../assets/imdb.png";
import play_icon from "../assets/Play.png";
import ButtonWatch from "./ButtonWatch";
import ButtonSlider from "./ButtonSlider";
import next from "../assets/Chevron right.svg";
import prev from "../assets/Chevron left.svg";

import { Result, trendingAll } from "../interfaces/trendingAll";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import { useEffect, useState } from "react";


export default function HeroSection() {
  const { getTrendings } = useTrendingMovies();
  const [trending, setTrending] = useState<Result[]>([]);
  const [auto, setAuto] = useState(true);
  const [current, setCurrent] = useState(0);

  //data
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

  //timeout
  useEffect(() => {
    setTimeout(() => {
      if (auto) {
        current == 11 ? setCurrent(0) : setCurrent(current + 1);
      }
    }, 10000);
  }, [current]);

  return (
    <ul className="relative h-screen">
      {trending.map((movie, index) => (
        <li key={movie.id} className="w-full absolute top-0">
          <div
            className={`flex flex-col justify-end items-center h-screen relative duration-1000 transition-all ${ index == current ? "opacity-100" : "opacity-0" }`}
          >
            <div className="flex flex-col md:w-[1200px] w-[90%] gap-10 mb-8">
              <section className="flex flex-col text-center items-center gap-4">
                <h1 className="md:w-[50%] w-[90%] text-balance">
                  {movie.title || movie.name}
                </h1>
                <div className="critic-container flex flex-row gap-4">
                  <div className="imdb-container flex gap-2 items-center">
                    <img
                      src={imdb}
                      alt="imbd_icon"
                      className="w-full h-[18px]"
                    />
                    <p>{`${movie.vote_average.toFixed(1)}`}</p>
                  </div>
                </div>
                <article className="md:w-[60%] w-[90%] text-pretty mb-4">
                  <p className="text-white/60">
                    {movie.overview.length > 250
                      ? movie.overview.slice(0, 250) + "..."
                      : movie.overview}
                  </p>
                </article>
                <ButtonWatch text="Trailer" icon={play_icon} />
              </section>
              <div className="rounded-lg flex items-center justify-between gap-2 absolute md:relative bottom-10 md:bottom-4 w-[90%] md:w-[1200px]">
                <ButtonSlider handleClick={() => handlePrev(-1)} src={prev} />
                <ButtonSlider handleClick={() => handleNext(1)} src={next} />
              </div>
            </div>
            <div className="top-0 z-[-99] absolute h-screen w-full">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="poster_image"
                className="object-cover w-full h-screen brightness-25"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
