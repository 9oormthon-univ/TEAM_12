import { createAsyncThunk, createSlice , getDefaultMiddleware} from "@reduxjs/toolkit";
import { API } from "../../api/axios";

const initialState = {
    showModal: false,
    type: '',
    title:'',
    addInfo:{},
    managers : [],
    goals : [],
    duration : [],
}

export const todoGetMemList = createAsyncThunk(
    'modalSlice/todoGetMemList',
    async (projectId)=>{
        const res = await API.get(`/api/members/${projectId}`); 
        return res.data.data;
    }
)

export const todoGetGoalList = createAsyncThunk(
    'modalSlice/todoGetGoalList',
    async (projectId) => {
        const res = await API.get(`/api/projects/${projectId}/goals`);
        return res.data.data;
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
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(todoGetMemList.fulfilled,(state,action)=>{
            state.managers = action.payload;
        }),
        builder.addCase(todoGetGoalList.fulfilled,(state,action)=>{
            state.goals = action.payload.map(e=>e);
            state.duration = [
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