import React from "react";
import { Box, Button } from "@mui/material";

const Navbar = ({
  menu,
  navigate,
  activeButton,
  setActiveButton,
  trigger,
  handleNavigateToSection,
}) => {
  return (
    <Box sx={style.containerNavbar}>
      {menu &&
        menu.map((page) => (
          <Button
            key={page.id}
            onClick={(e) => handleNavigateToSection(e, page.text)}
            sx={{
              my: 2,
              mx: { md: 0.5, lg: 0.7 },
              display: "block",
              color: trigger ? "#1F1F24" : "#FFFFFF",
              fontSize: { lg: "1.1rem" },
              backgroundColor: activeButton === page.id ? "#37474f" : null,
              textTransform: "none",
              borderRadius: "20px",
            }}
          >
            {page.text}
          </Button>
        ))}
    </Box>
  );
};
export default Navbar;

const style = {
  containerNavbar: {
    mx: 20,
    display: { xs: "none", md: "flex" },
    flexGrow: 1,
    justifyContent: "right",
  },
};
