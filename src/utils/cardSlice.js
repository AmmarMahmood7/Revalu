import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "./helpers";


const cardSlice = createSlice({

    name: "card",
    initialState: getLocalStorage,
    reducers: {

        addNewCard: (state, action) => {

            state.push(action.payload)
        },
        deleteCard: (state, action) => {
            const id = action.payload
            return state.filter(data => data.id !== id)
        }
    }
})

export const { addNewCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer