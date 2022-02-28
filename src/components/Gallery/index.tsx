import React, { useEffect, useState } from "react";
import { Box, Fab, Fade, Stack } from "@mui/material";
import { MediaCardImageProps } from "../MediaCardImage";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import GalleryThumbnailList from "./GalleryThumbnailList";
import { useKeyPress } from "../../utils";

export interface GalleryProps {
  images: MediaCardImageProps[];
  showThumbnails?: boolean;
}

const Gallery = ({ images, showThumbnails = false }: GalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const totalNumberOfImages = images.length;
  const maxIndex = totalNumberOfImages - 1;

  const leftPress: boolean = useKeyPress("ArrowLeft");
  const rightPress: boolean = useKeyPress("ArrowRight");

  useEffect(() => {
    if (leftPress && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  }, [leftPress]);

  useEffect(() => {
    if (rightPress && selectedImageIndex < maxIndex) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  }, [rightPress]);

  const hasMultipleImages = totalNumberOfImages > 1;

  return (
    <Stack>
      <div style={{ position: "relative" }}>
        <Fade in>
          <Box
            component="img"
            src={`${images[selectedImageIndex].url}?w=600&h=300&fit=crop&auto=format`}
            srcSet={`${images[selectedImageIndex].url}?w=600&h=300&fit=crop&auto=format&dpr=2 2x`}
            sx={{
              width: "100%",
            }}
          />
        </Fade>
        {/* <Typography>{images[selectedImageIndex].alt}</Typography> */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 10,
            right: 10,
            bottom: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {hasMultipleImages && (
            <>
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
            </>
          )}
        </Box>
      </div>
      {showThumbnails && images && hasMultipleImages && (
        <GalleryThumbnailList
          {...{ images, setSelectedImageIndex, selectedImageIndex }}
        />
      )}
    </Stack>
  );
};

export default Gallery;
