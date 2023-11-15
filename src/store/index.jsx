import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal/modalSlice";

export default configureStore({
    reducer:{
        modal : modalSlice.reducer
    }
})