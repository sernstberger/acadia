import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { Product } from '@acadia/types';

export function ProductCard({
  title,
  description = null,
  price,
  id,
  image,
}: Product) {
  return (
    <Card
      elevation={0}
      sx={{
        border: (theme) => `1px solid ${theme.palette.common.black}`,
        borderRadius: 0,
      }}
    >
      <CardActionArea component={Link} to={`products/${id}`}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
