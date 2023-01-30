import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { getTraslate } from "../../utils/getTranslateSlider";
import NextIcon from "../NextIcon";
import { useTheme } from "@emotion/react";
import SkillsCard from "./SkillsCard";

const Skills = ({ items }) => {
  const [translate, setTranslate] = useState(375);
  const [steps, setSteps] = useState(null);
  const theme = useTheme();
  const matchesUp = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesBetween = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const matchesDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (matchesUp) {
      setSteps("up");
      setTranslate(375);
    }
    if (matchesDown) {
      setSteps("down");
      setTranslate(765);
    }
    if (matchesBetween) {
      setSteps("bet");
      setTranslate(580);
    }
  }, [matchesUp, matchesBetween, matchesDown]);

  return (
    <Grid container xs={12} flexDirection="column" alignItems="center">
      <Grid item xs={12} sx={styles.containerTitle}>
        <Typography sx={styles.title}>Skills</Typography>
      </Grid>
      <Grid xs={11} sx={styles.containerTranslateBackground}>
        {translate && (
          <Grid
            container
            sx={{
              height: "300px",
              transform: `translate3d(${translate}px, 0px, 0px)`,
              transition: "all 1s ease 0s",
              width: "1900px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
            }}
          >
            {items?.map((item) => (
              <SkillsCard item={item} />
            ))}
          </Grid>
        )}
      </Grid>

      <Box sx={styles.iconContainer}>
        <NextIcon
          direction={"left"}
          getTraslate={() =>
            setTranslate(getTraslate("left", translate, steps))
          }
        />
        <NextIcon
          getTraslate={() =>
            setTranslate(getTraslate("right", translate, steps))
          }
        />
      </Box>
    </Grid>
  );
};

export default Skills;

const styles = {
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    marginTop: "30px",
    width: "40px",
  },
  containerTranslateBackground: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: { xs: "380px", md: "760px", lg: "1140px" },
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontWeight: 600,
    fontSize: {
      xs: "1.5rem",
      lg: "2rem",
      color: "white",
      textAlign: "center",
    },
  },
  containerTitle: {
    height: "50px",
    marginBottom: "50px",
    justifyContent: "center",
    alignItems: "center",
  },
};
