import {combineReducers, configureStore} from "@reduxjs/toolkit";
import creatingReducer from './slices/CreatingSlice'
import userReducer from './slices/UserSlice'
import cartReducer from './slices/CartSlice'
import itemReducer from './slices/ItemSlice'
import filterReducer from './slices/FilterSlice'

const rootReducer = combineReducers({
    creatingReducer, userReducer, cartReducer, itemReducer, filterReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']