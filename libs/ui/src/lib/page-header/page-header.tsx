import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Search from '../search/search';
import { CartButton } from '../cart-button/cart-button';

export interface PageHeaderProps {
  brand: string;
}

export function PageHeader({ brand }: PageHeaderProps) {
  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: (theme) => `2px solid ${theme.palette.common.black}`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div">
          {brand}
        </Typography>
        <Search />
        <CartButton />
      </Toolbar>
    </AppBar>
  );
}

export default PageHeader;
