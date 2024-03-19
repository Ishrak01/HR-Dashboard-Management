"use client"

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({

    baseUrl: "http://localhost:5500",
    baseUrl: "https://hrserver.ishrakhasin.com",




  }),


  endpoints: (builder) => ({}),
})

