import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import imageHome from "../../images/imageHome.webp";

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
      <Grid
        container
        width="100%"
        height="100%"
        sx={{
          zIndex: "3",
          position: "absolute",
          top: { xs: "16%", lg: "10%" },
        }}
      >
        <Grid item>
          <Typography>HELLO</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

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
    height: "700px",
    objectFit: "cover",
    zIndex: "2",
  },
};
