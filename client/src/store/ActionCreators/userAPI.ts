import {AppDispatch} from "../store";
import {userSlice} from "../slices/UserSlice";
import {$authHost, $host} from "../../http";
import jwt_decode from "jwt-decode";
import {IToken} from "../../models/DataBaseItems";

export const signUp = (login: string, password: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.signingIn())
        const {data} = await $host.post('api/user/registration', {login, password})
        let token: IToken = jwt_decode(data.token)
        dispatch(userSlice.actions.signIn(token.role))
        localStorage.setItem('token', data.token)
    } catch (e) {
        dispatch(userSlice.actions.signUpError())
    }
}

export const signIn = (login: string, password: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.signingIn())
        const {data} = await $host.post('api/user/login', {login, password})
        let token: IToken = jwt_decode(data.token)
        dispatch(userSlice.actions.signIn(token.role))
        localStorage.setItem('token', data.token)
    } catch (e) {
        dispatch(userSlice.actions.signInError())
    }
}

export const check = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.signingIn())
        const {data} = await $authHost.get('api/user/auth' )
        let token: IToken = jwt_decode(data.token)
        dispatch(userSlice.actions.signIn(token.role))
        localStorage.setItem('token', data.token)
    } catch (e) {
        dispatch(userSlice.actions.signInError())
    }
}