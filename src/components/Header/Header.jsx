import React from "react";
import { AppBar, Container, Toolbar, useScrollTrigger } from "@mui/material";
import Navbar from "./Navbar";
import BurgerMenu from "./BurguerMenu";

const Header = ({
  props,
  menu,
  handleCloseMenuMobile,
  handleOpenMenuMobile,
  menuIsOpen,
  navigate,
  setActiveButton,
  activeButton,
  handleNavigateToSection,
}) => {
  const trigger = useScrollTrigger();

  return (
    <AppBar
      sx={{
        position: "fixed",
        backgroundColor: trigger ? "#eceff1" : "#151415",
        transition: ".5s ease-in-out",
        zIndex: 1300,
        boxShadow: "none",
        height: "80px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <BurgerMenu
            menu={menu}
            handleCloseMenuMobile={handleCloseMenuMobile}
            handleOpenMenuMobile={handleOpenMenuMobile}
            menuIsOpen={menuIsOpen}
            navigate={navigate}
            handleNavigateToSection={handleNavigateToSection}
          />

          <Navbar
            menu={menu}
            navigate={navigate}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            trigger={trigger}
            handleNavigateToSection={handleNavigateToSection}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
