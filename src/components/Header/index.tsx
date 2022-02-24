import * as React from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Box,
  Stack,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Search from "../Search";
import ProfileMenu from "../ProfileMenu";
import NotificationsMenu, {
  NotificationsMenuProps,
} from "../NotificationsMenu";
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
  showDrawerOnMobile?: boolean;
}

export default function Header({
  logo,
  homeLink,
  NavProps,
  showSearch = false,
  showProfileMenu = false,
  NotificationsMenuProps,
  actions = undefined,
  showDrawerOnMobile = false,
}: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const hasNav = NavProps && NavProps.items && NavProps.items.length > 0;
  const showNavOnMobile = !showDrawerOnMobile;
  console.log("!!!", { hasNav, showDrawerOnMobile, isDesktop });
  return (
    <AppBar position="static">
      <Stack
        component={Toolbar}
        sx={{ justifyContent: "space-between" }}
        spacing={2}
        direction="row"
      >
        <div>
          {isMobile && showDrawerOnMobile && (
            <IconButton
              // size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
          )}
          <Link to={homeLink}>{logo}</Link>
        </div>
        {showSearch && <Search />}

        <Box>
          {actions && actions}
          {NotificationsMenuProps && (
            <NotificationsMenu {...NotificationsMenuProps} />
          )}
          {showProfileMenu && <ProfileMenu />}
        </Box>
      </Stack>

      {hasNav && isDesktop && <Nav items={NavProps.items} />}
      {hasNav && isMobile && showNavOnMobile && <Nav items={NavProps.items} />}
    </AppBar>
  );
}
