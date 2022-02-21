import { ProductProps } from "../types";

export const products: ProductProps[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",

    title: "Some title goes here",
    seller: "Some seller goes here",
    price: 123,
    rating: {
      average: 4.5,
      count: 4567,
    },
    freeShipping: true,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",

    title: "Some title goes here",
    seller: "Some seller goes here",
    price: 1234,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",

    title: "Some title goes here",
    seller: "Some seller goes here",
    price: 1234.56,
    rating: {
      average: 4.5,
      count: 456,
    },
    freeShipping: true,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",

    title: "Some title goes here",
    seller: "Some seller goes here",
    price: 123.4,
    rating: {
      average: 2,
      count: 567,
    },
  },
];
