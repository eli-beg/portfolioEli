import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { getTraslate } from "../../utils/getTranslateSlider";
import NextIcon from "../NextIcon";
import { useTheme } from "@emotion/react";

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
      <Grid xs={10} sx={styles.containerTranslateBackground}>
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
              <Grid
                item
                sx={{
                  backgroundColor: "green",
                  marginLeft: "15px",
                  marginRight: "15px",
                  minWidth: "350px",
                  height: "300px",
                }}
              >
                <Typography sx={{ color: "white" }}>{item.title}</Typography>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>

      <Box sx={styles.iconContainer}>
        <NextIcon
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
    justifyContent: "space-between",
    height: "40px",
    width: { xs: "20px", md: "40px" },
  },
  containerTranslateBackground: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: { xs: "380px", md: "760px", lg: "1140px" },
    position: "relative",
    overflow: "hidden",
  },
};
