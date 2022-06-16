import { Product as ProductProps } from '@acadia/types';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Product = () => {
  const [product, setProduct] = useState<ProductProps>();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/${id}`).then((res) => {
      setProduct(res.data.product);
    });
  }, []);

  return (
    <div>
      <img src={product?.image} alt="product" width="100%" />

      <Typography variant="h1">{product?.title}</Typography>
      <Typography>{product?.description}</Typography>
    </div>
  );
};

export default Product;
