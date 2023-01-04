import React from "react";
import { Box, Typography } from "@mui/material";

export const Logo = ({ trigger }) => {
  return (
    <Box width="100%" height="100%">
      <Box
        sx={{
          backgroundColor: "#8C52FF",
          marginTop: ".6rem",
          position: "absolute",
          width: "65px",
          height: "30px",
        }}
      />
      <Typography
        sx={{
          marginLeft: ".5rem",
          position: "absolute",
          fontWeight: "600",
          fontSize: "1.9rem",
          letterSpacing: "-2px",
          color: trigger ? "#1F1F24" : "#FFFFFF",
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
