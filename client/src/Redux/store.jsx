import { configureStore } from "@reduxjs/toolkit"

import { apiSlice } from "../Features/baseApi/apiSlice"
import candidateSliceReducer from "../Features/candidate/candidateSlice"
import jobSliceReducer from "../Features/job/jobSlice"

const store= configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

   
    candidate:candidateSliceReducer,
    job:jobSliceReducer
   
   
  },

  devTools: !process.env.NODE_ENV ==="production",

  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
