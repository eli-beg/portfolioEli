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
        <Grid item container sx={style.cardsContainer}>
          {projectsItems &&
            projectsItems.map((item) => (
              <Grid item sx={style.projectCardContainer} xs={12} lg={3}>
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
    maxHeight: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  container: {
    margin: "100px 0px",
    justifyContent: "center",
    alignContent: "flex-start",
    height: "100%",
    boxSizing: "border-box",
  },
  title: {
    fontWeight: 600,
    fontSize: {
      xs: "1.5rem",
      lg: "2rem",
      color: "white",
      textAlign: "center",
      margin: "80px",
    },
  },
  projectCardContainer: {
    width: { xs: "325px", lg: "375px" },
    height: { xs: "350px", lg: "400px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "40px",
    boxSizing: "border-box",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    justifyContent: "center",
    maxHeight: "100%",
  },
};
