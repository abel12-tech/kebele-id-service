import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const applyApi = createApi({
  reducerPath: "applyApi",
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
    applyForId: builder.mutation({
      query: (data) => ({
        url: `/id/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useApplyForIdMutation } = applyApi;
