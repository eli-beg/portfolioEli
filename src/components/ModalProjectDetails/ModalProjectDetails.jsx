import React from "react";
import { Box, Button, Dialog, Grid, Typography } from "@mui/material";
import ProjectDetailsCardContainer from "./ProjectDetailsCardContainer";
import background1 from "../../images/background1.webp";
import CloseIcon from "@mui/icons-material/Close";

const ModalProjectDetails = ({ item, openModal, setOpenModal }) => {
  return (
    <Dialog
      open={openModal}
      fullWidth
      maxWidth="lg"
      onClose={() => setOpenModal(false)}
    >
      <Grid item sx={style.containerCloseIcon}>
        <CloseIcon onClick={() => setOpenModal(false)} sx={style.closeIcon} />
      </Grid>
      <Grid
        container
        sx={{
          backgroundImage: `url(${background1})`,
          ...containerText,
        }}
      >
        <Grid item container xs={11} lg={6} sx={style.containerTitle}>
          <Grid item width="100%" alignSelf="flex-start" marginLeft="50px">
            <Typography sx={style.title}>
              Proyecto: {item && item.title}
            </Typography>
          </Grid>
          <Grid item>
            <Box
              component="img"
              alt="img not found"
              sx={style.projectGif}
              src={item && item.gif}
            />
          </Grid>
          <Grid item width="100%" alignSelf="flex-start" marginLeft="50px">
            {item?.repository.length >= 1
              ? item.repository.map((item) => (
                  <Button
                    sx={style.buttonNavigation}
                    onClick={() => window.open(item.link)}
                  >
                    Repositorio {item.type}
                  </Button>
                ))
              : null}
            {item?.deploy.length ? (
              <Button
                sx={style.buttonNavigation}
                onClick={() => window.open(item.deploy[0])}
              >
                Website
              </Button>
            ) : null}
          </Grid>
        </Grid>
        <Grid item container xs={11} lg={6} sx={style.projectDetailsContainer}>
          <ProjectDetailsCardContainer item={item} />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ModalProjectDetails;

const style = {
  containerTitle: {
    height: { xs: "300px", lg: "400px" },
    marginTop: { xs: "30px", lg: "130px" },
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: { xs: ".9rem", lg: "1.2rem" },
  },
  projectGif: { maxWidth: { xs: "380px", lg: "500px" } },
  buttonNavigation: {
    backgroundColor: "#8C52FF",
    color: "white",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "black",
      borderStyle: "solid",
      borderWidth: "2px",
      borderColor: "#8C52FF",
    },
  },
  projectDetailsContainer: {
    justifyContent: { xs: "center", lg: "flex-start" },
    alignItems: "center",
  },
  containerCloseIcon: {
    position: "absolute",
    alignSelf: "end",
    marginTop: "10px",
    marginRight: "10px",
    width: "30px",
  },
  closeIcon: { color: "white", cursor: "pointer" },
};

const containerText = {
  width: "100%",
  height: { xs: "1400px", lg: "700px" },
  backgroundSize: "cover",
  display: "flex",
  flexWrap: { xs: "wrap", lg: "no-wrap" },
  justifyContent: "center",
};
