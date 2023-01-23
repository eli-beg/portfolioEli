import React from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Navbar from "./Navbar";
import BurgerMenu from "./BurguerMenu";
import { Logo } from "../logo";

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
        backgroundColor: trigger ? "#FFFFFF" : "#1F1F24",
        ...styleAppBar,
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
          <Box sx={containerLogo}>
            <Logo trigger={trigger} />
          </Box>
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

const styleAppBar = {
  position: "fixed",
  transition: ".5s ease-in-out",
  zIndex: 1300,
  boxShadow: "none",
  height: "80px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const containerLogo = {
  width: "120px",
  height: "70px",
  marginTop: "10px",
  marginLeft: "20px",
};
