import React, { useState } from "react";
import Projects from "./Projects";
import { projectsItems } from "./ProjectsItems";

const ProjectsContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [detailsItemToRender, setDetailsItemToRender] = useState(null);

  const handleOpenModal = (itemToRender) => {
    setDetailsItemToRender(itemToRender);
    setOpenModal(true);
  };
  return (
    <Projects
      projectsItems={projectsItems}
      handleOpenModal={handleOpenModal}
      setOpenModal={setOpenModal}
      openModal={openModal}
      detailsItemToRender={detailsItemToRender}
    />
  );
};

export default ProjectsContainer;
