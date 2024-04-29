import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";

export const store = configureStore({
    reducer:{
        filter: filtersSlice.reducer
    }
})