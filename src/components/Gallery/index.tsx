import React, { useState } from "react";
import { Box, Card, Fab, Grid, Stack, Typography } from "@mui/material";
import { MediaCardImageProps } from "../MediaCardImage";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface GalleryProps {
  images: MediaCardImageProps[];
}

const Gallery = ({ images }: GalleryProps) => {
  // const [selectedImage, setSelectedImage] = useState<MediaCardImageProps>(
  //   images[0]
  // );
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const totalNumberOfImages = images.length;
  const maxIndex = totalNumberOfImages - 1;

  return (
    <Stack>
      <div style={{ position: "relative" }}>
        <Box
          component="img"
          // src={selectedImage.url}
          // alt={selectedImage.alt}
          src={images[selectedImageIndex].url}
          alt={images[selectedImageIndex].alt}
          sx={{
            maxWidth: "100%",
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
        <Grid container spacing={1} marginTop={1}>
          {images.map((image: MediaCardImageProps, index: number) => {
            return (
              <Grid item xs={2} key={image.url}>
                <Card
                  onClick={() => setSelectedImageIndex(index)}
                  sx={{
                    border:
                      images[selectedImageIndex].url === image.url
                        ? "2px solid red"
                        : undefined,
                  }}
                >
                  <Box
                    component="img"
                    src={image.url}
                    alt={image.alt}
                    sx={{
                      display: "flex",
                      maxWidth: "100%",
                    }}
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Stack>
  );
};

export default Gallery;
