import React from "react";
import { Grid } from "@mui/material";
import Home from "../components/Home/Home";
import AboutContainer from "../components/About/AboutContainer";
import ProjectsContainer from "../components/Projects/ProjectsContainer";
import ContactContainer from "../components/Contact/ContactContainer";

const HomeContainer = () => {
  return (
    <Grid
      container
      width="100%"
      height="100%"
      justifyContent="center"
      // sx={{ backgroundColor: "green" }}
    >
      <Grid id="Home" item xs={12} height="700px">
        <Home />
      </Grid>
      <Grid id="Sobre-mi" item height="700px" width="100%" sx={{ zIndex: "2" }}>
        <AboutContainer />
      </Grid>
      <Grid
        id="Proyectos"
        item
        width="100%"
        sx={{
          zIndex: "2",
          height: { xs: "1700px", lg: "800px" },
        }}
      >
        <ProjectsContainer />
      </Grid>
      <Grid id="Contacto" item width="100%" height="700px" sx={{ zIndex: "2" }}>
        <ContactContainer />
      </Grid>
    </Grid>
  );
};

export default HomeContainer;
