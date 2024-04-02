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
      <div className="flex flex-col md:w-[1200px] w-[90%] gap-10 mb-8">
        <section className="flex flex-col text-center items-center gap-4">
          <h1 className="md:w-[50%] w-[90%] text-balance">{title}</h1>
          <div className="critic-container flex flex-row gap-4">
            <div className="imdb-container flex gap-2 items-center">
              <img src={imdb} alt="imbd_icon" className="w-full h-[18px]" />
              <p>{vote}</p>
            </div>
          </div>
          <article className="md:w-[60%] w-[90%] text-pretty mb-4">
            <p className="text-white/60">{overview}</p>
          </article>
          <ButtonWatch text="Trailer" icon={play_icon} />
        </section>
        <div className="rounded-lg flex items-center justify-between gap-2 absolute md:relative bottom-10 md:bottom-4 w-[90%] md:w-[1200px]">{children}</div>
      </div>
      <div className="top-0 z-[-99] absolute h-screen w-full">
        <img
          src={poster}
          alt="poster_image"
          className="object-cover w-full h-screen brightness-50"
        />
      </div>
    </div>
  );
}
