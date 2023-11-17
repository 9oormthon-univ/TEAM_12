import { createAsyncThunk, createSlice , getDefaultMiddleware} from "@reduxjs/toolkit";
import { API } from "../../api/axios";

const initialState = {
    showModal: false,
    type: '',
    title:'',
    addInfo:{}
}

export const todoGetMemList = createAsyncThunk(
    'modalSlice/todoGetMemList',
    async (projectId)=>{
        return {res} = await API.get(`members/${projectId}`); 
    }
)

export const todoGetGoalList = createAsyncThunk(
    'modalSlice/todoGetGoalList',
    async (projectId) => {
        return {res} = await API.get(`projects/${projectId}/goals`);
    }
)

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        setShowModal(state, {payload}){
            state.showModal = true;
            state.type = payload.type
            state.title = payload.title
            state.addInfo = payload.addInfo
        },
        setCloseModal(state){
            state.showModal = false
            state.type = ''
            state.title = ''
            state.addInfo = {}
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(todoGetMemList.fulfilled,(state,action)=>{
            state.addInfo.managers = action.payload;
        }),
        builder.addCase(todoGetGoalList.fulfilled,(state,action)=>{
            state.addInfo.goals = action.payload.map(e=>e.title);
            state.addInfo.duration = [
                action.payload.map(e=>e.startDate),
                action.payload.map(e=>e.endDate)
            ];
        })
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
})




export const modalAction = modalSlice.actions

export default modalSlice