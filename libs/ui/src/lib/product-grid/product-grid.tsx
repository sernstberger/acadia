import { ProductCard } from '@acadia/ui';
import { Grid } from '@mui/material';

interface Product {
  id: string;
}

export interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => {
        return (
          <Grid item xs={4} key={product.id}>
            <ProductCard
              title="Lizard"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
              price={100}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProductGrid;
