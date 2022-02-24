import * as React from "react";
import { Container, Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data";
import { ProductProps } from "../../types";
import CardGrid from "../../../../components/CardGrid";

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <CardGrid
        items={products}
        CardComponent={ProductCard}
        listingsPerPage={12}
      />
    </Container>
  );
};

export default Home;
