import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    IAvailability,
    IBrand,
    ICategory,
    IItem,
    ISubcategory,
    IItems,
    ISorting,
    ICart
} from "../../models/DataBaseItems";

interface CategoryState {
    categories: ICategory[];
    favourites: IItem[];
    cart: ICart[];
    cartSum: number;
    subcategories: ISubcategory[];
    availabilities: IAvailability[];
    brands: IBrand[];
    items: IItems;
    sorting: ISorting[];
    currentSort: ISorting;
    currentCategory: ICategory;
    currentSubcategory: ISubcategory;
    currentAvailability: IAvailability;
    currentBrand: IBrand;
    currentItem: IItem;
    pages: number;
    userRole: 'Admin' | 'User';
    currentPage: number;
    limit: number
    loading: boolean;
    error: boolean;
}

const initialState: CategoryState = {
    cart: [],
    favourites: [],
    categories: [],
    cartSum: 0,
    userRole: 'Admin', //todo: redo!
    subcategories: [],
    availabilities: [],
    brands: [],
    currentPage: 1,
    limit: 2,
    sorting: [
        {name: 'asc price', rus: 'сначала недорогие'},
        {name: 'desc price', rus: 'сначала дорогие'},
        {name: 'asc marks', rus: 'сначала непопулярные'},
        {name: 'desc price', rus: 'сначала популярные'}
    ],
    currentSort: {name: '', rus: ''},
    items: {
        count: 0,
        rows: []
    },
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
            deleteFromCart(state, action: PayloadAction<IItem>){
                state.cart = state.cart.filter( obj => obj.id !== action.payload.id);
                //todo: remove all prices
                state.cartSum -= action.payload.price
            },
            addToFavourites(state, action: PayloadAction<IItem>){
                state.favourites = [...state.favourites, action.payload]
            },
            addToCart(state, action: PayloadAction<ICart>){ //todo: redo counts and items
                state.cart = [{item: action.payload.item, count: action.payload.count}]
                state.cartSum += action.payload.price
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
            itemsFetchingSuccess(state, action: PayloadAction<IItems>){
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