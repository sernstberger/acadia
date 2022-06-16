import { Product as ProductProps } from '@acadia/types';
import { Button, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../services/products';

const formatMoney = (number: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    number
  );

export const Product = () => {
  const { id } = useParams();

  const { data, error, isLoading, isFetching } = useGetProductByIdQuery(
    id || '1'
    // {
    //   pollingInterval: 100,
    // }
  );

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img src={data.product?.image} alt="product" width="100%" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h1">{data.product?.title}</Typography>
            <Typography>{data.product?.description}</Typography>
            <Typography>{formatMoney(data.product?.price)}</Typography>
            <Button variant="contained" color="primary">
              Add to cart
            </Button>
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
};

export default Product;
