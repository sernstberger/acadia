import * as React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import EtsyMediaCard from "./components/MediaCard/Etsy";
import YouTubeMediaCard from "./components/MediaCard/YouTube";
import DoorDashMediaCard from "./components/MediaCard/DoorDash";
import AirbnbMediaCard from "./components/MediaCard/Airbnb";
import Gallery from "./components/Gallery";

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
              url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
              alt: "foo",
            },
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Acadia_National_Park%2C_Baker_Island_toward_Mount_Desert_Island.jpg",
              alt: "bar",
            },
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kereru_perched_on_kowhai_at_Otari_Native_Botanic_Garden.jpg/1920px-Kereru_perched_on_kowhai_at_Otari_Native_Botanic_Garden.jpg",
              alt: "baz",
            },
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Cooper_Kupp.jpg/1920px-Cooper_Kupp.jpg",
              alt: "qux",
            },
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Anita_Kiki_Gbeho_of_the_UN_in_Somalia_discuss_AMISOM_mission_post_2021_%28cropped%29.jpg/1920px-Anita_Kiki_Gbeho_of_the_UN_in_Somalia_discuss_AMISOM_mission_post_2021_%28cropped%29.jpg",
              alt: "quux",
            },
          ]}
        />
      </Box>
    </Container>
  );
};

export default App;
