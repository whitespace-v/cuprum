import {IAvailability, IBrand, ICategory, IItem, ISorting, ISubcategory} from "../../models/DataBaseItems";
import {AppDispatch} from "../store";
import {filterSlice} from "../slices/FilterSlice";
import {cartSlice} from "../slices/CartSlice";
import {$host} from "../../http";

export const setCurrentCategory = (category: ICategory) => async(dispatch: AppDispatch) => {
    dispatch(filterSlice.actions.categorySet(category))
    try {
        dispatch(filterSlice.actions.subcategoryFetching())
        const {data} = await $host.get('api/subcategory', {params: category})
        dispatch(filterSlice.actions.subcategoryFetchingSuccess(data))
    } catch (e) {
        dispatch(filterSlice.actions.subcategoryFetchingError())
    }
}
export const setCurrentPage = (page: number) => (dispatch: AppDispatch) => {
    dispatch(filterSlice.actions.pageSet(page))
}
export const setCurrentSorting = (sorting: ISorting) => (dispatch: AppDispatch) => {
    dispatch(filterSlice.actions.sortingSet(sorting))
}
export const setCurrentSubcategory = (subcategory: ISubcategory) => (dispatch: AppDispatch) => {
    dispatch(filterSlice.actions.subcategorySet(subcategory))
}
export const setCurrentAvailability = (availability: IAvailability) => (dispatch: AppDispatch) => {
    dispatch(filterSlice.actions.availabilitySet(availability))
}
export const setCurrentBrand = (brand: IBrand) => (dispatch: AppDispatch) => {
    dispatch(filterSlice.actions.brandSet(brand))
}
export const addToCart = (item: IItem) => (dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.addToCart(item))
}
export const deleteFromCart = (item: IItem) => (dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.deleteFromCart(item))
}
export const cartItemCountControl = (item: IItem, count: number) => (dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.cartItemCountControl({item, count}))
}
export const setQuery = (query: string) => (dispatch: AppDispatch) => {
    dispatch(filterSlice.actions.setQuery(query))
}
export const clearFilters = () => (dispatch: AppDispatch) => {
    dispatch(filterSlice.actions.clearFilters())
}