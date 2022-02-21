import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Routes, Route, Outlet } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Home from "./pages/Home";
import Single from "./pages/Single";

const Store = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Single />} />
      </Routes>
    </Box>
  );
};

export default Store;
