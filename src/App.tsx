import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EtsyMediaCard from "./components/MediaCard/Etsy";
import YouTubeMediaCard from "./components/MediaCard/YouTube";
import { Grid } from "@mui/material";
import DoorDashMediaCard from "./components/MediaCard/DoorDash";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1">
          Acadia
        </Typography>
        <Typography marginBottom={10}>an idyllic place</Typography>
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
              image="https://upload.wikimedia.org/wikipedia/commons/1/1f/Acadia_National_Park%2C_Baker_Island_toward_Mount_Desert_Island.jpg"
              title="Some video title goes here"
              distance={{
                number: 4.5,
                unit: "mi",
              }}
              waitTime={34}
              deliveryFee={0}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
