import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import Search from "../Search";
import ProfileMenu from "../ProfileMenu";
import NotificationsMenu from "../NotificationsMenu";

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <NotificationsMenu
              notifications={[
                { id: 1, text: "asdlkfj adlskfjsadf" },
                { id: 2, text: "oidfadfkljafi q alkdfj lkdjfa" },
                {
                  id: 3,
                  text: "ladsjfl kjasdflj afldfkjurhhfsn kjalfkj sdkhf",
                },
              ]}
            />
          </Box>
          <ProfileMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
