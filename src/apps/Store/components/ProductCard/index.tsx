import * as React from "react";
import MediaCard from "../../../../components/MediaCard";
import { Chip, Rating, Stack, Typography } from "@mui/material";
import { formatMoney } from "../../../../utils";

interface ProductCardProps {
  image: string;
  title: string;
  seller: string;
  rating?: {
    average: number;
    count: number;
  };
  price: number;
  freeShipping?: boolean;
  href: string;
}

const ProductCard = ({
  image,
  title,
  seller,
  rating,
  price,
  href,
  freeShipping = false,
}: ProductCardProps) => {
  return (
    <MediaCard
      image={{ url: image, alt: title }}
      {...{ href }}
      content={
        <div>
          <Typography component="h3">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {seller}
          </Typography>
          {rating && (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Rating readOnly value={rating.average} precision={0.5} />
              <Typography
                variant="body2"
                component="span"
                color="text.secondary"
              >
                ({rating.count.toLocaleString("en-US")})
              </Typography>
            </Stack>
          )}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6">{formatMoney(price)}</Typography>
            {freeShipping && (
              <Chip label="FREE shipping" size="small" color="success" />
            )}
          </Stack>
        </div>
      }
    />
  );
};

export default ProductCard;
