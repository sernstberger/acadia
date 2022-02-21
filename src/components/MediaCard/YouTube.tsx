import * as React from "react";
import MediaCard from ".";
import { Avatar, Stack, Typography } from "@mui/material";
import { formatDistance } from "date-fns";
import { formatNumber } from "../../utils";

interface YouTubeMediaCardProps {
  image: string;
  title: string;
  channel: { name: string; avatar: string };
  views: number;
  uploadDate: Date;
}

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
      href="/"
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
                {formatNumber(views, true)} views &bull;{" "}
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
