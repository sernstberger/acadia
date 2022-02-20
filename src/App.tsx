import * as React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import EtsyMediaCard from "./components/MediaCard/Etsy";
import YouTubeMediaCard from "./components/MediaCard/YouTube";
import DoorDashMediaCard from "./components/MediaCard/DoorDash";
import AirbnbMediaCard from "./components/MediaCard/Airbnb";
import Gallery from "./components/Gallery";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1">
          Acadia
        </Typography>
        <Typography marginBottom={10}>an idyllic place</Typography>
        <Typography variant="h3" component="h1">
          MediaCard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <EtsyMediaCard
              image="https://upload.wikimedia.org/wikipedia/commons/1/1f/Acadia_National_Park%2C_Baker_Island_toward_Mount_Desert_Island.jpg"
              title="Some title goes here"
              seller="Some seller goes here"
              price={1234}
              rating={{
                average: 4.5,
                count: 4567,
              }}
              freeShipping
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <YouTubeMediaCard
              image="https://upload.wikimedia.org/wikipedia/commons/1/1f/Acadia_National_Park%2C_Baker_Island_toward_Mount_Desert_Island.jpg"
              title="Some video title goes here"
              channel={{
                name: "Some channel name goes here",
                avatar:
                  "https://upload.wikimedia.org/wikipedia/commons/1/1f/Acadia_National_Park%2C_Baker_Island_toward_Mount_Desert_Island.jpg",
              }}
              views={4567}
              uploadDate={new Date(2022, 0, 1)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DoorDashMediaCard
              image="https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg"
              title="Some restaurant goes here"
              distance={{
                number: 4.5,
                unit: "mi",
              }}
              waitTime={34}
              deliveryFee={0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AirbnbMediaCard
              image="https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg"
              title="Some house name goes here"
              superhost
              rating={{
                average: 4.5,
                count: 4567,
              }}
              propertyType="House"
              city="Some City"
              nightlyPrice={123}
              weeklyDiscount={20}
              checkIn={new Date(2022, 1, 11)}
              checkOut={new Date(2022, 1, 18)}
            />
          </Grid>
        </Grid>
        <Divider />
        <Typography variant="h3" component="h1">
          Gallery
        </Typography>
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
        />
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h3" component="h1">
          Search
        </Typography>
        <Search />
        <Typography variant="h3" component="h1">
          Header
        </Typography>
        <Header />
      </Box>
    </Container>
  );
};

export default App;
