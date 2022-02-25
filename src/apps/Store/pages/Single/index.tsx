import * as React from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Gallery from "../../../../components/Gallery";
import { products } from "../../data";
import { useParams } from "react-router-dom";
import { formatMoney } from "../../../../utils";
import FavoriteButton from "../../../../components/FavoriteButton";
import ValidatedInputBase from "../../../../components/ValidatedInputBase";
import ValidatedForm from "../../../../components/ValidatedForm";

const Single = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <Gallery images={product!.images} showThumbnails />
          reviews
        </Grid>
        <Grid item xs={12} sm={5}>
          <ValidatedForm>
            <Typography variant="h1">{product!.title}</Typography>
            <Typography>{formatMoney(product!.price)}</Typography>

            <Stack direction="row" spacing={2}>
              <FavoriteButton />
              <ValidatedInputBase fieldName="foo" />
              <Button variant="contained" fullWidth>
                Add to cart
              </Button>
            </Stack>

            <Typography>{product!.description}</Typography>
          </ValidatedForm>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Single;
