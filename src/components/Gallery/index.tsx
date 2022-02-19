import React, { useState } from "react";
import { Box, Fab, Stack, Typography } from "@mui/material";
import { MediaCardImageProps } from "../MediaCardImage";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import GalleryThumbnailList from "./GalleryThumbnailList";

interface GalleryProps {
  images: MediaCardImageProps[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const totalNumberOfImages = images.length;
  const maxIndex = totalNumberOfImages - 1;

  return (
    <Stack>
      <div style={{ position: "relative" }}>
        <Box
          component="img"
          src={`${images[selectedImageIndex].url}?w=600&h=300&fit=crop&auto=format`}
          srcSet={`${images[selectedImageIndex].url}?w=600&h=300&fit=crop&auto=format&dpr=2 2x`}
          sx={{
            width: "100%",
          }}
        />
        <Typography>{images[selectedImageIndex].alt}</Typography>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Fab
            disabled={selectedImageIndex === 0}
            onClick={() =>
              setSelectedImageIndex((prevState: number) => prevState - 1)
            }
          >
            <ChevronLeft />
          </Fab>
          <Fab
            disabled={selectedImageIndex >= maxIndex}
            onClick={() =>
              setSelectedImageIndex((prevState: number) => prevState + 1)
            }
          >
            <ChevronRight />
          </Fab>
        </Box>
      </div>
      {images && (
        <GalleryThumbnailList
          {...{ images, setSelectedImageIndex, selectedImageIndex }}
        />
      )}
    </Stack>
  );
};

export default Gallery;
