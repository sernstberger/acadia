import * as React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ProductCard
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
          <ProductCard
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
          <ProductCard
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
          <ProductCard
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
      </Grid>
    </div>
  );
};

export default Home;
