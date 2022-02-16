import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MediaCard from "./components/MediaCard";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1">
          Acadia
        </Typography>
        <Typography marginBottom={10}>an idyllic place</Typography>
        <MediaCard
          image="https://upload.wikimedia.org/wikipedia/commons/1/1f/Acadia_National_Park%2C_Baker_Island_toward_Mount_Desert_Island.jpg"
          content={
            <div>
              <Typography variant="h6">Acadia National Park</Typography>
              <Typography>
                Acadia National Park protects the natural beauty of the highest
                rocky headlands along the Atlantic coastline of the United
                States, an abundance of habitats, and a rich cultural heritage.
              </Typography>
            </div>
          }
        />
      </Box>
    </Container>
  );
};

export default App;
