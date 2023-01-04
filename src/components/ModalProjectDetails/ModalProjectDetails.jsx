import React from "react";
import { Box, Button, Dialog, Grid, Typography } from "@mui/material";
import ProjectDetailsCardContainer from "./ProjectDetailsCardContainer";
import background1 from "../../images/background1.webp";

const ModalProjectDetails = ({ item, openModal, setOpenModal }) => {
  console.log(item);
  return (
    <Dialog
      open={openModal}
      fullWidth
      maxWidth="lg"
      onClose={() => setOpenModal(false)}
    >
      <Grid
        container
        sx={{
          width: "100%",
          height: { xs: "1400px", lg: "700px" },
          backgroundImage: `url(${background1})`,
          backgroundSize: "cover",
          // backgroundColor: "#151415",
          display: "flex",
          flexWrap: { xs: "wrap", lg: "no-wrap" },
          justifyContent: "center",
        }}
      >
        <Grid
          item
          container
          xs={11}
          lg={6}
          sx={{
            height: { xs: "300px", lg: "400px" },
            marginTop: { xs: "30px", lg: "130px" },
          }}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item width="100%" alignSelf="flex-start" marginLeft="50px">
            <Typography
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: { xs: ".9rem", lg: "1.2rem" },
              }}
            >
              Proyecto: {item && item.title}
            </Typography>
          </Grid>
          <Grid item>
            <Box
              component="img"
              alt="img not found"
              sx={{ maxWidth: { xs: "380px", lg: "500px" } }}
              src={item && item.gif}
            />
          </Grid>
          <Grid item width="100%" alignSelf="flex-start" marginLeft="50px">
            {item?.repository.length >= 1
              ? item.repository.map((item) => (
                  <Button
                    sx={{
                      backgroundColor: "#8C52FF",
                      color: "white",
                      marginRight: "10px",
                      "&:hover": {
                        backgroundColor: "black",
                        borderStyle: "solid",
                        borderWidth: "2px",
                        borderColor: "#8C52FF",
                      },
                    }}
                    onClick={() => window.open(item)}
                  >
                    Repositorio
                  </Button>
                ))
              : null}
            {item?.deploy.length ? (
              <Button
                sx={{
                  backgroundColor: "#8C52FF",
                  color: "white",
                  marginRight: "10px",
                  "&:hover": {
                    backgroundColor: "black",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderColor: "#8C52FF",
                  },
                }}
                onClick={() => window.open(item.deploy[0])}
              >
                Website
              </Button>
            ) : null}
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={11}
          lg={6}
          sx={{
            // backgroundColor: "green",
            justifyContent: { xs: "center", lg: "flex-start" },
            alignItems: "center",
          }}
        >
          <ProjectDetailsCardContainer item={item} />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ModalProjectDetails;
