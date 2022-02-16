import * as React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

interface MediaCardProps {
  image: { url: string; alt: string; height?: number };
  content?: React.ReactNode;
}

const MediaCard = ({
  content,
  image: { url, height = 200, alt },
}: MediaCardProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={url} component="img" height={height} alt={alt} />
        {content && <CardContent>{content}</CardContent>}
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;
