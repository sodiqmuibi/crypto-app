import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const newsHeaders = {

        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '424037bb1dmshcc1ad79a496cdb6p14f695jsn42cb1e147ae6',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'

}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({url, headers: newsHeaders})

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})
export const {useGetNewsQuery} = newsApi