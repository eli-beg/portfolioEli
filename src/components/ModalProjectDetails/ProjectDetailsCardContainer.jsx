import React from "react";
import { Grid } from "@mui/material";
import ProjectDetailsCard from "./ProjectDetailsCard";

const ProjectDetailsCardContainer = ({ item }) => {
  const { overview, technologies, moreDetails } = item;
  return (
    <Grid container sx={style.containerDetailsCard}>
      {overview && <ProjectDetailsCard title={"Resumen"} contain={overview} />}
      {technologies && (
        <ProjectDetailsCard title={"Tecnologías"} contain={technologies} />
      )}
      {moreDetails ? (
        <ProjectDetailsCard title={"Más Detalles"} contain={moreDetails} />
      ) : null}
    </Grid>
  );
};

export default ProjectDetailsCardContainer;

const style = {
  containerDetailsCard: {
    width: "90%",
    alignContent: "flex-start",
    boxSizing: "border-box",
    backgroundColor: "black",
    paddingTop: { xs: "10px", lg: "50px" },
    height: { xs: "100%", lg: "80%" },
  },
};
