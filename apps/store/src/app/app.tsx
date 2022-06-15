import Container from '@mui/material/Container';
import { ProductCard } from '@acadia/ui';

export const App = () => {
  return (
    <Container maxWidth="sm">
      <ProductCard
        title="Lizard"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
        price={100}
      />
    </Container>
  );
};

export default App;
