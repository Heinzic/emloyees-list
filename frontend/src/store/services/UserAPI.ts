import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../models/IUser";


export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
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