import React from "react";
import { Grid, Typography } from "@mui/material";
import Home from "../components/Home/Home";

const HomeContainer = () => {
  return (
    <Grid
      container
      width="100%"
      height="100%"
      justifyContent="center"
      // sx={{ backgroundColor: "green" }}
    >
      <Grid
        id="Home"
        item
        xs={12}
        height="700px"
        sx={{ backgroundColor: "red" }}
      >
        <Home />
      </Grid>
      <Grid
        id="Sobre-mi"
        item
        width="1080px"
        marginTop="50px"
        height="700px"
        sx={{ backgroundColor: "pink" }}
      >
        {" "}
        <Typography>hola home</Typography>
      </Grid>
      <Grid
        id="Proyectos"
        item
        width="1080px"
        marginTop="50px"
        height="700px"
        sx={{ backgroundColor: "blue" }}
      >
        {" "}
        <Typography>Proyectos</Typography>
      </Grid>
      <Grid
        id="Contacto"
        item
        width="1080px"
        marginTop="50px"
        height="700px"
        sx={{ backgroundColor: "violet" }}
      >
        {" "}
        <Typography>Contacto</Typography>
      </Grid>
    </Grid>
  );
};

export default HomeContainer;
