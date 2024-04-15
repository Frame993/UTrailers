import { useEffect, useState } from "react";
import { TopRatedSeriesResult } from "../interfaces/topRatedSeries";
import { useTopRatedSeries } from "../hooks/useTopRatedSeries";
import CardComponent from "./CardComponent";
import { useNavigate } from "react-router-dom";

export default function TopRatedSeries() {
  const { getTopRatedSeries } = useTopRatedSeries();
  const [topRatedSeries, setTopRatedSeries] = useState<TopRatedSeriesResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopRatedSeries().then((data) => {
      setTopRatedSeries(data?.results || []);
    });
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-5 justify-beetween md:gap-x-2 md:gap-y-4 gap-x-4 gap-y-8">
        {topRatedSeries.map((serie) => (
          <li key={serie.id} className="flex flex-col rounded-lg">
            <CardComponent
              onCardClick={(movie) =>
                navigate(`/details/tv/${movie.title}`, { state: movie })
              }
              movie={serie as any}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
