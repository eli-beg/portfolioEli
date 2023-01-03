import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import background5 from "../../images/background5.jpg";
import ModalProjectDetails from "../ModalProjectDetails/ModalProjectDetails";

const Projects = ({
  detailsItemToRender,
  projectsItems,
  handleOpenModal,
  openModal,
  setOpenModal,
}) => {
  return (
    <Box sx={style.backgroundBox}>
      <Grid container xs={11} sx={style.container}>
        <Grid item>
          <Typography sx={style.title}>Mis Proyectos</Typography>
        </Grid>
        <Grid container item wrap="wrap" xs={12} justifyContent="space-around">
          {projectsItems &&
            projectsItems.map((item) => (
              <Grid item xs={12} lg={4} sx={style.projectCardContainer}>
                <ProjectCard item={item} handleOpenModal={handleOpenModal} />
              </Grid>
            ))}
        </Grid>
      </Grid>
      <ModalProjectDetails
        item={detailsItemToRender}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Box>
  );
};

export default Projects;

const style = {
  backgroundBox: {
    backgroundImage: `url(${background5})`,
    backgroundSize: "contain",
    height: { xs: "1700px", lg: "800px" },
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    marginTop: "100px",
    justifyContent: "center",
    alignContent: "flex-start",
    height: { xs: "1500px", lg: "700px" },
  },
  title: {
    fontWeight: 600,
    fontSize: {
      xs: "1.5rem",
      lg: "2rem",
      color: "white",
      textAlign: "center",
      marginBottom: "80px",
    },
  },
  projectCardContainer: {
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
};
