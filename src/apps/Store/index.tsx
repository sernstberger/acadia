import * as React from "react";
import { Box } from "@mui/material";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Home from "./pages/Home";
import Single from "./pages/Single";

const Store = () => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Header
        homeLink="/store"
        logo="Store"
        showSearch
        collapseSearchOnMobile
        showProfileMenu
        showDrawerOnMobile
        NavProps={{
          items: [
            { label: "Clothes", to: "clothes", value: "store/clothes" },
            { label: "Toys", to: "toys", value: "store/toys" },
            { label: "Books", to: "books", value: "store/books" },
            {
              label: "Electronics",
              to: "electronics",
              value: "store/electronics",
            },
            { label: "Other", to: "other", value: "store/other" },
          ],
        }}
        NotificationsMenuProps={{
          notifications: [
            { id: 1, text: "asdlkfj adlskfjsadf" },
            { id: 2, text: "oidfadfkljafi q alkdfj lkdjfa" },
            {
              id: 3,
              text: "ladsjfl kjasdflj afldfkjurhhfsn kjalfkj sdkhf",
            },
          ],
        }}
      />

      {/* <Header
        homeLink="/store"
        logo="Store"
        showSearch
        showProfileMenu
        NavProps={{
          items: [
            { label: "Clothes", to: "clothes", value: "store/clothes" },
            { label: "Toys", to: "toys", value: "store/toys" },
            { label: "Books", to: "books", value: "store/books" },
            {
              label: "Electronics",
              to: "electronics",
              value: "store/electronics",
            },
            { label: "Other", to: "other", value: "store/other" },
          ],
        }}
        NotificationsMenuProps={{
          notifications: [
            { id: 1, text: "asdlkfj adlskfjsadf" },
            { id: 2, text: "oidfadfkljafi q alkdfj lkdjfa" },
            {
              id: 3,
              text: "ladsjfl kjasdflj afldfkjurhhfsn kjalfkj sdkhf",
            },
          ],
        }}
      /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Single />} />
      </Routes>
    </Box>
  );
};

export default Store;
