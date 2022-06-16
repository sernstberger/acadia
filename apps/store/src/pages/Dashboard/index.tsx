import { ProductGrid } from '@acadia/ui';
import axios from 'axios';
import { useEffect } from 'react';

export const Dashboard = () => {
  useEffect(() => {
    axios.get('/api').then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <ProductGrid
      products={[
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' },
        { id: '8' },
        { id: '9' },
        { id: '10' },
      ]}
    />
  );
};

export default Dashboard;
