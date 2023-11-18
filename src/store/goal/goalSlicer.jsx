import { createAsyncThunk, createSlice , getDefaultMiddleware} from "@reduxjs/toolkit";

const initialState = {goals:[]}

const goalSlice = createSlice({
  name:'goal',
  initialState,
  reducers :{
    getGoals(state, {payload}){
      state.goals = payload
    }
  }
}) 


export const goalAction = goalSlice.actions

export default goalSlice