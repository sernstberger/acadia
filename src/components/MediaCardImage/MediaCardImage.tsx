import * as React from "react";
import { CardMedia } from "@mui/material";
import { MediaCardImageProps } from "./types";

const MediaCardImage = ({ url, height = 200, alt }: MediaCardImageProps) => {
  return <CardMedia image={url} component="img" height={height} alt={alt} />;
};

export default MediaCardImage;
