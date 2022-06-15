import { ShoppingCart } from '@mui/icons-material';
import Button from '@mui/material/Button';

export interface CartButtonProps {}

export function CartButton({}: CartButtonProps) {
  return (
    <Button color="inherit" startIcon={<ShoppingCart />}>
      Cart 1
    </Button>
  );
}

export default CartButton;
