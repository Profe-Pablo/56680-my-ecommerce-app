import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { base_url } from "../firebase/database"

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl:base_url}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        getProducts: builder.query({
            query: () => 'products.json',
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
        }),
        
    })
})

export const {useGetCategoriesQuery, useGetProductsQuery, useGetProductsByCategoryQuery} = shopApi