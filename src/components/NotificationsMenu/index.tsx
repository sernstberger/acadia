import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface NotificationsMenuProps {
  notifications: any[];
}

export default function NotificationsMenu({
  notifications,
}: NotificationsMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-notifications-menu";

  return (
    <>
      <IconButton
        size="large"
        aria-label={`show ${notifications.length} new notifications`}
        color="inherit"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
      >
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {notifications.length ? (
          notifications.map((notification) => (
            <MenuItem key={notification.id} onClick={handleMenuClose}>
              {notification.text}
            </MenuItem>
          ))
        ) : (
          <MenuItem>Nothing</MenuItem>
        )}
      </Menu>
    </>
  );
}
