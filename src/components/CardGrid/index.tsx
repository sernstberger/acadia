import React, { useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";

export interface CardGridProps {
  items: any[];
  CardComponent: any;
  listingsPerPage?: number;
}
const CardGrid = ({
  items,
  listingsPerPage = 24,
  CardComponent,
}: CardGridProps) => {
  const numberOfPages = Math.ceil(items.length / listingsPerPage);
  const initialItems = items.slice(0, listingsPerPage);
  const [shownItems, setShownItems] = useState(initialItems);
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const start = (page - 1) * listingsPerPage;
    const end = page * listingsPerPage;
    setShownItems(items.slice(start, end));
  }, [page, listingsPerPage, items]);

  return (
    <>
      <Grid container spacing={3}>
        {shownItems.map((item: any) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <CardComponent {...item} href={`/store/${item.id}`} />
            </Grid>
          );
        })}
      </Grid>
      <Pagination count={numberOfPages} page={page} onChange={handleChange} />
    </>
  );
};

export default CardGrid;
