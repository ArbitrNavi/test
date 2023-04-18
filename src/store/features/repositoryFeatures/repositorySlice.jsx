import {createSlice} from "@reduxjs/toolkit";

export const repositorySlice = createSlice({
    name: "repository",
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, action) => {
            console.log(action.payload)
            state.data = action.payload
        }
    }
})

export const {setData} = repositorySlice.actions;
export default repositorySlice.reducer;