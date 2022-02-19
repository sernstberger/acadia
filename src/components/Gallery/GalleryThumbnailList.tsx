import React from "react";
import { Grid } from "@mui/material";
import { MediaCardImageProps } from "../MediaCardImage";
import GalleryThumbnail from "./GalleryThumbnail";

interface GalleryThumbnailListProps {
  images: MediaCardImageProps[];
  setSelectedImageIndex: (index: number) => void;
  selectedImageIndex: number;
}

const GalleryThumbnailList = ({
  images,
  setSelectedImageIndex,
  selectedImageIndex,
}: GalleryThumbnailListProps) => {
  return (
    <Grid container spacing={1} marginTop={1}>
      {images.map((image: MediaCardImageProps, index: number) => {
        return (
          <Grid item xs={2} key={image.url}>
            <GalleryThumbnail
              image={image}
              index={index}
              setSelectedImageIndex={setSelectedImageIndex}
              selected={images[selectedImageIndex].url === image.url}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GalleryThumbnailList;
