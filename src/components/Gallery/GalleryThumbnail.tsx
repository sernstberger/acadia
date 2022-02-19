import React from "react";
import { Box } from "@mui/material";
import { MediaCardImageProps } from "../MediaCardImage";

interface GalleryThumbnailProps {
  image: MediaCardImageProps;
  setSelectedImageIndex: (index: number) => void;
  index: number;
  selected?: boolean;
}

const GalleryThumbnail = ({
  image,
  setSelectedImageIndex,
  index,
  selected = false,
}: GalleryThumbnailProps) => {
  return (
    <Box
      onClick={() => setSelectedImageIndex(index)}
      component="img"
      src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
      srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={image.alt}
      sx={{
        display: "flex",
        borderRadius: 2,
        maxWidth: "100%",
        borderWidth: selected ? 3 : 0,
        borderStyle: "solid",
        borderColor: selected ? "primary.main" : "transparent",
        opacity: selected ? 1 : 0.85,
        transition: "250ms all",
      }}
      loading="lazy"
    />
  );
};

export default GalleryThumbnail;
