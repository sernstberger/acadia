export interface ProductProps {
  id: string;
  image: string;
  title: string;
  seller: string;
  rating?: {
    average: number;
    count: number;
  };
  price: number;
  freeShipping?: boolean;
}

export interface ProductCardProps extends ProductProps {
  href: string;
}
