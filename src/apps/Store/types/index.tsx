export interface ImageProps {
  url: string;
  alt: string;
}

export interface ProductProps {
  id: string;
  description: string;
  images: ImageProps[];
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
