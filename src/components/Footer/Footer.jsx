import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Logo } from "../logo";
import NavigationIcons from "../Home/NavigationIcons";

const Footer = () => {
  return (
    <Grid container sx={style.footerContainer}>
      <Grid item container xs={10} sx={style.container}>
        <Box width="120px" height="30px">
          <Logo />
        </Box>
      </Grid>
      <Grid item container xs={10} sx={style.navigationIconsContainer}>
        <NavigationIcons />
      </Grid>
      <Grid item container xs={10} sx={style.container}>
        <Typography sx={style.footerText}>
          2023 - Sitio desarrollado por Eliana Bega - MDP - Argentina 🚀
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    backgroundColor: "#1F1F24",
    width: "100%",
    height: "500px",
    justifyContent: "center",
  },
  navigationIconsContainer: {
    border: "solid 1px #616161",
    borderLeft: "none",
    borderRight: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#616161",
    textAlign: "center",
  },
};
