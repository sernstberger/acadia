import * as React from "react";
import { styled } from "@mui/material/styles";
import { InputBase, InputBaseProps } from "@mui/material";
import { useFormContext } from "react-hook-form";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
  flex: 1,
  padding: theme.spacing(1),
}));

interface ValidatedInputBaseProps extends InputBaseProps {
  fieldName: string;
}

const ValidatedInputBase = ({
  fieldName,
  ...rest
}: ValidatedInputBaseProps) => {
  const { register } = useFormContext();

  return <StyledInputBase {...register(fieldName)} {...rest} />;
};

export default ValidatedInputBase;
