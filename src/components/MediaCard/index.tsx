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
    <Card sx={{ position: "relative" }}>
      <CardActionArea
        // component={Link}
        // to={href}
        sx={{ height: "100%", width: "100%", position: "absolute" }}
      />
      <CardMedia image={url} component="img" height={height} alt={alt} />
      {content && <CardContent>{content}</CardContent>}
    </Card>
  );
};

export default MediaCard;
