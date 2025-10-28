import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_APP_BASE_URL; 
// Example: http://localhost:8800

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + "/api", // no extra space
    credentials: "include",    // important for cookies
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
