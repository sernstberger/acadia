import * as React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Gallery from "../../../../components/Gallery";

const Single = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <Gallery
            images={[
              {
                url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
                alt: "Breakfast",
              },
              {
                url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
                alt: "Burger",
              },
              {
                url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
                alt: "Camera",
              },
              {
                url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
                alt: "Coffee",
              },
              {
                url: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
                alt: "Hats",
              },
              {
                url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
                alt: "Honey",
              },
              {
                url: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
                alt: "Basketball",
              },
              {
                url: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
                alt: "Fern",
              },
              {
                url: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
                alt: "Mushrooms",
              },
              {
                url: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
                alt: "Tomato basil",
              },
              {
                url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
                alt: "Sea star",
              },
              {
                url: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
                alt: "Bike",
              },
            ]}
            showThumbnails
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h1">title goes here</Typography>
          <Button variant="contained">Add to cart</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Single;
