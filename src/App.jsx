import Navbar from "./components/Navbar";
import ProjectCarousel from "./components/ProjectCarousel";
import Home from "./pages/Home";
import images from "./utilities/images";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ProjectCarousel images={images} />
    </>
  );
}

export default App;
