import React from "react";
import { Box, Typography } from "@mui/material";

const ProjectCard = ({ item, handleOpenModal }) => {
  return (
    <Box sx={style.cardContainer}>
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
    </Box>
  );
};

export default ProjectCard;

const style = {
  imageItem: {
    objectFit: "cover",
    objectPosition: "0 0",
    borderRadius: "8px",
    width: { xs: "300px", lg: "350px" },
    height: { xs: "325px", lg: "375px" },
    zIndex: "0",
    position: "absolute",
  },
  shadowImage: {
    backgroundColor: { xs: "rgba(0,0,0, .8)", md: "rgb(0,0,0)" },
    borderColor: { xs: "rgba(236, 239, 241, 1)", md: "rgba(236, 239, 241, 0)" },
    borderStyle: "solid",
    borderWidth: "8px",
    borderRadius: "8px",
    boxSizing: "border-box",
    transition: ".7s ease-in",
    opacity: { xs: 1, md: 0 },
    width: { xs: "300px", lg: "350px" },
    height: { xs: "325px", lg: "375px" },
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
    zIndex: "0",
    position: "relative",
  },
  title: { opacity: 1, color: "white", fontSize: "20px", zIndex: "1" },
  subtitle: { opacity: 1, color: "#8C52FF", cursor: "pointer", zIndex: "1" },
  cardContainer: {
    width: { xs: "300px", lg: "350px" },
    height: { xs: "325px", lg: "375px" },
  },
};
