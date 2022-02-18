import * as React from "react";
import { Box, Card, Grid, Stack } from "@mui/material";

const Gallery = ({ images }: any) => {
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
          {images.map((image: any) => {
            return (
              <Grid item xs={2} key={image}>
                <Card>
                  <Box
                    component="img"
                    src={image}
                    alt="asdf"
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
