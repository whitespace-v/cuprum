import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategory, ISubcategory} from "../../models/DataBaseItems";

interface CategoryState {
    categories: ICategory[];
    subcategories: ISubcategory[];
    currentCategory: ICategory;
    currentSubcategory: ISubcategory;
    loading: boolean;
    error: boolean
}

const initialState: CategoryState = {
    categories: [],
    subcategories: [],
    currentSubcategory: {
        id: 0,
        name: '',
        createdAt: '',
        updatedAt: '',
        category_id: 0,
    },
    currentCategory: {
        id: 0,
        name: '',
        createdAt: '',
        updatedAt: '',
    },
    loading: false,
    error: false
}

export const categorySlice = createSlice({
        name: 'category',
        initialState,
        reducers: {
            categorySet(state, action: PayloadAction<ICategory>){
                state.currentCategory = action.payload
            },
            subcategorySet(state, action: PayloadAction<ISubcategory>){
                state.currentSubcategory = action.payload
            },
            categoryCreation(state){
                state.loading = true
                state.error = false
            },
            categoryCreationSuccess(state){
                state.loading = false
                state.error = false
            },
            categoryCreationError(state){
                state.loading = false
                state.error = true
            },
            categoryFetching(state){
                state.loading = true
                state.error = false
            },
            categoryFetchingError(state){
                state.loading = false
                state.error = true
            },
            categoryFetchingSuccess(state, action: PayloadAction<ICategory[]>){
                state.loading = false
                state.error = false
                state.categories = action.payload
                state.currentCategory = action.payload[0]
            },
            subcategoryFetching(state){
                state.loading = true
                state.error = false
            },
            subcategoryFetchingError(state){
                state.loading = false
                state.error = true
            },
            subcategoryFetchingSuccess(state, action: PayloadAction<ISubcategory[]>){
                state.loading = false
                state.error = false
                state.subcategories = action.payload
            }
        }
    }
)

export default categorySlice.reducer