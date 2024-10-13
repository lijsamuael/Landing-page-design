import { useEffect } from "react";
import "./App.css";
import Ad from "./components/Ad";
import FQA from "./components/FQA";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Landingpage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import ScrollDown from "./components/ScrollDown";
import Slider from "./components/Slider";
import WaitList from "./components/WaitList";
import "aos/dist/aos.css";

function App() {
  return (
    <div className="bg-black  overflow-x-hidden">
      <div className="max-w-[2000px] mx-auto">
        <Heading />
        <Ad />
        <FQA />
        <WaitList />
        <Footer />
      </div>{" "}
    </div>
  );
}

export default App;
