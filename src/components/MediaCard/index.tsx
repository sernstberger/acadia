import * as React from "react";
import { Card, CardActionArea, CardContent } from "@mui/material";
import MediaCardImage, { MediaCardImageProps } from "../MediaCardImage";

interface MediaCardProps {
  image: MediaCardImageProps;
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
      <MediaCardImage {...{ url, height, alt }} />
      {content && <CardContent>{content}</CardContent>}
    </Card>
  );
};

export default MediaCard;
