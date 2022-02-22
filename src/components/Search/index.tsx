import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack } from "@mui/material";
import ValidatedInputBase from "../ValidatedInputBase";
import { useForm, FormProvider } from "react-hook-form";

const SearchWrapper = styled("form")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  display: "flex",
  flex: "auto",
}));

const Search = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <SearchWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <ValidatedInputBase
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
    </FormProvider>
  );
};

export default Search;
