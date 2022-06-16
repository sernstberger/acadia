import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Search from '../search/search';
import { CartButton } from '../cart-button/cart-button';
import { Link } from 'react-router-dom';

export interface PageHeaderProps {
  brand: string;
}

export function PageHeader({ brand }: PageHeaderProps) {
  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.common.black}`,
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
        <Typography variant="h6" component={Link} to="/">
          {brand}
        </Typography>
        <Search />
        <CartButton />
      </Toolbar>
    </AppBar>
  );
}

export default PageHeader;
