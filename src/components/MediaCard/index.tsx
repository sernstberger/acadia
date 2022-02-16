import * as React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

interface MediaCardProps {
  image: string;
  content?: React.ReactNode;
}

const MediaCard = ({ content, image }: MediaCardProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          {...{ image }}
          component="img"
          height="400"
          alt="Paella dish"
        />
        {content && <CardContent>{content}</CardContent>}
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;
