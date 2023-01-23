import React from "react";
import { Box, Grid, SvgIcon, Typography } from "@mui/material";
import imageHome from "../../images/imageHome.webp";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { keyframes } from "@emotion/react";
import { navigateToSection } from "../../utils/navigateToSection";
import NavigationIcons from "./NavigationIcons";

const Home = () => {
  return (
    <>
      <Box
        component="img"
        src={imageHome}
        alt="img not found"
        sx={style.imageHome}
      />
      <Box sx={style.containerHomeShadow} />
      <Grid container sx={style.containerContain}>
        <Grid item container sx={style.containerTitles}>
          <Grid item container sx={style.boxTitles}>
            <Typography sx={style.title1}>Hola! Soy Eliana...</Typography>
            <Typography sx={style.title2}>
              Bienvenidos a mi portfolio!
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          sx={style.navigationIcons}
        >
          <NavigationIcons />
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          sx={style.containerCircleDown}
        >
          <SvgIcon
            component={ExpandCircleDownIcon}
            onClick={() => navigateToSection("Sobre mi")}
            sx={style.circleDownIcon}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
const type = keyframes({
  "0%": {
    width: 0,
  },
  "20%": {
    borderRight: ".15em solid #8C52FF",
  },
  "100%": {
    border: "none",
  },
});
const type2 = keyframes({
  "0%": {
    width: 0,
  },
  "1%": {
    opacity: 1,
  },
  "100%": {
    opacity: 1,
  },
});

const blink = keyframes({
  "50%": {
    borderColor: "transparent",
  },
});

const titleCommonsStyles = {
  zIndex: "5",
  fontSize: { xs: "25px", lg: "40px" },
  fontWeight: "600",
  color: "white",
  overflow: "hidden",
  whiteSpace: "nowrap",
  margin: "0 auto",
  borderRight: ".15em solid #8C52FF ",
  width: "100%",
};

const style = {
  imageHome: {
    position: "fixed",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "0px 0px",
    zIndex: "1",
  },
  containerHomeShadow: {
    position: "absolute",
    top: { xs: "56px", sm: "64px", md: "68px" },
    backgroundColor: "rgba(3,37,65,0.5)",
    width: "100%",
    height: "900px",
    objectFit: "cover",
    zIndex: "2",
  },

  title1: {
    ...titleCommonsStyles,
    animation: `${type} 4s steps(40, end)`,
    animationFillMode: "forwards",
  },

  title2: {
    ...titleCommonsStyles,
    opacity: 0,
    animation: `${type2} 4s steps(40, end), ${blink} .5s step-end infinite alternate`,
    animationDelay: "4s",
    animationFillMode: "forwards",
  },
  containerContain: {
    zIndex: "3",
    position: "absolute",
    top: { xs: "16%", lg: "10%" },
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  containerTitles: {
    marginTop: { xs: "50px", lg: 0 },
    width: "100%",
    height: { lg: "60%" },
    justifyContent: "center",
    alignItems: "center",
  },
  boxTitles: {
    width: { xs: "70%", md: "50%", lg: "35%" },
    justifyContent: "center",
    height: "50px",
  },
  navigationIcons: {
    alignItems: "center",
    height: "80px",
    marginTop: { xs: "100px", lg: 0 },
  },
  containerCircleDown: {
    height: "80px",
    marginBottom: { xs: "100px", lg: 0 },
  },
  circleDownIcon: {
    color: "white",
    fontSize: "45px",
    cursor: "pointer",
    "&:hover": {
      color: "#8C52FF",
      transition: ".5s ease-in ",
    },
  },
};
