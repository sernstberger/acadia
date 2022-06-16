import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getProductById: builder.query({
      // query: (id: string) => `pokemon/${id}`,
      query: (id: string) => `${id}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetProductByIdQuery } = productsApi;
