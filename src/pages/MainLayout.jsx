import React from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderContainer from "../components/Header/HeaderContainer";

const MainLayout = () => (
  <Grid container display="flex" flexDirection="row" wrap="wrap">
    <Grid item width="100%">
      <HeaderContainer />
    </Grid>
    <Grid
      item
      width="100%"
      sx={{
        minHeight: "calc(100vh - 380px)",
        marginTop: { xs: "56px", sm: "64px", md: "68px" },
      }}
    >
      <Outlet />
    </Grid>
  </Grid>
);

export default MainLayout;
