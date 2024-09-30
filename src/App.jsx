import "./App.css";
import Ad from "./components/Ad";
import FQA from "./components/FQA";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Landingpage from "./components/LandingPage";
import Slider from "./components/Slider";
import WaitList from "./components/WaitList";

function App() {
  return (
    <div className="bg-black">
      <Landingpage />
      <Feature />
      <Ad />
      <Slider />
      <FQA />
      <WaitList />
      <Footer />
    </div>
  );
}

export default App;
