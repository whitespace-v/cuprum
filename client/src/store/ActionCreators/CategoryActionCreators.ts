import {AppDispatch} from "../store";
import {ICategory, ISubcategory} from "../../models/DataBaseItems";
import {categorySlice} from "../slices/CategorySlice";
import {$host} from "../../http";

export const fetchCategories = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoryFetching())
        const {data} = await $host.get('api/category')
        dispatch(categorySlice.actions.categoryFetchingSuccess(data))
        dispatch(categorySlice.actions.subcategoryFetching())
        const {data: subcategories} = await $host.get('api/subcategory', {params: data[0]})
        dispatch(categorySlice.actions.subcategoryFetchingSuccess(subcategories))
    } catch (e) {
        dispatch(categorySlice.actions.categoryFetchingError())
    }
}

export const createCategory = (name: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoryCreation())
        await $host.post('api/category', {name}) //authost !
        dispatch(categorySlice.actions.categoryCreationSuccess())
    } catch (e) {
        dispatch(categorySlice.actions.categoryCreationError())
    }
}

export const createSubcategory = (name: string, category: ICategory) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoryCreation())
        await $host.post('api/subcategory', {name, category}) //authost !
        dispatch(categorySlice.actions.categoryCreationSuccess())
    } catch (e) {
        dispatch(categorySlice.actions.categoryCreationError())
    }
}

export const setCurrentCategory = (category: ICategory) => async(dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.categorySet(category))
    try {
        dispatch(categorySlice.actions.subcategoryFetching())
        const {data} = await $host.get('api/subcategory', {params: category})
        dispatch(categorySlice.actions.subcategoryFetchingSuccess(data))
    } catch (e) {
        dispatch(categorySlice.actions.subcategoryFetchingError())
    }
}
export const setCurrentSubcategory = (subcategory: ISubcategory) => async(dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.subcategorySet(subcategory))
}

export const createBrand = (name: string, category: ICategory, subcategory: ISubcategory) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.categoryCreation())
        await $host.post('api/brand', {name, category, subcategory}) //authost !
        dispatch(categorySlice.actions.categoryCreationSuccess())
    } catch (e) {
        dispatch(categorySlice.actions.categoryCreationError())
    }
}