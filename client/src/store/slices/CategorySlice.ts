import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    IAvailability,
    IBrand,
    ICategory,
    IItem,
    ISubcategory,
    IItems,
    ISorting,
    ICartItem, ICurrentItem
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
    currentItem: ICurrentItem;
    pages: number;
    user: string;
    isAuth: boolean;
    currentPage: number;
    limit: number
    error: boolean;
    loginError: boolean;
    registerError: boolean;
    categoryLoading: boolean;
    subcategoryLoading: boolean;
    availabilityLoading: boolean;
    brandsLoading: boolean;
    itemLoading: boolean;
    itemsLoading: boolean;
    authLoading: boolean;
    createLoading: boolean;
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
        reviews: [],
        itemAvailabilityId: null,
        itemBrandId: null,
        itemCategoryId: null,
        itemSubcategoryId: null,
    },
    error: false,
    categoryLoading: false,
    availabilityLoading: false,
    subcategoryLoading: false,
    brandsLoading: false,
    itemsLoading: true,
    itemLoading: false,
    authLoading: false,
    createLoading: false
}

export const categorySlice = createSlice({
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
            signUpError(state) {
                state.registerError = true
            },
            categoryFetchingError(state) {
                state.categoryLoading = false
                state.error = true
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
                state.createLoading = true
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
                state.createLoading = true
                state.error = false
            },
            creationSuccess(state){
                state.createLoading = false
                state.error = false
            },
            brandsFetchingError(state) {
                state.brandsLoading = false
                state.error = true
            },
            creationError(state){
                state.createLoading = false
                state.error = true
            },
            itemFetching(state){
                state.itemLoading = true
                state.error = false
            },
            itemsFetchingError(state){
                state.itemsLoading = false
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
            },
            itemsFetching(state){
                state.itemsLoading = true
            },
            itemsFetchingSuccess(state, action: PayloadAction<IItems>){
                state.itemsLoading = false
                state.error = false
                state.items = action.payload
            },
            itemFetchingSuccess(state, action: PayloadAction<ICurrentItem>){
                state.itemLoading = false
                state.error = false
                state.currentItem = action.payload
            },
            itemFetchingError(state){
                state.itemLoading = false
                state.error = true
            }
        }
    }
)

export default categorySlice.reducer