import "./App.css";
import MainRoute from "./MainRoutes/MainRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SliderCard from "./Components/sliderCard";
import SliderShow1 from "./Components/sliderShow1";
import CarouselCard from "./Components/CarouselCard"
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <MainRoute /> */}
      {/* <Footer />   */}
      <Home />
    </div>
  );
}

export default App;
