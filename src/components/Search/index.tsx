import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack } from "@mui/material";

const SearchWrapper = styled("div")(({ theme }) => ({
  border: "1px solid red",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  display: "flex",
  // flex: "1 0 auto",
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  // marginRight: theme.spacing(2),
  // marginLeft: 0,
  // width: "100%",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
}));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  border: "1px solid green",
  flex: 1,
  // color: "inherit",
  // "& .MuiInputBase-input": {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //   transition: theme.transitions.create("width"),
  //   width: "100%",
  //   [theme.breakpoints.up("md")]: {
  //     width: "20ch",
  //   },
  // },
}));

const Search = () => {
  return (
    // <SearchWrapper>
    //   {/* <SearchIconWrapper>
    //     <SearchIcon />
    //   </SearchIconWrapper> */}
    //   <StyledInputBase
    //     placeholder="Search…"
    //     inputProps={{ "aria-label": "search" }}
    //   />
    //   <Button variant="contained">
    //     <SearchIcon />
    //   </Button>
    // </SearchWrapper>
    <Stack direction="row">
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <Button variant="contained">
        <SearchIcon />
      </Button>
    </Stack>
  );
};

export default Search;
