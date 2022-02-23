import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Search from "../Search";
import ProfileMenu from "../ProfileMenu";
import NotificationsMenu, {
  NotificationsMenuProps,
} from "../NotificationsMenu";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Nav from "../Nav";
import { NavProps } from "../Nav/types";

interface HeaderProps {
  logo: React.ReactNode;
  homeLink: string;
  NavProps?: NavProps;
  showSearch?: boolean;
  showProfileMenu?: boolean;
  NotificationsMenuProps?: NotificationsMenuProps;
  actions?: React.ReactNode;
}

export default function Header({
  logo,
  homeLink,
  NavProps,
  showSearch = false,
  showProfileMenu = false,
  NotificationsMenuProps,
  actions = undefined,
}: HeaderProps) {
  return (
    <AppBar position="static">
      <Stack
        component={Toolbar}
        sx={{ justifyContent: "space-between" }}
        spacing={2}
        direction="row"
      >
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        <Link to={homeLink}>{logo}</Link>
        {showSearch && <Search />}

        <Box>
          {actions && actions}
          {NotificationsMenuProps && (
            <NotificationsMenu {...NotificationsMenuProps} />
          )}
          {showProfileMenu && <ProfileMenu />}
        </Box>
      </Stack>

      {NavProps && <Nav items={NavProps.items} />}
    </AppBar>
  );
}
