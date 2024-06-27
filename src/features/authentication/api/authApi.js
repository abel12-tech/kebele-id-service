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
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: `/resident/forget-password`,
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `/resident/change-password`,
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/resident/reset-password/${data.token}`,
        method: "POST",
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
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} = authApi;
