import React from "react";
import { Box } from "@mui/material";
import background1 from "../../images/background1.webp";

const Contact = () => {
  return (
    <>
      <Box
        component="img"
        src={background1}
        alt="img not found"
        sx={style.imageHome}
      />
    </>
  );
};

export default Contact;

const style = {
  imageHome: {
    width: "100%",
    height: "700px",
    objectFit: "cover",
  },
};
