import React from "react";
import LensIcon from "@mui/icons-material/Lens";

const NextIcon = ({ direction, getTraslate }) => {
  return (
    <LensIcon
      onClick={getTraslate}
      fontSize="xs"
      sx={{
        color: "white",
        transform: direction === "left" ? "rotate(180deg)" : "",
        cursor: "pointer",
      }}
    />
  );
};

export default NextIcon;
