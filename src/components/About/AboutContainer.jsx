import React from "react";
import { Box } from "@mui/material";
import About from "./About";

const AboutContainer = () => {
  return (
    <Box sx={style.aboutContainer}>
      <About />
    </Box>
  );
};

export default AboutContainer;

const style = {
  aboutContainer: {
    backgroundColor: "#020202",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    height: "1100px",
  },
};
