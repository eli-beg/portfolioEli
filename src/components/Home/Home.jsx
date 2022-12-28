import React from "react";
import { Box } from "@mui/material";
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
    </>
  );
};

export default Home;

const style = {
  imageHome: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "0px 0px",
    zIndex: "1",
  },
  containerHomeShadow: {
    position: "absolute",
    top: { xs: "56px", sm: "64px", md: "68px" },
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(3,37,65,0.5)",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "2",
  },
};
