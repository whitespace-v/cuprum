import {AppDispatch} from "../store";
import {categorySlice} from "../slices/CategorySlice";
import {$host} from "../../http";
import {IAvailability, IBrand, ICategory, ISorting, ISubcategory} from "../../models/DataBaseItems";

export const fetchCategories = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoryFetching())
        const {data} = await $host.get('api/category')
        dispatch(categorySlice.actions.categoryFetchingSuccess(data))
        const {data: subcategories} = await $host.get('api/subcategory', {params: data[0]})
        dispatch(categorySlice.actions.subcategoryFetchingSuccess(subcategories))
    } catch (e) {
        dispatch(categorySlice.actions.categoryFetchingError())
    }
}

export const fetchAvailabilities = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.availabilityFetching())
        const {data} = await $host.get('api/availability')
        dispatch(categorySlice.actions.availabilitiesFetchingSuccess(data))
    } catch (e) {
        dispatch(categorySlice.actions.availabilityFetchingError())
    }
}

export const fetchBrands = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.brandsFetching())
        const {data} = await $host.get('api/brand')
        dispatch(categorySlice.actions.brandsFetchingSuccess(data))
    } catch (e) {
        dispatch(categorySlice.actions.brandsFetchingError())
    }
}

export const fetchItems = (
    category: ICategory, subcategory: ISubcategory, availability: IAvailability, brand: IBrand, sorting: ISorting,
    currentPage: number, limit: number, query: string
    ) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.itemsFetching())
        const {data} = await $host.get('api/item', {params: {category, subcategory, availability, brand, sorting, page: currentPage, limit, query: query.toLowerCase()}})
        dispatch(categorySlice.actions.itemsFetchingSuccess(data))
        dispatch(categorySlice.actions.pagesSet(data.count))
    } catch (e) {
        dispatch(categorySlice.actions.itemsFetchingError())
    }
}

export const fetchItem = (id: string | undefined) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.itemFetching())
        const {data} = await $host.get('api/item/' + id)
        dispatch(categorySlice.actions.itemFetchingSuccess(data))
    } catch (e) {
        dispatch(categorySlice.actions.itemFetchingError())
    }
}


