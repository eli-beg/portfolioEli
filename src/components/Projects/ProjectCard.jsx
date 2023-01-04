import React from "react";
import { Box, Typography } from "@mui/material";

const ProjectCard = ({ item, handleOpenModal }) => {
  return (
    <>
      <Box
        component="img"
        src={item.image}
        alt="img not found"
        sx={style.imageItem}
      />
      <Box sx={style.shadowImage}>
        <Typography sx={style.title}>{item.title}</Typography>
        <Typography
          sx={style.subtitle}
          component="span"
          onClick={() => handleOpenModal(item)}
        >
          Ver Proyecto
        </Typography>
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
    backgroundColor: { xs: "rgba(0,0,0, .8)", md: "rgb(0,0,0)" },
    borderColor: { xs: "rgba(236, 239, 241, 1)", md: "rgba(236, 239, 241, 0)" },
    borderStyle: "solid",
    borderWidth: "8px",
    position: "absolute",
    borderRadius: "8px",
    boxSizing: "border-box",
    transition: ".7s ease-in",
    opacity: { xs: 1, md: 0 },
    width: "375px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: { xs: "rgba(0,0,0, .6)", md: "rgba(0,0,0, .8)" },
      borderColor: "rgba(236, 239, 241, 1)",
      transition: ".7s ease-in",
      opacity: 1,
    },
  },
  title: { opacity: 1, color: "white", fontSize: "20px" },
  subtitle: { opacity: 1, color: "#8C52FF", cursor: "pointer" },
};
