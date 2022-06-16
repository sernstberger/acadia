import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  price: number;
}

export function ProductCard({
  title,
  description = null,
  price,
}: ProductCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        border: (theme) => `1px solid ${theme.palette.common.black}`,
        borderRadius: 0,
      }}
    >
      <CardActionArea component={Link} to={`products/1`}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
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