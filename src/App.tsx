import HeroSection from "./components/HeroSection";
import InputSearch from "./components/InputSearch";
import TopRatedMovies from "./components/TopRatedMovies";
import ButtonCategory from "./components/ButtonCategory";
import { useState } from "react";

import Menu from "./assets/Menu.svg";
import logo from "/device-tv.svg";
import TopRatedSeries from "./components/TopRatedSeries";

export default function App() {
  const [movies, setMovies] = useState(true);
  const [series, setSeries] = useState(false);

  const handleMovies = () => {
    setMovies(true);
    setSeries(false);
  };

  const handleSeries = () => {
    setMovies(false);
    setSeries(true);
  };

  return (
    <div className="flex flex-col">
      <header className="absolute top-0 h-[60px] w-full flex items-center justify-center z-10 py-4">
        <div className="md:w-[1200px] w-[90%] flex flex-row items-center justify-between">
          <a href="/">
            <span className="text-xl font-bold flex gap-2">
              <img src={logo} alt="logo" />
              UTrailers
            </span>
          </a>
          <InputSearch />
          <div className="menu flex flex-row items-center gap-6">
            <a href="#">
              <p>Sign in</p>
            </a>
            <button>
              <img src={Menu} alt="icon_menu" />
            </button>
          </div>
        </div>
      </header>
      <HeroSection />

      <div className="flex flex-col w-[90%] md:w-[1200px] my-14 mx-auto">
        <div className="md:mb-8 mb-8 flex flex-row items-center gap-1">
          <h2 className="mr-4">Top Rated</h2>
          <ButtonCategory
            text="Movies"
            onClink={handleMovies}
            isActive={movies}
          />
          <ButtonCategory
            text="Series"
            onClink={handleSeries}
            isActive={series}
          />
        </div>
        {(movies && <TopRatedMovies />) || (series && <TopRatedSeries />)}
      </div>
    </div>
  );
}
