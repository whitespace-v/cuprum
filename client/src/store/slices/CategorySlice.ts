import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    IAvailability,
    IBrand,
    ICategory,
    IItem,
    ISubcategory,
    IItems,
    ISorting,
    ICartItem
} from "../../models/DataBaseItems";
import {isItemInCart} from "../../hof/isItemInCart";

interface CategoryState {
    categories: ICategory[];
    cartItems: ICartItem[];
    subcategories: ISubcategory[];
    availabilities: IAvailability[];
    brands: IBrand[];
    items: IItems;
    query: string;
    sorting: ISorting[];
    currentSort: ISorting;
    currentCategory: ICategory;
    currentSubcategory: ISubcategory;
    currentAvailability: IAvailability;
    currentBrand: IBrand;
    currentItem: IItem;
    pages: number;
    user: string;
    isAuth: boolean;
    currentPage: number;
    limit: number
    loading: boolean;
    error: boolean;
    loginError: boolean;
    registerError: boolean;
}

const initialState: CategoryState = {
    cartItems: [],
    categories: [],
    loginError: false,
    registerError: false,
    user: '',
    isAuth: false,
    subcategories: [],
    availabilities: [],
    brands: [],
    currentPage: 1,
    limit: 15,
    query: '',
    sorting: [
        {name: 'asc price', rus: 'сначала недорогие'},
        {name: 'desc price', rus: 'сначала дорогие'},
        {name: 'asc marks', rus: 'сначала непопулярные'},
        {name: 'desc marks', rus: 'сначала популярные'}
    ],
    currentSort: {name: '', rus: ''},
    items: {count: 0, rows: []},
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
                state.loading = true
                state.loginError = false
            },
            setQuery(state, action: PayloadAction<string>) {
                state.query = action.payload
            },
            cartItemCountControl(state, action: PayloadAction<ICartItem>,){
                let idx = state.cartItems.findIndex(x => x.item.id === action.payload.item.id)
                if (state.cartItems[idx].count > 1){
                    state.cartItems[idx].count += action.payload.count
                }
                if (state.cartItems[idx].count === 1 && action.payload.count === 1){
                    state.cartItems[idx].count += action.payload.count
                }
            },
            deleteFromCart(state, action: PayloadAction<IItem>){
                state.cartItems = state.cartItems.filter(x => x.item.id !== action.payload.id)
            },
            addToCart(state, action: PayloadAction<IItem>){
                if (!isItemInCart(action.payload, state.cartItems)) {
                    state.cartItems = [...state.cartItems, {item: action.payload, count: 1}]
                }
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