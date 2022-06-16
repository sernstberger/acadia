import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Button from '@mui/material/Button';

export interface CartButtonProps {}

export function CartButton({}: CartButtonProps) {
  return (
    <Button
      color="inherit"
      startIcon={
        <Badge badgeContent={4} color="primary">
          <ShoppingCart />
        </Badge>
      }
    >
      Cart
    </Button>
  );
}

export default CartButton;
