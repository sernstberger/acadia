import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Home from "./pages/Home";
import Single from "./pages/Single";

const Store = () => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Header homeLink="/store" logo="Store" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Single />} />
      </Routes>
    </Box>
  );
};

export default Store;
