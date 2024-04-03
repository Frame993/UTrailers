import imdb from "../assets/imdb.png";

interface Props {
  poster?: string;
  title?: string;
  date?: string | undefined;
  vote?: number;
}
export default function CardComponent({ poster, title, date, vote }: Props) {
  return (
    <div>
      <div className="md:p-4 flex flex-col gap-2">
        <img
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt="poster"
          className="rounded-lg"
        />
        <p className="text-white/60 font-[12px]">{date?.slice(0, 4)}</p>
        <h4>{title}</h4>
        <div className="critic-container flex flex-row gap-4">
          <div className="imdb-container flex gap-2 items-center">
            <img src={imdb} alt="imbd_icon" className="w-full h-[18px]" />
            <p>{vote?.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
