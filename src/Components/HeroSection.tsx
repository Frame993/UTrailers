import Poster from "../assets/Poster.png";
import imdb from "../assets/imdb.png";
import tomatoes from "../assets/Rotentomatoes.png";
import play_icon from "../assets/Play.png";

import ButtonWatch from "./ButtonWatch";
import { useEffect, useState } from "react";
import { useTrendingMovies } from "../hooks/useTrendingMovies";


interface Props {
  className?: string;
}
export default function HeroSection({ className }: Props) {

  const { getTrendings } = useTrendingMovies();
  const [trendings, setTrendings] = useState<any>();

  useEffect(() => {
    const get = async () => {
      setTrendings(await getTrendings());
    };
    get();
  }, []);

  console.log(trendings)

  return (
    <div
      className={`flex flex-col justify-center items-center hero md:h-[600px] relative ${className}`}
    >
      <section className="flex flex-col gap-8 w-[1200px]">
        <h1 className="md:w-[30%]">John Wick 3 : Parabellum</h1>
        <div className="critic-container flex flex-row gap-4">
          <div className="imdb-container flex gap-2 items-center">
            <img src={imdb} alt="imbd_icon" className="w-full h-[18px]" />
            <p>86.0/100</p>
          </div>
          <div className="tomatoes-container flex gap-2 items-center">
            <img src={tomatoes} alt="imbd_icon" className="w-full h-[18px]" />
            <p>97%</p>
          </div>
        </div>
        <article className="md:w-[30%]">
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
        </article>
        <ButtonWatch text="Watch Trailer" icon={play_icon} />
      </section>
      <div className="top-0 z-[-1] absolute h-[600px] overflow-hidden">
        <img
          src={Poster}
          alt="poster_image"
          className="object-cover w-full h-screen"
        />
      </div>
    </div>
  );
}
