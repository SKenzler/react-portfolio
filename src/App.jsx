import Navbar from "./components/Navbar";
import ProjectCarousel from "./components/ProjectCarousel";
import Home from "./pages/Home";
import images from "./utilities/images";
import FlipCard from "./components/FlipCard";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ProjectCarousel images={images} />
      <FlipCard />
    </>
  );
}

export default App;
