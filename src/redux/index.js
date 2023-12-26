import {configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlice'
import { productSlice } from './productSlice'

const userSliceReducer = userSlice.reducer
const productSliceReducer = productSlice.reducer
export const store = configureStore({
    reducer:{
        user : userSliceReducer,
        product: productSliceReducer
    },
})