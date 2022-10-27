import {AppDispatch} from "../store";
import {categorySlice} from "../slices/CategorySlice";
import {$host} from "../../http";
import {IAvailability, IBrand, ICategory, ISubcategory} from "../../models/DataBaseItems";

export const fetchCategories = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.fetching())
        const {data} = await $host.get('api/category')
        dispatch(categorySlice.actions.categoryFetchingSuccess(data))
        dispatch(categorySlice.actions.fetching())
        const {data: subcategories} = await $host.get('api/subcategory', {params: data[0]})
        dispatch(categorySlice.actions.subcategoryFetchingSuccess(subcategories))
    } catch (e) {
        dispatch(categorySlice.actions.fetchingError())
    }
}

export const fetchAvailabilities = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.fetching())
        const {data} = await $host.get('api/availability')
        dispatch(categorySlice.actions.availabilitiesFetchingSuccess(data))
    } catch (e) {
        dispatch(categorySlice.actions.fetchingError())
    }
}

export const fetchBrands = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.fetching())
        const {data} = await $host.get('api/brand')
        dispatch(categorySlice.actions.brandsFetchingSuccess(data))
    } catch (e) {
        dispatch(categorySlice.actions.fetchingError())
    }
}

//todo: logic
export const fetchItems = (
    category: ICategory, subcategory: ISubcategory, availability: IAvailability, brand: IBrand
    ) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.fetching())
        const {data} = await $host.get('api/item', {params: {category, subcategory, availability, brand}})
        dispatch(categorySlice.actions.itemsFetchingSuccess(data))
    } catch (e) {
        dispatch(categorySlice.actions.fetchingError())
    }
}

export const fetchItem = (id: string | undefined) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.fetching())
        const {data} = await $host.get('api/item/' + id)
        dispatch(categorySlice.actions.itemFetchingSuccess(data))
    } catch (e) {
        dispatch(categorySlice.actions.fetchingError())
    }
}


