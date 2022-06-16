import * as React from 'react';

export interface Product {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  price: number;
  image: string;
}
