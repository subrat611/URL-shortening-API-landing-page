import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import URLShort from "./components/URLShort";
import StatisticSection from "./components/StatisticSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <div className="o-app-hero-wrapper">
        <URLShort />
        {/* generated url show here */}
        <StatisticSection />
      </div>
    </div>
  );
}

export default App;
