import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import ValidatedInputBase from "../ValidatedInputBase";
import ValidatedForm from "../ValidatedForm";

const SearchWrapper = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  display: "flex",
  flex: "auto",
}));

const Search = () => {
  const onSubmit = (data: any) => console.log(data);

  return (
    <ValidatedForm>
      <SearchWrapper>
        <ValidatedInputBase
          fieldName="search"
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <Button
          variant="contained"
          sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          type="submit"
        >
          <SearchIcon />
        </Button>
      </SearchWrapper>
    </ValidatedForm>
  );
};

export default Search;
