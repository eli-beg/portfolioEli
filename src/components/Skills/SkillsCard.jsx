import React from "react";
import { Grid, SvgIcon, Typography } from "@mui/material";

const SkillsCard = ({ item }) => {
  return (
    <Grid item container id="container-skills-card" sx={style.containerSkills}>
      <Grid item height="40%">
        <SvgIcon component={item.icon} sx={style.icon} />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={style.title}>{item.title}</Typography>
      </Grid>
      <Grid item xs={12} height="40%">
        <Typography sx={style.text}>{item.text}</Typography>
      </Grid>
    </Grid>
  );
};

export default SkillsCard;

const style = {
  containerSkills: {
    backgroundColor: "#1F1F24",
    marginLeft: "15px",
    marginRight: "15px",
    minWidth: "350px",
    height: "300px",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#151415",
      borderBottom: "solid ",
      borderBottomColor: "#8C52FF",
      borderWidth: "2px",
      transition: ".7s ease-in",
      color: "grey",
    },
  },
  icon: {
    color: "#8C52FF",
    fontSize: "60px",
    marginTop: "40px",
  },
  title: { color: "white", textAlign: "center", fontSize: "17px" },
  text: {
    color: "#bdbdbd",
    fontSize: "13px",
    textAlign: "center",
    margin: "5px",
  },
};
