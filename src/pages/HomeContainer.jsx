import React from "react";
import { Grid } from "@mui/material";
import Home from "../components/Home/Home";
import AboutContainer from "../components/About/AboutContainer";
import ProjectsContainer from "../components/Projects/ProjectsContainer";
import SkillsContainer from "../components/Skills/SkillsContainer";
import FooterContainer from "../components/Footer/FooterContainer";

const HomeContainer = () => {
  return (
    <Grid container width="100%" height="100%" justifyContent="center">
      <Grid id="Home" item xs={12} height="800px">
        <Home />
      </Grid>
      <Grid
        id="Sobre-mi"
        item
        width="100%"
        sx={{ zIndex: "2", height: { xs: "1100px", lg: "700px" } }}
      >
        <AboutContainer />
      </Grid>
      <Grid id="Skills" item height="900px" width="100%" sx={{ zIndex: "2" }}>
        <SkillsContainer />
      </Grid>

      <Grid
        id="Proyectos"
        item
        width="100%"
        sx={{
          zIndex: "2",
          height: { xs: "1700px", lg: "900px" },
        }}
      >
        <ProjectsContainer />
      </Grid>
      <Grid id="Contacto" item width="100%" height="500px" sx={{ zIndex: "2" }}>
        <FooterContainer />
      </Grid>
    </Grid>
  );
};

export default HomeContainer;
