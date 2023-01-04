import React from "react";
import { Box } from "@mui/material";
import About from "./About";

const AboutContainer = () => {
  return (
    <Box
      width="100%"
      height="900px"
      sx={{
        backgroundColor: "#020202",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <About />
    </Box>
  );
};

export default AboutContainer;
