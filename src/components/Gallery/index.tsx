import * as React from "react";
import { Box, Card, Grid, Stack } from "@mui/material";
import { MediaCardImageProps } from "../MediaCardImage";

interface GalleryProps {
  images: MediaCardImageProps[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Stack>
      <Box
        component="img"
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg"
        alt="fooooo"
        sx={{
          maxWidth: "100%",
        }}
      />
      {images && (
        <Grid container spacing={1} marginTop={1}>
          {images.map((image: MediaCardImageProps) => {
            return (
              <Grid item xs={2} key={image.url}>
                <Card>
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
