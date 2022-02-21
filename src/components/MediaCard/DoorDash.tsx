import * as React from "react";
import { Stack, Typography } from "@mui/material";
import MediaCard from ".";
import { formatMoney } from "../../utils";
import FavoriteButton from "../FavoriteButton";

interface DoorDashMediaCardProps {
  image: string;
  title: string;
  distance: {
    number: number;
    unit: string;
  };
  waitTime: number;
  deliveryFee: number;
  favorite?: boolean;
}

const DoorDashMediaCard = ({
  image,
  title,
  waitTime,
  distance,
  deliveryFee,
  favorite = false,
}: DoorDashMediaCardProps) => {
  const DeliveryFee = () => {
    if (deliveryFee === 0) {
      return <span>Free delivery over $10</span>;
    } else {
      return <span>{formatMoney(deliveryFee)}</span>;
    }
  };
  return (
    <MediaCard
      image={{ url: image, alt: title }}
      href="/"
      content={
        <div>
          <Stack direction="row" spacing={1}>
            <Stack sx={{ flex: "1 0 auto" }}>
              <Typography component="h3">{title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {distance.number} {distance.unit} • {waitTime} min •{" "}
                <DeliveryFee />
              </Typography>
            </Stack>
            <FavoriteButton {...{ favorite }} />
          </Stack>
        </div>
      }
    />
  );
};

export default DoorDashMediaCard;
