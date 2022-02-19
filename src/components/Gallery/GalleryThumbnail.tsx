import React, { useState } from "react";
import { Box, Card, Grid } from "@mui/material";
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
    <Card
      onClick={() => setSelectedImageIndex(index)}
      sx={{
        border: selected ? "2px solid red" : undefined,
      }}
    >
      <Box
        component="img"
        src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={image.alt}
        sx={{
          display: "flex",
          maxWidth: "100%",
        }}
        loading="lazy"
      />
    </Card>
  );
};

export default GalleryThumbnail;
