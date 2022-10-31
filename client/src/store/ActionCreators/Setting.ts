import {IAvailability, IBrand, ICategory, IItem, ISorting, ISubcategory} from "../../models/DataBaseItems";
import {AppDispatch} from "../store";
import {categorySlice} from "../slices/CategorySlice";
import {$host} from "../../http";

export const setCurrentCategory = (category: ICategory) => async(dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.categorySet(category))
    try {
        dispatch(categorySlice.actions.fetching())
        const {data} = await $host.get('api/subcategory', {params: category})
        dispatch(categorySlice.actions.subcategoryFetchingSuccess(data))
    } catch (e) {
        dispatch(categorySlice.actions.fetchingError())
    }
}
export const setCurrentPage = (page: number) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.pageSet(page))

}

export const setCurrentSorting = (sorting: ISorting) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.sortingSet(sorting))
}

export const setCurrentSubcategory = (subcategory: ISubcategory) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.subcategorySet(subcategory))
}
export const setCurrentAvailability = (availability: IAvailability) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.availabilitySet(availability))
}
export const setCurrentBrand = (brand: IBrand) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.brandSet(brand))
}
export const addToFavourites = (item: IItem) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.addToFavourites(item))
}
export const addToCart = (item: IItem) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.addToCart(item))
}
export const deleteFromCart = (item: IItem) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.deleteFromCart(item))
}