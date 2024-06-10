import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromCookies } from "../../shared/getToken.mjs";
import { BASE_URL } from "../../constants";

export const kebeleApi = createApi({
  reducerPath: "kebeleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getTokenFromCookies();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllKebeles: builder.query({
      query: () => "/kebele",
      method: "GET",
    }),
  }),
});

export const { useGetAllKebelesQuery } = kebeleApi;
