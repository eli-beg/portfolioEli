import React from "react";
import { Box } from "@mui/material";
import Skills from "./Skills";

const SkillsContainer = () => {
  const items = [
    {
      id: "1",
      title: "Frontend",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      id: "2",
      title: "Backend",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      id: "3",
      title: "SoftSkills",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      id: "4",
      title: "Git",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      id: "5",
      title: "Scrum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
  ];

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
