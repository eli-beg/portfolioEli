import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { navigateToSection } from "../../utils/navigateToSection";

const HeaderContainer = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  const navigate = useNavigate();

  const menu = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Sobre mi",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Proyectos",
    },
    {
      id: 5,
      text: "Contacto",
    },
  ];
  const handleOpenMenuMobile = () => {
    setMenuIsOpen(true);
  };

  const handleCloseMenuMobile = () => {
    setMenuIsOpen(false);
  };
  const handleNavigateToSection = (e, text) => {
    navigateToSection(text);
    setMenuIsOpen(false);
  };

  return (
    <Header
      menu={menu}
      handleOpenMenuMobile={handleOpenMenuMobile}
      handleCloseMenuMobile={handleCloseMenuMobile}
      menuIsOpen={menuIsOpen}
      navigate={navigate}
      activeButton={activeButton}
      setActiveButton={setActiveButton}
      handleNavigateToSection={handleNavigateToSection}
    />
  );
};
export default HeaderContainer;
