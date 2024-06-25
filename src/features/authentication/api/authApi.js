import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import { getTokenFromCookies } from "../../../shared/getToken.mjs";

export const authApi = createApi({
  reducerPath: "authApi",
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
    registerResident: builder.mutation({
      query: (data) => ({
        url: `/resident/`,
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data) => ({
        url: `/resident/login`,
        method: "POST",
        body: data,
      }),
    }),
    getResidentById: builder.query({
      query: (id) => `/resident/${id}`,
      method: "GET",
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/resident/${data._id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterResidentMutation,
  useLoginMutation,
  useGetResidentByIdQuery,
  useUpdateProfileMutation,
} = authApi;
