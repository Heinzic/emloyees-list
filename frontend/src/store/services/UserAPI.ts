import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../models/IUser";


export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api', 
        prepareHeaders: (headers) => {
            // headers.set('Origin', 'http://localhost:5173')
            // headers.set('Content-Type', 'application/json')
            return headers
        }
    }),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], void>({
            query: () => ({
                url: '/Employee',
                headers: []
            })
        })
    })
})