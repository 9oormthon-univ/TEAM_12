import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal/modalSlice";
import goalSlice from "./goal/goalSlicer";

export default configureStore({
    reducer:{
        modal : modalSlice.reducer,
        goal : goalSlice.reducer
    }
})