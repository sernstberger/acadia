import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EtsyMediaCard from "./components/MediaCard/Etsy";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1">
          Acadia
        </Typography>
        <Typography marginBottom={10}>an idyllic place</Typography>
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
      </Box>
    </Container>
  );
};

export default App;
