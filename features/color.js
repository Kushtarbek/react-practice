import { createSlice } from "@reduxjs/toolkit";// Creating a slice for functionality is essential.

// Define the initial state for the slice
const initialState = "black"

const themeSlice = createSlice({
    name: 'theme',   //name of the slice
    initialState: { value: initialState},
    reducers: {
        changeColor: (state, action ) => {
            state.value = action.payload
        },
    }
})

export const {changeColor} = themeSlice.actions
export default themeSlice.reducer