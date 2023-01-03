import React from "react";
import { Grid, Typography } from "@mui/material";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

const ProjectDetailsCard = ({ title, contain }) => {
  return (
    <Grid item container xs={12} padding="20px">
      <Grid item containter xs={1} height="40px">
        <BubbleChartIcon sx={{ color: "rgb(127, 17, 224)" }} />
      </Grid>
      <Grid item container xs={11} sx={style.containContainer}>
        <Grid item xs={12} height="30px">
          <Typography sx={style.title}>{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={style.contain}>{contain}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProjectDetailsCard;

const style = {
  containContainer: {
    paddingLeft: "10px",
    flexDirection: "row",
    alignContent: "flex-start",
    "&:hover": {
      backgroundColor: "#151415",
      borderBottom: "solid ",
      borderBottomColor: "rgb(127, 17, 224)",
      borderWidth: "2px",
      transition: ".7s ease-in",
    },
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: { xs: ".9rem", lg: "1.2rem" },
  },
  contain: {
    marginTop: "5px",
    color: "white",
    fontWeight: "400",
    fontSize: { xs: ".7rem", lg: "1rem" },
  },
};
