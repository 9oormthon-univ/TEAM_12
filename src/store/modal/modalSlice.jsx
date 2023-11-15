import { createSlice , getDefaultMiddleware} from "@reduxjs/toolkit";

const initialState = {
    showModal: false,
    type: '',
    title:'',
    addInfo:{}
}

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
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
})

export const modalAction = modalSlice.actions

export default modalSlice