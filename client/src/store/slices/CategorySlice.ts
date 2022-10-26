import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAvailability, IBrand, ICategory, IItem, ISubcategory} from "../../models/DataBaseItems";

interface CategoryState {
    categories: ICategory[];
    subcategories: ISubcategory[];
    availabilities: IAvailability[];
    brands: IBrand[];
    items: IItem[];
    currentCategory: ICategory;
    currentSubcategory: ISubcategory;
    currentAvailability: IAvailability;
    currentBrand: IBrand;
    currentItem: IItem;
    loading: boolean;
    error: boolean;
}

const initialState: CategoryState = {
    categories: [],
    subcategories: [],
    availabilities: [],
    brands: [],
    items: [],
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
    currentItem: {
        id: 0,
        categoryId: 0,
        subcategoryId: 0,
        brandId: 0,
        availability: '',
        name: '',
        vendor: '',
        description: '',
        price: 0,
        oldPrice: 0,
        mark: 0,
        marksCount: 0,
        image: '',
        images: [],
        createdAt: '',
        updatedAt: '',
        itemAvailabilityId: null,
        itemBrandId: null,
        itemCategoryId: null,
        itemSubcategoryId: null,
    },
    loading: false,
    error: false,
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
            availabilitySet(state, action: PayloadAction<IAvailability>){
                state.currentAvailability = action.payload
            },
            brandSet(state, action: PayloadAction<IBrand>){
                state.currentBrand = action.payload
            },
            creation(state){
                state.loading = true
                state.error = false
            },
            creationSuccess(state){
                state.loading = false
                state.error = false
            },
            creationError(state){
                state.loading = false
                state.error = true
            },
            fetching(state){
                state.loading = true
                state.error = false
            },
            fetchingError(state){
                state.loading = false
                state.error = true
            },
            categoryFetchingSuccess(state, action: PayloadAction<ICategory[]>){
                state.loading = false
                state.error = false
                state.categories = action.payload
                state.currentCategory = action.payload[0]
            },
            subcategoryFetchingSuccess(state, action: PayloadAction<ISubcategory[]>){
                state.loading = false
                state.error = false
                state.subcategories = action.payload
            },
            availabilitiesFetchingSuccess(state, action: PayloadAction<IAvailability[]>){
                state.loading = false
                state.error = false
                state.availabilities = action.payload
            },
            brandsFetchingSuccess(state, action: PayloadAction<IBrand[]>){
                state.loading = false
                state.error = false
                state.brands = action.payload
            },
            itemsFetchingSuccess(state, action: PayloadAction<IItem[]>){
                state.loading = false
                state.error = false
                state.items = action.payload
            },
            itemFetchingSuccess(state, action: PayloadAction<IItem>){
                state.loading = false
                state.error = false
                state.currentItem = action.payload
            }
        }
    }
)

export default categorySlice.reducer