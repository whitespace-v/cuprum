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

interface ItemState {
    cartItems: ICartItem[];
    items: IItems;
    currentItem: ICurrentItem;
    error: boolean;
    itemLoading: boolean;
    itemsLoading: boolean;
    createLoading: boolean;
}

const initialState: ItemState = {
    cartItems: [],
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
    itemsLoading: true,
    itemLoading: false,
    createLoading: false,
    items: {count: 0, rows: []}
}

export const itemSlice = createSlice({
        name: 'item',
        initialState,
        reducers: {
            creation(state){
                state.createLoading = true
                state.error = false
            },
            creationSuccess(state){
                state.createLoading = false
                state.error = false
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

export default itemSlice.reducer