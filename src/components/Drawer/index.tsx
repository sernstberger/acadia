import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { NavItemProps } from "../Nav/types";
import { Link } from "react-router-dom";

interface DrawerProps {
  anchor: "top" | "left" | "bottom" | "right";
  open: boolean;
  setOpen: (open: boolean) => void;
  items: NavItemProps[];
}

export default function Drawer({ anchor, open, setOpen, items }: DrawerProps) {
  const toggleDrawer =
    (_open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(_open);
    };

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {items.map((item: NavItemProps) => (
            <ListItem button key={item.value} component={Link} to={item.to}>
              {/* <ListItemIcon>
                <InboxIcon />
              </ListItemIcon> */}
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
