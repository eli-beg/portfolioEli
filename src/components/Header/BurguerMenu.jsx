import React from "react";
import { Box, IconButton, Button } from "@mui/material";
import HamburgerIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const BurgerMenu = (props) => {
  const {
    menu,
    handleOpenMenuMobile,
    handleCloseMenuMobile,
    menuIsOpen,
    handleNavigateToSection,
    MenuIcon = null,
  } = props;

  return (
    <Box sx={style.containerMenu}>
      {MenuIcon || (
        <IconButton
          onClick={handleOpenMenuMobile}
          sx={{ display: menuIsOpen ? "none" : "flex" }}
        >
          <HamburgerIcon sx={{ color: "white", zIndex: 2300 }} />
        </IconButton>
      )}

      <Box
        backgroundColor={menuIsOpen ? "white" : "none"}
        height={menuIsOpen ? "500px" : "10px"}
        sx={style.containerMenuOpen}
      >
        {menuIsOpen && (
          <Box>
            <IconButton
              onClick={() => handleCloseMenuMobile()}
              sx={style.containerCloseIcon}
            >
              <CloseIcon />
            </IconButton>

            {menu.map((page) => (
              <Button
                key={page.id}
                onClick={(e) => handleNavigateToSection(e, page.text)}
                sx={{
                  my: 2,
                  mx: { md: 0.5, lg: 0.7 },
                  display: "block",
                  color: "black",
                  fontSize: { lg: "1.1rem" },
                  textTransform: "none",
                  borderRadius: "20px",
                }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BurgerMenu;

const style = {
  containerMenu: {
    display: { xs: "flex", md: "none" },
  },
  containerMenuOpen: {
    width: "100%",

    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 2000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: ".5s ease-in-out",
  },
  containerCloseIcon: {
    position: "absolute",
    top: 10,
    left: 15,
    color: "black",
  },
};
