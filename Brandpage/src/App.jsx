import "./App.css";
import HeroSection from "./components/Hero.jsx";
import Icons from "./components/Icons.jsx";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Icons />
    </div>
  );
};

export default App;
