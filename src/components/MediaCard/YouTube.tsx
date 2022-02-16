import * as React from "react";
import MediaCard from ".";
import { Avatar, Stack, Typography } from "@mui/material";
import { formatDistance } from "date-fns";

interface YouTubeMediaCardProps {
  image: string;
  title: string;
  channel: { name: string; avatar: string };
  views: number;
  uploadDate: Date;
}

const formatNumber = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(number);
};

const YouTubeMediaCard = ({
  image,
  title,
  channel,
  views,
  uploadDate,
}: YouTubeMediaCardProps) => {
  return (
    <MediaCard
      image={{ url: image, alt: title }}
      content={
        <div>
          <Stack direction="row" spacing={1}>
            <Avatar alt={channel.name} src={channel.avatar} />
            <div>
              <Typography component="h3">{title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {channel.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {formatNumber(views)} views &bull;{" "}
                {formatDistance(uploadDate, new Date(), { addSuffix: true })}
              </Typography>
            </div>
          </Stack>
        </div>
      }
    />
  );
};

export default YouTubeMediaCard;
