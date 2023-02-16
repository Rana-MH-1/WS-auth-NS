
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './AuthSlice'

export const Store = configureStore({reducer:{
    AuthReducer
}})