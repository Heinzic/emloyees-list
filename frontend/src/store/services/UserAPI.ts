import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEmployee, IFetchedEmployee } from "../models/IUser";


export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    endpoints: (build) => ({
        fetchAllEmployees: build.query<IFetchedEmployee[], void>({
            query: () => ({
                url: '/Employee',
            })
        }),
        fetchEmployee: build.query<IFetchedEmployee, string>({
            query: (id) => ({
                url: `/Employee/${id}`
            })
        }),
        createEmployee: build.mutation<IFetchedEmployee, IEmployee>({
            query: (employee) => ({
                url: '/Employee/',
                method: 'POST',
                body: employee
            })
        }),
        changeEmployee: build.mutation<IFetchedEmployee, {employee: IEmployee, id: string}>({
            query: ({employee, id}) => ({
                url: `/Employee/${id}`,
                method: 'PATCH',
                body: employee
            })
        }),
        deleteEmployee: build.mutation<IEmployee, string>({
            query: (id) => ({
                url: `/Employee/${id}`,
                method: 'DELETE',
                body: id
            })
        }),
    })
})

export const {
    useChangeEmployeeMutation,
    useCreateEmployeeMutation,
    useDeleteEmployeeMutation,
    useFetchAllEmployeesQuery,
    useFetchEmployeeQuery
} = userAPI