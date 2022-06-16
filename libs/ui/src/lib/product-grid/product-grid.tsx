import { Product } from '@acadia/types';
import { ProductCard } from '@acadia/ui';
import { Grid } from '@mui/material';

export interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <Grid container spacing={2}>
      {products.map(({ id, title, description, price }: Product) => {
        return (
          <Grid item xs={4} key={id}>
            <ProductCard
              id={id}
              title={title}
              description={description}
              price={price}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProductGrid;
