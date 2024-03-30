import HeroSection from "./Components/HeroSection"
import Header from "./Components/Header"
import InputSearch from "./Components/InputSearch"

export default function App() {
  return (
    <div>
      <Header>
        <InputSearch onChange={() => {}}/>
      </Header>  
      <HeroSection />
    </div>
  )
}
