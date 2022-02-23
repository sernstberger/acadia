import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, matchPath, useLocation } from "react-router-dom";

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

export default function Nav({ items }: any) {
  const routeMatch = useRouteMatch(["inbox/:id", "drafts", "/store/trash"]);
  const currentTab = routeMatch?.pattern?.path;
  console.log("!!!", routeMatch, routeMatch?.pattern?.path);
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={currentTab}>
        <Tab label="Inbox" value="inbox/:id" to="/" component={Link} />
        <Tab label="Drafts" value="drafts" to="drafts" component={Link} />
        <Tab label="Trash" value="/store/trash" to="trash" component={Link} />
      </Tabs>
    </Box>
  );
}
