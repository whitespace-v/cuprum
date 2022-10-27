import {AppDispatch} from "../store";
import {IAvailability, IBrand, ICategory, ISubcategory} from "../../models/DataBaseItems";
import {categorySlice} from "../slices/CategorySlice";
import {$host} from "../../http";


export const createCategory = (name: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.creation())
        await $host.post('api/category', {name}) //authost !
        dispatch(categorySlice.actions.creationSuccess())
    } catch (e) {
        dispatch(categorySlice.actions.creationError())
    }
}
export const createBrand = (name: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.creation())
        await $host.post('api/brand', {name}) //authost !
        dispatch(categorySlice.actions.creationSuccess())
    } catch (e) {
        dispatch(categorySlice.actions.creationError())
    }
}
export const createItem =
    (name: string, description: string, price: string, compressedImages: File[],
     currentAvailability: IAvailability, currentBrand: IBrand, currentCategory: ICategory,
     currentSubcategory: ISubcategory) => async(dispatch: AppDispatch) => {
        const item = new FormData()
        item.append('name', `${currentSubcategory.name} ${name} ${currentBrand.name}`)
        item.append('description', description)
        item.append('price', price)
        item.append('currentAvailability', String(currentAvailability.name))
        item.append('currentBrand', String(currentBrand.id))
        item.append('currentCategory', String(currentCategory.id))
        item.append('currentSubcategory', String(currentSubcategory.id))
        Array.from(compressedImages).forEach(i => {
            item.append('images', i);
        });
        try {
            dispatch(categorySlice.actions.creation())
            await $host.post('api/item', item) //authost !
            dispatch(categorySlice.actions.creationSuccess())
        } catch (e) {
            dispatch(categorySlice.actions.creationError())
        }
    }

export const createSubcategory = (name: string, category: ICategory) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.creation())
        await $host.post('api/subcategory', {name, category}) //authost !
        dispatch(categorySlice.actions.creationSuccess())
    } catch (e) {
        dispatch(categorySlice.actions.creationError())
    }
}

export const createAvailability = (name: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.creation())
        await $host.post('api/availability', {name}) //authost !
        dispatch(categorySlice.actions.creationSuccess())
    } catch (e) {
        dispatch(categorySlice.actions.creationError())
    }
}


