import {AppDispatch} from "../store";
import {categorySlice} from "../slices/CategorySlice";
import {$authHost, $host} from "../../http";
import jwt_decode from "jwt-decode";
import {IToken} from "../../models/DataBaseItems";

export const signUp = (login: string, password: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.creation())
        const {data} = await $host.post('api/user/registration', {login, password})
        let token: IToken = jwt_decode(data.token)
        dispatch(categorySlice.actions.signIn(token.role))
        localStorage.setItem('token', data.token)
    } catch (e) {
        dispatch(categorySlice.actions.signUpError())
    }
}

export const signIn = (login: string, password: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.signingIn())
        const {data} = await $host.post('api/user/login', {login, password})
        let token: IToken = jwt_decode(data.token)
        dispatch(categorySlice.actions.signIn(token.role))
        localStorage.setItem('token', data.token)
    } catch (e) {
        dispatch(categorySlice.actions.signInError())
    }
}

export const check = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.creation())
        const {data} = await $authHost.get('api/user/auth' )
        let token: IToken = jwt_decode(data.token)
        dispatch(categorySlice.actions.signIn(token.role))
        localStorage.setItem('token', data.token)
    } catch (e) {
        dispatch(categorySlice.actions.creationError())
    }
}