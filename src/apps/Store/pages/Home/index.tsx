import * as React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data";
import { ProductProps } from "../../types";

const Home = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {products.map((product: ProductProps) => {
          return (
            <Grid item xs={12} sm={6} key={product.id}>
              <ProductCard {...product} href={`/store/${product.id}`} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
