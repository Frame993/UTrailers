import HeroSection from "./Components/HeroSection";
import InputSearch from "./Components/InputSearch";

export default function App() {

  return (
    <div>
      <HeroSection />
      <header className="absolute top-0 h-[60px] w-full flex items-center justify-center z-[0]">
        <div className="md:w-[1200px] flex flex-row items-center justify-between">
          <span className="text-xl font-bold">UTraiers</span>
        <InputSearch/>
        </div>
      </header>
    </div>
  );
}
