import React from "react";
import { Box } from "@mui/material";
import Skills from "./Skills";
import { items } from "./SkillsItems";

const SkillsContainer = () => {
  return (
    <Box sx={style.skillsContainer}>
      <Skills items={items} />
    </Box>
  );
};

export default SkillsContainer;

const style = {
  skillsContainer: {
    backgroundColor: "#020202",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "900px",
  },
};
