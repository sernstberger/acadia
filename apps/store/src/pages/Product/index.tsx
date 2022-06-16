import { Product as ProductProps } from '@acadia/types';
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

  return <div>{product?.title}</div>;
};

export default Product;
