import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { EmployeeAPI } from "./services/EmployeeAPI";


const rootReducer = combineReducers({
    [EmployeeAPI.reducerPath]: EmployeeAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(EmployeeAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']