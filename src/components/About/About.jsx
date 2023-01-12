import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import me4 from "../../images/me/me4.jpg";

const About = () => {
  return (
    <Grid container justifyContent="center" sx={{ marginTop: "30px" }}>
      <Grid item xs={12} sx={style.containerTitle}>
        <Typography sx={style.title}>Sobre mi</Typography>
      </Grid>
      <Grid item container xs={11} sx={style.containerContain}>
        <Grid item container xs={12} lg={5} sx={style.containerImage}>
          <Box component="img" alt="img not found" src={me4} sx={style.image} />
        </Grid>
        <Grid item container xs={11} lg={5} sx={style.text}>
          <Grid item container xs={10} sx={style.containTitle}>
            <Typography sx={style.title1}>Soy</Typography>
            <Typography sx={style.title2}>Eliana</Typography>
          </Grid>
          <Grid item xs={10} height="40px">
            <Typography sx={style.subtitle}>FULLSTACK JS DEVELOPER</Typography>
          </Grid>
          <Grid item xs={10} marginTop="10px">
            <Typography sx={style.containDescription}>
              Soy desarrolladora fullstack, detallista y curiosa. Encontré en la
              programación un espacio creativo y desafiante, en el cual puedo
              hallar soluciones para el cliente a través de la versatilidad del
              código. Quiero ser parte de un ambiente colaborativo y diverso,
              que genera la expansión y solidez del mundo IT. Mi lenguaje
              principal es Javascript, y mis librerías más utilizadas son
              NodeJs, ReactJs, Material UI
            </Typography>
          </Grid>
          <Grid item xs={10} marginTop="15px">
            <Typography sx={style.containDescription}>
              Los invito a recorrer el comienzo de mi camino de aprendizaje.
              Bienvenidos!
            </Typography>
          </Grid>
          <Grid item xs={10} marginTop="40px">
            <Button
              sx={style.buttonCv}
              onClick={() =>
                window.open(
                  `https://drive.google.com/file/d/1Fnk8alZTQZBNnH1KeFAa8WYbHk9lAgK6/view`
                )
              }
            >
              Resumen CV
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;

const style = {
  title: {
    fontWeight: 600,
    fontSize: {
      xs: "1.5rem",
      lg: "2rem",
      color: "white",
      textAlign: "center",
    },
  },
  containerTitle: {
    // marginTop: { xs: "20px", lg: "10px" },
    height: "50px",
  },
  containerContain: {
    marginTop: "40px",
    height: { xs: "800px", lg: "500px" },
    justifyContent: "center",
    alignItems: "flex-start",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  image: {
    width: { xs: "330px", lg: "400px" },
    height: { xs: "330px", lg: "400px" },
    objectFit: "cover",
    borderStyle: "solid",
    borderColor: "white",
    borderRadius: "5px",
    borderWidth: "5px",
  },
  text: {
    justifyContent: { xs: "center", lg: "flex-start" },
    alignContent: "flex-start",
    height: "100%",
  },
  containTitle: {
    height: "40px",
    marginTop: "15px",
  },
  title1: {
    fontWeight: 600,
    letterSpacing: ".1rem",
    fontSize: {
      xs: "1.2rem",
      lg: "1.5rem",
      color: "white",
      textAlign: "center",
    },
  },
  title2: {
    letterSpacing: ".1rem",
    marginLeft: "6px",
    fontWeight: 600,
    fontSize: {
      xs: "1.2rem",
      lg: "1.5rem",
      color: "#8C52FF",
    },
  },
  subtitle: {
    fontWeight: 400,
    letterSpacing: ".2rem",
    fontSize: {
      xs: ".7rem",
      lg: ".7rem",
      color: "#ede7f6",
    },
  },
  containDescription: {
    fontWeight: 400,
    fontSize: {
      xs: ".9rem",
      lg: "1rem",
      color: "#ede7f6",
    },
  },
  buttonCv: {
    backgroundColor: "rgb(0,0,0)",
    color: "white",
    marginRight: "10px",
    borderRadius: "0",
    "&:hover": {
      borderStyle: "solid",
      borderWidth: "2px",
      borderColor: "#8C52FF",
      transition: ".7s ease-in ",
    },
  },
};
