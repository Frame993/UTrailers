import { TrendingAllResult } from "../interfaces/trendingAll";

interface Props {
  text: string;
  icon: string;
  onClick: (movie: TrendingAllResult) => void ;
  movie: TrendingAllResult
}

export default function ButtonWatch({ text, icon, onClick, movie }: Props) {
  return (
    <button
     onClick={() => onClick(movie)}
      className="btn flex flex-row items-center gap-2 bg-[#E50000] w-fit px-6 py-4 rounded-lg uppercase font-bold z-10"
    >
      <img src={icon} alt="icon" />
      {text}
    </button>
  );
}
