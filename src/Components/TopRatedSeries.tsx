import { useEffect, useState } from "react";
import { Result } from "../interfaces/trendingAll";
import { useTopRatedSeries } from "../hooks/useTopRatedSeries";
import CardComponent from "./CardComponent";

export default function TopRatedSeries() {
  const { getTopRatedSeries } = useTopRatedSeries();
  const [topRatedSeries, setTopRatedSeries] = useState<Result[]>([]);

  useEffect(() => {
    getTopRatedSeries().then((data) => {
      setTopRatedSeries(data.results);
    });
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-4 justify-beetween md:gap-x-6 md:gap-y-6 gap-6">
        {topRatedSeries.map((serie) => (
          <li key={serie.id} className="flex flex-col rounded-lg">
            <CardComponent
            title={serie.name}
              poster={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
              date={serie.first_air_date}
              vote={serie.vote_average}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
