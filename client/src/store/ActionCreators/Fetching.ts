import {AppDispatch} from "../store";
import {filterSlice} from "../slices/FilterSlice";
import {itemSlice} from "../slices/ItemSlice";
import {$host} from "../../http";
import {IAvailability, IBrand, ICategory, ISorting, ISubcategory} from "../../models/DataBaseItems";

export const fetchCategories = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(filterSlice.actions.categoryFetching())
        const {data} = await $host.get('api/category')
        dispatch(filterSlice.actions.categoryFetchingSuccess(data))
        const {data: subcategories} = await $host.get('api/subcategory', {params: data[0]})
        dispatch(filterSlice.actions.subcategoryFetchingSuccess(subcategories))
    } catch (e) {
        dispatch(filterSlice.actions.categoryFetchingError())
    }
}

export const fetchAvailabilities = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(filterSlice.actions.availabilityFetching())
        const {data} = await $host.get('api/availability')
        dispatch(filterSlice.actions.availabilitiesFetchingSuccess(data))
    } catch (e) {
        dispatch(filterSlice.actions.availabilityFetchingError())
    }
}

export const fetchBrands = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(filterSlice.actions.brandsFetching())
        const {data} = await $host.get('api/brand')
        dispatch(filterSlice.actions.brandsFetchingSuccess(data))
    } catch (e) {
        dispatch(filterSlice.actions.brandsFetchingError())
    }
}

export const fetchItems = (
    category: ICategory, subcategory: ISubcategory, availability: IAvailability, brand: IBrand, sorting: ISorting,
    currentPage: number, limit: number, query: string
    ) => async(dispatch: AppDispatch) => {
    try {
        dispatch(itemSlice.actions.itemsFetching())
        const {data} = await $host.get('api/item', {params: {category, subcategory, availability, brand, sorting, page: currentPage, limit, query: query.toLowerCase()}})
        dispatch(itemSlice.actions.itemsFetchingSuccess(data))
        dispatch(filterSlice.actions.pagesSet(data.count))
    } catch (e) {
        dispatch(itemSlice.actions.itemsFetchingError())
    }
}

export const fetchItem = (id: string | undefined) => async(dispatch: AppDispatch) => {
    try {
        dispatch(itemSlice.actions.itemFetching())
        const {data} = await $host.get('api/item/' + id)
        dispatch(itemSlice.actions.itemFetchingSuccess(data))
    } catch (e) {
        dispatch(itemSlice.actions.itemFetchingError())
    }
}


