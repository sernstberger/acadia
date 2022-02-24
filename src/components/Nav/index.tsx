import * as React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavItemProps, NavProps } from "./types";
import { Box, Tab, Tabs, useTheme, useMediaQuery } from "@mui/material";

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default function Nav({ items }: NavProps) {
  const theme = useTheme();
  const values = items.map((item: NavItemProps) => {
    return item.value;
  });
  const routeMatch = useRouteMatch(values);
  const currentTab = routeMatch?.pattern?.path || false;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={currentTab}
        centered={!isMobile}
        variant={isMobile ? "scrollable" : "standard"}
        scrollButtons
        allowScrollButtonsMobile
      >
        {items.map((item: any) => {
          return (
            <Tab
              key={item.value}
              label={item.label}
              value={item.value}
              to={item.to}
              component={Link}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
