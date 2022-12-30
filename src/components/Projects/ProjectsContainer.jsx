import React from "react";
import Projects from "./Projects";
import movieappImage2 from "../../images/movieappImage2.jpg";
import ongImage from "../../images/ongImage.jpg";
import pbudgetImage from "../../images/pbudgetImage.jpg";

const ProjectsContainer = () => {
  const projectsItems = [
    {
      id: 1,
      title: "The Movie App",
      image: movieappImage2,
    },
    {
      id: 2,
      title: "ONG Somos Más",
      image: ongImage,
    },
    {
      id: 3,
      title: "The pBudget App",
      image: pbudgetImage,
    },
  ];
  return <Projects projectsItems={projectsItems} />;
};

export default ProjectsContainer;
