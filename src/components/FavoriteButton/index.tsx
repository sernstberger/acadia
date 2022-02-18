import * as React from "react";
import { ToggleButton, IconButton, SxProps, Theme } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface FavoriteButtonProps {
  favorite?: boolean;
  sx?: SxProps<Theme>;
}

const FavoriteButton = ({ favorite = false, sx }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(favorite);

  return (
    <IconButton
      {...{ sx }}
      component={ToggleButton}
      value="favorite"
      selected={isFavorite}
      onChange={() => {
        setIsFavorite(!isFavorite);
      }}
    >
      {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default FavoriteButton;
