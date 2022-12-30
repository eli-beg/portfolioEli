import React from "react";
import { Box, Typography } from "@mui/material";

const ProjectCard = ({ item }) => {
  return (
    <>
      <Box
        component="img"
        width="375px"
        height="400px"
        src={item.image}
        alt="img not found"
        sx={style.imageItem}
      />
      <Box sx={style.shadowImage}>
        <Typography sx={style.title}>{item.title}</Typography>
        <Typography sx={style.subtitle}>Ver Proyecto</Typography>
      </Box>
    </>
  );
};

export default ProjectCard;

const style = {
  imageItem: {
    objectFit: "cover",
    objectPosition: "0 0",
    borderRadius: "8px",
    width: "375px",
    height: "400px",
  },
  shadowImage: {
    backgroundColor: "rgb(0,0,0)",
    position: "absolute",
    borderRadius: "8px",
    boxSizing: "border-box",
    opacity: 0,
    width: "375px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "rgba(0,0,0, .8)",
      borderColor: "rgba(236, 239, 241, 1)",
      borderStyle: "solid",
      borderWidth: "8px",
      transition: ".7s ease-in",
      opacity: 1,
    },
  },
  title: { opacity: 1, color: "white", fontSize: "20px" },
  subtitle: { opacity: 1, color: "rgb(127, 17, 224)" },
};
