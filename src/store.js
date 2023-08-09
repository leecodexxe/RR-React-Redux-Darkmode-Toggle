import { configureStore } from '@reduxjs/toolkit'
import modeSlice from './duck/modeSlice'

export const store = configureStore({
    reducer:modeSlice
})