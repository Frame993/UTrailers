import imdb from "../assets/imdb.png";
import tomatoes from "../assets/Rotentomatoes.png";
import play_icon from "../assets/Play.png";
import ButtonWatch from "./ButtonWatch";

interface Props {
  className?: string;
  title?: string;
  overview?: string;
  poster?: string; 
  isVisible:boolean
}
export default function HeroSection({ className, title, overview, poster, isVisible }: Props) {

  return (
    <div
      className={`flex flex-col justify-center items-center hero md:h-[600px] h-screen relative ${className} duration-1000 transition-all ${ !isVisible && 'opacity-0' }`}
    >
      <section className="flex flex-col gap-4 md:w-[1200px] w-[90%] mt-60 md:mt-10">
        <h1 className="md:w-[30%] w-[60%]">{title}</h1>
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
        <article className="md:w-[30%] w-[80%]">
          <p>
           {overview}
          </p>
        </article>
        <ButtonWatch text="Watch Trailer" icon={play_icon} />
      </section>
      <div className="top-0 z-[-1] absolute md:h-[600px] h-screen overflow-hidden w-full">
        <img
          src={poster}
          alt="poster_image"
          className="object-cover w-full h-screen brightness-50"
        />
      </div>
    </div>
  );
}
