import ButtonSlider from "../components/ButtonSlider";
import prev from "../assets/Chevron left.svg";
import Icon_calendar from "../assets/Icon-calendar.png";
import Icon_genres from "../assets/Icon-genres.png";
import Icon_languages from "../assets/Icon_languages.png";
import imdb from "../assets/imdb.png";

import { TrendingAllResult } from "../interfaces/trendingAll";
import { useLocation } from "react-router-dom";
import { useDetailInfoMovie } from "../hooks/useDetailInfoMovie";
import { useEffect, useState } from "react";
import {
  Genre,
  ProductionCompany,
  SpokenLanguage,
} from "../interfaces/movieDetails";
import DetailsDataSection from "../components/DetailsDataSection";
import DetailsTag from "../components/DetailsTag";

export default function Details() {
  const location = useLocation();
  const movie = location.state as TrendingAllResult;

  const { details } = useDetailInfoMovie(movie);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [languages, setLanguages] = useState<SpokenLanguage[]>([]);
  const [company, setCompany] = useState<ProductionCompany[]>([]);

  useEffect(() => {
    if (details) {
      setLanguages(details.spoken_languages);
      setGenres(details.genres);
      setCompany(details.production_companies);
    }
  });

  return (
    <div className="flex flex-col w-[90%] md:w-[]1200px] mx-auto m-4">
      <ButtonSlider
        src={prev}
        handleClick={() => {
          window.history.back();
        }}
      />
      <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4">
        <section className="flex flex-col text-center items-center justify-end gap-4 h-[600px] overflow-hidden relative rounded-lg pb-10">
          <img
            className="w-full h-full object-cover absolute z-[-1]"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt="Poster"
          />
          <h1 className="md:w-[50%] w-[90%] text-balance text-[30px]">
            {movie?.title ?? movie.name}
          </h1>
          <div className="critic-container flex flex-row gap-4">
            <div className="imdb-container flex gap-2 items-center">
              <img src={imdb} alt="imbd_icon" className="h-[18px]" />
              <p>{`${details?.vote_average.toFixed(1)}`}</p>
              <p className="text-white/80 text-[14px]">{`(${details?.vote_count} votes)`}</p>             
            </div>
          </div>
          <p className="text-white/60 w-[80%] mb-2">{movie.overview}</p>
        </section>
        <section className="flex flex-col gap-4 bg-[#1A1A1A] p-10 rounded-lg">
          <DetailsDataSection icon={Icon_calendar} text="Release Date">
            <span className="text-white text-[20px]">
              {movie.release_date?.slice(0, 4) ??
                movie.first_air_date?.slice(0, 4)}
            </span>
          </DetailsDataSection>
          <DetailsDataSection icon={Icon_languages} text="Available Languages">
            <ul className="flex flex-row gap-2 flex-wrap ">
              {languages.map((language) => (
                <li key={language.english_name}>
                  <DetailsTag name={language.english_name} />
                </li>
              ))}
            </ul>
          </DetailsDataSection>
          <DetailsDataSection icon={Icon_genres} text="Genres">
            <ul className="flex flex-row gap-2 flex-wrap ">
              {genres.map((genre) => (
                <li key={genre.id}>
                  <DetailsTag name={genre.name} />
                </li>
              ))}
            </ul>
          </DetailsDataSection>
          <DetailsDataSection text="Production Company">
            <ul className="company-img flex flex-row flex-wrap gap-2">
              {details?.production_companies.map((company) => (
                <li key={company.id}>
                  <DetailsTag name={company.name} />
                </li>
              ))}
            </ul>
          </DetailsDataSection>
        </section>
      </div>
    </div>
  );
}
