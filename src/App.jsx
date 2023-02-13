import { useReducer } from "react";

import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import URLShort from "./components/URLShort";
import StatisticSection from "./components/StatisticSection";
import BgBoostSection from "./components/BgBoostSection";
import Footer from "./components/Footer";
import ShortUrlList from "./components/ShortUrlList";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SHORT_LINK": {
      return [...state, action.payload];
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <div className="o-app-hero-wrapper">
        <URLShort dispatch={dispatch} />
        {state ? <ShortUrlList urls={state} /> : null}
        <StatisticSection />
      </div>
      <BgBoostSection />
      <Footer />
    </div>
  );
}

export default App;
