import { useEffect, useState } from "react";
import { Result } from "../interfaces/trendingAll";
import { useTopRatedSeries } from "../hooks/useTopRatedSeries";


import imdb from "../assets/imdb.png";

export default function TopRatedSeries() {
  const { getTopRatedSeries } = useTopRatedSeries();
  const [topRatedSeries, setTopRatedSeries] = useState<Result[]>([]);

  useEffect(() => {
    getTopRatedSeries().then((data) => {
      setTopRatedSeries(data.results);
    });
  }, []);

  console.log(topRatedSeries);

  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 justify-beetween gap-x-8 gap-y-16">
        {topRatedSeries.map((serie) => (
          <li key={serie.id} className="flex flex-col rounded-lg">
            <div className="p-4 flex flex-col gap-2">
              <img
                src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                alt="poster"
                className="rounded-lg"
              />
              <p className="text-white/60 font-[12px]">
                {serie.first_air_date?.slice(0, 4)}
              </p>
              <h4>{serie.name}</h4>
              <div className="critic-container flex flex-row gap-4">
                <div className="imdb-container flex gap-2 items-center">
                  <img src={imdb} alt="imbd_icon" className="w-full h-[18px]" />
                  <p>{serie.vote_average.toFixed(1)}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
