import { apiSlice } from "../baseApi/apiSlice"


export const candidateApi = apiSlice.injectEndpoints({



  tagTypes: ['candidate', 'delete', 'update'],
  endpoints: (builder) => ({
    allCandidates: builder.query({
      query: (data) => ({
        url: "/allCandidates",
        method: 'GET',


      }),
      providesTags: ['candidate', 'delete', 'update'],

    }),
    createCandidate: builder.mutation({
      query: (data) => ({
        url: "/createCandidate",
        method: 'POST',
        body: data


      }),
      invalidatesTags: ['candidate'],


    }),
    deleteCandidate: builder.mutation({
      query: (id) => ({
        url: `/deleteCandidate/${id}`,
        method: 'DELETE',


      }),
      invalidatesTags: ['delete'],


    }),
    updateCandidate: builder.mutation({
      query: (body) => ({
        url: `/updateCandidate/${body.id}`,
        method: 'POST',
        body: body.data

      }),

      invalidatesTags: ['update']


    }),
    getSingleCandidate: builder.query({
      query: (id) => ({
        url: `/getSingleCandidate/${id}`,
        method: 'GET',


      }),


    }),
    totalCandidates: builder.query({
      query: (data) => ({
        url: "/totalCandidates",
        method: 'GET',


      }),
      providesTags: ['delete', 'update', 'candidate'],

    }),
    getTotalShortlistedCandidates: builder.query({
      query: (data) => ({
        url: "/getTotalShortlistedCandidates",
        method: 'GET',
        body: data


      }),
      providesTags: ['delete', 'update', 'candidate'],

    }),


    getTotalRejectedCandidates: builder.query({
      query: (data) => ({
        url: "/getTotalRejectedCandidates",
        method: 'GET',
        body: data


      }),
      providesTags: [],

    }),

    totalMaleCandidates: builder.query({
      query: (data) => ({
        url: "/totalMaleCandidates",
        method: 'GET',
        body: data


      }),
      providesTags: [],

    }),


    totalFemaleCandidates: builder.query({
      query: () => ({
        url: "/totalFemaleCandidates",
        method: 'GET',



      }),
      providesTags: [],

    }),


    creationTime: builder.query({
      query: (data) => ({
        url: "/creationTime",
        method: 'GET',
        body: data


      }),
      providesTags: [],

    }),






  }),


})

export const { useAllCandidatesQuery, useDeleteCandidateMutation, useUpdateCandidateMutation, useGetSingleCandidateQuery, useCreateCandidateMutation, useTotalCandidatesQuery, useGetTotalShortlistedCandidatesQuery, useGetTotalRejectedCandidatesQuery, useTotalMaleCandidatesQuery, useTotalFemaleCandidatesQuery, useCreationTimeQuery } = candidateApi