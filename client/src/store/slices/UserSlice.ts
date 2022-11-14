import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    user: string;
    isAuth: boolean;
    loginError: boolean;
    registerError: boolean;
    authLoading: boolean;
}

const initialState: UserState = {
    user: '',
    isAuth: false,
    loginError: false,
    registerError: false,
    authLoading: false
}

export const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
            signUpError(state) {
                state.registerError = true
            },
            signInError(state) {
                state.loginError = true
            },
            signIn(state, action: PayloadAction<any>) {
                state.loginError = false
                state.user = action.payload
                state.isAuth = true
            },
            signingIn(state) {
                state.authLoading = true
                state.loginError = false
            }
        }
    }
)

export default userSlice.reducer