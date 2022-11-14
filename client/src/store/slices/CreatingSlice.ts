import {createSlice} from "@reduxjs/toolkit";

interface CreatingState {
    error: boolean;
    createLoading: boolean;
}

const initialState: CreatingState = {
    error: false,
    createLoading: false
}

export const creatingSlice = createSlice({
        name: 'creating',
        initialState,
        reducers: {
            creation(state){
                state.createLoading = true
                state.error = false
            },
            creationSuccess(state){
                state.createLoading = false
                state.error = false
            },
            creationError(state){
                state.createLoading = false
                state.error = true
            }
        }
    }
)

export default creatingSlice.reducer