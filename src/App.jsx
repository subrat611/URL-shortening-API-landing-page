import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import URLShort from "./components/URLShort";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="o-app-hero-wrapper">
        <HeroSection />
        <URLShort />
      </div>
    </div>
  );
}

export default App;
