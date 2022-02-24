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
import { Cancel, Menu, Search as SearchIcon } from "@mui/icons-material";
import Search from "../Search";
import ProfileMenu from "../ProfileMenu";
import NotificationsMenu, {
  NotificationsMenuProps,
} from "../NotificationsMenu";
import Nav from "../Nav";
import { NavProps } from "../Nav/types";
import Drawer from "../Drawer";

interface HeaderProps {
  logo: React.ReactNode;
  homeLink: string;
  NavProps?: NavProps;
  showSearch?: boolean;
  showProfileMenu?: boolean;
  NotificationsMenuProps?: NotificationsMenuProps;
  actions?: React.ReactNode;
  showDrawerOnMobile?: boolean;
  collapseSearchOnMobile?: boolean;
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
  collapseSearchOnMobile = false,
}: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const hasNav = NavProps && NavProps.items && NavProps.items.length > 0;
  const showNavOnMobile = !showDrawerOnMobile;
  const [collapseSearch, setCollapseSearch] = React.useState(true);
  const [open, setOpen] = React.useState<boolean>(false);

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
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={() => setOpen(!open)}
              >
                <Menu />
              </IconButton>
              <Drawer {...{ open, setOpen }} anchor="left" />
            </>
          )}
          <Link to={homeLink}>{logo}</Link>
        </div>
        {showSearch && isDesktop && <Search />}

        <Box>
          {showSearch &&
            isMobile &&
            collapseSearchOnMobile &&
            (!collapseSearch ? (
              <Stack direction="row">
                <Search />
                <IconButton onClick={() => setCollapseSearch(true)}>
                  <Cancel />
                </IconButton>
              </Stack>
            ) : (
              <IconButton onClick={() => setCollapseSearch(false)}>
                <SearchIcon />
              </IconButton>
            ))}
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
