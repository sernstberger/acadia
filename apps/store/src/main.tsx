import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { productsApi } from './services/products';
import theme from './theme';
import App from './app/app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApiProvider api={productsApi}>
          <App />
        </ApiProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
