import Container from '@mui/material/Container';
import { PageHeader, ProductGrid } from '@acadia/ui';

export const App = () => {
  return (
    <>
      <PageHeader brand="Store" />
      <Container maxWidth="md" sx={{ padding: 2 }}>
        <ProductGrid
          products={[
            { id: '1' },
            { id: '2' },
            { id: '3' },
            { id: '4' },
            { id: '5' },
            { id: '6' },
            { id: '7' },
            { id: '8' },
            { id: '9' },
            { id: '10' },
          ]}
        />
      </Container>
    </>
  );
};

export default App;
