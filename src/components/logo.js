import React from "react";
import { Box, Typography } from "@mui/material";

export const Logo = ({ trigger }) => {
  return (
    <Box sx={style.containerLogo}>
      <Box sx={style.decorationLogo} />
      <Typography
        color={trigger ? "#1F1F24" : "#FFFFFF"}
        sx={{
          marginLeft: ".5rem",
          position: "absolute",
          fontWeight: "600",
          fontSize: "1.9rem",
          letterSpacing: "-2px",
        }}
      >
        eli-bega
      </Typography>
      <Typography
        sx={{
          marginTop: "2.4rem",
          position: "absolute",
          fontWeight: "400",
          fontSize: ".8rem",
          color: trigger ? "#1F1F24" : "#FFFFFF",
          letterSpacing: "-1px",
        }}
      >
        fullstackJS developer
      </Typography>
    </Box>
  );
};

const style = {
  containerLogo: {
    width: "100%",
    height: "100%",
  },
  decorationLogo: {
    backgroundColor: "#8C52FF",
    marginTop: ".5rem",
    position: "absolute",
    width: "65px",
    height: "30px",
  },
};
