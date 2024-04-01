import imdb from "../assets/imdb.png";
import play_icon from "../assets/Play.png";
import ButtonWatch from "./ButtonWatch";


interface Props {
  className?: string;
  title?: string;
  overview?: string;
  poster?: string;
  isVisible: boolean;
  vote?: number | string;
  children?: React.ReactNode;
}
export default function HeroSection({
  className,
  title,
  overview,
  poster,
  isVisible,
  vote,
  children,
}: Props) {
  return (
    <div
      className={`flex flex-col justify-end items-center h-screen relative ${className} duration-1000 transition-all ${
        !isVisible && "opacity-0"
      }`}
    >
      <div className="flex flex-col md:flex-row md:w-[1200px] w-[90%] md:justify-between md:items-end gap-10 mb-10 md:mb-20">
        <section className="flex flex-col gap-4">
          <h1 className="md:w-[30%] w-[60%]">{title}</h1>
          <div className="critic-container flex flex-row gap-4">
            <div className="imdb-container flex gap-2 items-center">
              <img src={imdb} alt="imbd_icon" className="w-full h-[18px]" />
              <p>{vote}</p>
            </div>
          </div>
          <article className="md:w-[40%] w-[95%] text-pretty">
            <p>{overview}</p>
          </article>
          <ButtonWatch text="Watch Trailer" icon={play_icon} />
        </section>
        <div className="rounded-lg flex items-center gap-2">{children}</div>
      </div>
      <div className="top-0 z-[-99] absolute h-screen overflow-hidden w-full">
        <img
          src={poster}
          alt="poster_image"
          className="object-cover w-full h-screen brightness-50"
        />
      </div>
    </div>
  );
}
