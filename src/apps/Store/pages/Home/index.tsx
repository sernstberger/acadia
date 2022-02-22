import * as React from "react";
import { Container, Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data";
import { ProductProps } from "../../types";

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container spacing={3}>
        {products.map((product: ProductProps) => {
          return (
            <Grid item xs={12} sm={3} key={product.id}>
              <ProductCard {...product} href={`/store/${product.id}`} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Home;
