import * as React from "react";
import { Chip, Stack, Typography } from "@mui/material";
import MediaCard from ".";
import { formatMoney, formatNumber } from "../../utils";
import FavoriteButton from "../FavoriteButton";
import { Star } from "@mui/icons-material";
import { differenceInCalendarDays } from "date-fns";

interface AirbnbMediaCardProps {
  image: string;
  title: string;
  nightlyPrice: number;
  propertyType:
    | "House"
    | "Apartment"
    | "Condo"
    | "Bed & Breakfast"
    | "Loft"
    | "Villa";
  city: string;
  weeklyDiscount?: number;
  checkIn?: Date;
  checkOut?: Date;
  superhost?: boolean;
  favorite?: boolean;
  rating?: {
    average: number;
    count: number;
  };
}

const AirbnbMediaCard = ({
  image,
  title,
  nightlyPrice,
  propertyType,
  city,
  weeklyDiscount = 0,
  checkIn = undefined,
  checkOut = undefined,
  superhost = false,
  favorite = false,
  rating = undefined,
}: AirbnbMediaCardProps) => {
  const days = differenceInCalendarDays(checkOut!, checkIn!);
  const nights = days - 1;
  const nightlyPriceWithDiscounts =
    days > 6
      ? nightlyPrice - nightlyPrice * (weeklyDiscount / 100)
      : nightlyPrice;
  const totalPrice = nightlyPriceWithDiscounts * nights;
  const isDiscounted = nightlyPriceWithDiscounts !== nightlyPrice;
  return (
    <MediaCard
      image={{ url: image, alt: title }}
      href="/"
      content={
        <div>
          {superhost && (
            <Chip
              label="Superhost"
              size="small"
              sx={{
                background: "#FFF",
                border: "1px solid #000",
                textTransform: "uppercase",
                borderRadius: 1,
                fontWeight: 700,

                position: "absolute",
                top: 8,
                left: 8,
                pointerEvents: "none",
              }}
            />
          )}
          <FavoriteButton
            {...{ favorite }}
            sx={{ position: "absolute", top: 4, right: 4 }}
          />
          <div>
            {rating && (
              <Stack direction="row" spacing={0.5}>
                <Star fontSize="small" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  {rating.average} ({formatNumber(rating.count)})
                </Typography>
              </Stack>
            )}
            <Typography component="h3">
              {propertyType} in {city}
            </Typography>
            <Typography component="h3">{title}</Typography>
            <Typography component="h3">
              {isDiscounted && <s>{formatMoney(nightlyPrice)}</s>}{" "}
              <strong>{formatMoney(nightlyPriceWithDiscounts)}</strong> / night
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatMoney(totalPrice)} total before taxes
            </Typography>
          </div>
        </div>
      }
    />
  );
};

export default AirbnbMediaCard;
