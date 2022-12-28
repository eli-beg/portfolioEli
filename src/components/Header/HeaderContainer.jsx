import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

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
      text: "Proyectos",
    },
    {
      id: 4,
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
    const anchor = document.querySelector(`#${text.replace(" ", "-")}`);
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
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
