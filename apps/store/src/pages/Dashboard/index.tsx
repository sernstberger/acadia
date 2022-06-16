import { Product } from '@acadia/types';
import { ProductGrid } from '@acadia/ui';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('/api').then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return <ProductGrid products={products} />;
};

export default Dashboard;
