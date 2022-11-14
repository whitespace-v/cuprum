import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IAvailability,IBrand, ICategory, ISubcategory, ISorting } from "../../models/DataBaseItems";

interface FilterState {
    categories: ICategory[];
    subcategories: ISubcategory[];
    availabilities: IAvailability[];
    brands: IBrand[];
    query: string;
    sorting: ISorting[];
    currentSort: ISorting;
    currentCategory: ICategory;
    currentSubcategory: ISubcategory;
    currentAvailability: IAvailability;
    currentBrand: IBrand;
    pages: number;
    currentPage: number;
    limit: number
    error: boolean;
    categoryLoading: boolean;
    subcategoryLoading: boolean;
    availabilityLoading: boolean;
    brandsLoading: boolean;
}

const initialState: FilterState = {
    categories: [],
    subcategories: [],
    availabilities: [],
    brands: [],
    currentPage: 1,
    limit: 10,
    query: '',
    sorting: [
        {name: 'asc price', rus: 'сначала недорогие'},
        {name: 'desc price', rus: 'сначала дорогие'},
        {name: 'asc marks', rus: 'сначала непопулярные'},
        {name: 'desc marks', rus: 'сначала популярные'}
    ],
    currentSort: {name: '', rus: ''},
    pages: 0,
    currentCategory: {
        id: 0,
        name: '',
        createdAt: '',
        updatedAt: '',
    },
    currentSubcategory: {
        id: 0,
        name: '',
        createdAt: '',
        updatedAt: '',
        categoryId: 0,
    },
    currentAvailability: {
        id: 0,
        name: '',
        createdAt: '',
        updatedAt: ''
    },
    currentBrand: {
        id: 0,
        name: '',
        createdAt: '',
        updatedAt: ''
    },
    error: false,
    categoryLoading: false,
    availabilityLoading: false,
    subcategoryLoading: false,
    brandsLoading: false,
}

export const filterSlice = createSlice({
        name: 'category',
        initialState,
        reducers: {
            brandsFetching(state){
                state.availabilityLoading = true
            },
            availabilityFetching(state){
                state.availabilityLoading = true
            },
            categoryFetching(state){
                state.categoryLoading = true
            },
            subcategoryFetching(state){
                state.subcategoryLoading = true
                state.error = false
            },
            subcategoryFetchingError(state){
                state.subcategoryLoading = false
                state.error = true
            },
            clearFilters(state){
                state.currentCategory = initialState.currentCategory
                state.currentSubcategory = initialState.currentSubcategory
                state.currentSort = initialState.currentSort
                state.currentAvailability = initialState.currentAvailability
                state.currentBrand = initialState.currentBrand
            },
            categoryFetchingError(state) {
                state.categoryLoading = false
                state.error = true
            },
            setQuery(state, action: PayloadAction<string>) {
                state.query = action.payload
            },
            pagesSet(state, action: PayloadAction<number>){
                state.pages = Math.round(action.payload / state.limit)
            },
            pageSet(state, action: PayloadAction<number>){
                state.currentPage = action.payload
            },
            sortingSet(state, action: PayloadAction<ISorting>){
                state.currentSort = action.payload
                state.currentPage = 1
            },
            categorySet(state, action: PayloadAction<ICategory>){
                state.currentCategory = action.payload
                state.currentPage = 1
            },
            subcategorySet(state, action: PayloadAction<ISubcategory>){
                state.currentSubcategory = action.payload
                state.currentPage = 1
            },
            availabilitySet(state, action: PayloadAction<IAvailability>){
                state.currentAvailability = action.payload
                state.currentPage = 1
            },
            brandSet(state, action: PayloadAction<IBrand>){
                state.currentBrand = action.payload
                state.currentPage = 1
            },
            brandsFetchingError(state) {
                state.brandsLoading = false
                state.error = true
            },
            availabilityFetchingError(state){
                state.availabilityLoading = false
                state.error = true
            },
            categoryFetchingSuccess(state, action: PayloadAction<ICategory[]>){
                state.categoryLoading = false
                state.error = false
                state.categories = action.payload
            },
            subcategoryFetchingSuccess(state, action: PayloadAction<ISubcategory[]>){
                state.subcategoryLoading = false
                state.error = false
                state.subcategories = action.payload
            },
            availabilitiesFetchingSuccess(state, action: PayloadAction<IAvailability[]>){
                state.availabilityLoading = false
                state.error = false
                state.availabilities = action.payload
            },
            brandsFetchingSuccess(state, action: PayloadAction<IBrand[]>){
                state.brandsLoading = false
                state.error = false
                state.brands = action.payload
            }
        }
    }
)

export default filterSlice.reducer