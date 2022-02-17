import * as React from "react";
import MediaCard from ".";
import { Avatar, Stack, Typography } from "@mui/material";

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
  const foo = () => {
    if (deliveryFee === 0) {
      return <span>Free delivery over $10</span>;
    } else {
      return <span>${deliveryFee}</span>;
    }
  };
  return (
    <MediaCard
      image={{ url: image, alt: title }}
      content={
        <div>
          <Stack direction="row" spacing={1}>
            <div>
              <Typography component="h3">{title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {distance.number} {distance.unit} • {waitTime} min • {foo()}
              </Typography>
            </div>
            <Avatar />
          </Stack>
        </div>
      }
    />
  );
};

export default DoorDashMediaCard;
