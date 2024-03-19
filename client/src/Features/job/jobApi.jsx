import { apiSlice } from "../baseApi/apiSlice"


export const jobApi = apiSlice.injectEndpoints({


  tagTypes: ['update'],
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (data) => ({
        url: "/createJob",
        method: 'POST',
        body: data


      }),

      invalidatesTags: ['update']

    }),



    updateJob: builder.mutation({
      query: ({ data, id }) => ({
        url: `/updateJob/${id}`,
        method: 'PUT'
      }),
      providesTags: ["update"]
    }),

    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/deleteJob/${id}`,
        method: 'DELETE',


      }),


    }),

    allJobs: builder.query({
      query: (data) => ({
        url: "/allJobs",
        method: 'GET',


      }),
      providesTags: ['update'],

    }),

    recentJobs: builder.query({
      query: (data) => ({
        url: "/recentJobs",
        method: 'GET',


      }),
      providesTags: ['update'],
      invalidatesTags: ['update']
    }),


    individualJob: builder.query({
      query: (id) => ({
        url: `/individualJob/${id}`,
        method: 'GET',


      }),


    }),


  }),


})

export const { useCreateJobMutation, useUpdateJobMutation, useDeleteJobMutation, useRecentJobsQuery, useIndividualJobQuery, useAllJobsQuery } = jobApi