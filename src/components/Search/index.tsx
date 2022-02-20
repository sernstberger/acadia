import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack } from "@mui/material";

const SearchWrapper = styled(Stack)(({ theme }) => ({
  border: "1px solid red",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  display: "flex",

  // marginRight: theme.spacing(2),
  // marginLeft: 0,
  // width: "100%",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  border: "1px solid green",
  flex: 1,
  // color: "inherit",
}));

const Search = () => {
  return (
    <SearchWrapper direction="row">
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <Button variant="contained">
        <SearchIcon />
      </Button>
    </SearchWrapper>
  );
};

export default Search;
