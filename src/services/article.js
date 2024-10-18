import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
const rapidApiHost = import.meta.env.VITE_RAPID_API_HOST;
const rapidApiBaseUrl = import.meta.env.VITE_RAPID_API_BASE_URL;


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: rapidApiBaseUrl,
        prepareHeaders: (headers) => {
<<<<<<< HEAD
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', rapidApiHost);

=======
            headers.set('X-RapidAPI-Key', '');
            headers.set('X-RapidAPI-Host', '');
            
>>>>>>> bf94d65f00ccb46a27f163e03005d952a1f1dc4e
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;
