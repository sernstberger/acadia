import * as React from "react";
import MediaCard from ".";
import { Chip, Rating, Stack, Typography } from "@mui/material";
import { formatMoney } from "../../utils";

interface EtsyMediaCardProps {
  image: string;
  title: string;
  seller: string;
  rating?: {
    average: number;
    count: number;
  };
  price: number;
  freeShipping?: boolean;
}

const EtsyMediaCard = ({
  image,
  title,
  seller,
  rating,
  price,
  freeShipping = false,
}: EtsyMediaCardProps) => {
  return (
    <MediaCard
      image={{ url: image, alt: title }}
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

export default EtsyMediaCard;
