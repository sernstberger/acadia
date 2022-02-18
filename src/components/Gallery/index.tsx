import React, { useState } from "react";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { MediaCardImageProps } from "../MediaCardImage";

interface GalleryProps {
  images: MediaCardImageProps[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<MediaCardImageProps>(
    images[0]
  );
  return (
    <Stack>
      <div>
        <Box
          component="img"
          src={selectedImage.url}
          alt={selectedImage.alt}
          sx={{
            maxWidth: "100%",
          }}
        />
        <Typography>{selectedImage.alt}</Typography>
      </div>
      {images && (
        <Grid container spacing={1} marginTop={1}>
          {images.map((image: MediaCardImageProps) => {
            return (
              <Grid item xs={2} key={image.url}>
                <Card onClick={() => setSelectedImage(image)}>
                  <Box
                    component="img"
                    src={image.url}
                    alt={image.alt}
                    sx={{
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
