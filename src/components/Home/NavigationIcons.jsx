import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { keyframes } from "@emotion/react";
import { SvgIcon } from "@mui/material";

const NavigationIcons = () => {
  return (
    <>
      <SvgIcon
        component={LinkedInIcon}
        onClick={() =>
          window.open(`https://www.linkedin.com/in/eliana-bega-7b9033a5/
            `)
        }
        sx={style.icons}
      />
      <SvgIcon
        component={GitHubIcon}
        onClick={() => window.open(`https://github.com/eli-beg`)}
        sx={style.icons}
      />
      <SvgIcon
        component={EmailIcon}
        onClick={() => window.open(`mailto:begaeliana@gmail.com`)}
        sx={style.icons}
      />
      <SvgIcon
        component={ContactPageIcon}
        onClick={() =>
          window.open(
            `https://drive.google.com/file/d/1Fnk8alZTQZBNnH1KeFAa8WYbHk9lAgK6/view?usp=sharing`
          )
        }
        sx={style.icons}
      />
    </>
  );
};

export default NavigationIcons;

const appearIcons = keyframes({
  "0%": {
    opacity: 0,
  },

  "100%": {
    opacity: 1,
  },
});

const style = {
  icons: {
    color: "white",
    fontSize: "40px",
    marginLeft: "9px",
    marginRight: "9px",
    cursor: "pointer",
    "&:hover": {
      color: "#8C52FF",
      transition: ".5s ease-in ",
    },
    opacity: 0,
    animation: `${appearIcons} 4s steps(40, end)`,
    animationDelay: "2s",
    animationFillMode: "forwards",
  },
};
