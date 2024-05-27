import React from "react";
import Navbar from "../components/Navbar";
import ProjectCarousel from "../components/ProjectCarousel";
import images from "../utilities/images";
import FlipCard from "../components/FlipCard";
import cards from "../utilities/cards";

const Projects = () => {
  return (
    <>
      <Navbar />
      <h1>PROJECTS and Designs</h1>
      <ProjectCarousel images={images} />
      <FlipCard cards={cards} />
    </>
  );
};

export default Projects;
