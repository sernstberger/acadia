import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ProductCard } from '@acadia/ui';

export const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <ProductCard title="Lizard" />
      </Box>
    </Container>
  );
};

export default App;
