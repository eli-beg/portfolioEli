import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const NextIcon = ({ direction, getTraslate }) => {
  return (
    <NavigateNextIcon
      onClick={getTraslate}
      fontSize="large"
      sx={{
        color: "white",
        transform: direction === "left" ? "rotate(180deg)" : "",
        cursor: "pointer",
      }}
    />
  );
};

export default NextIcon;
