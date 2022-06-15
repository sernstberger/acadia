import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Ui } from '@acadia/ui';

export const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with TypeScriptsssss
        </Typography>
        <Button variant="contained" color="primary">
          cool
        </Button>
        <Ui />
      </Box>
    </Container>
  );
};

export default App;
