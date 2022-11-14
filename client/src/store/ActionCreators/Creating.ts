import {AppDispatch} from "../store";
import {IAvailability, IBrand, ICategory, ICurrentItem, IItem, ISubcategory} from "../../models/DataBaseItems";
import {creatingSlice} from "../slices/CreatingSlice";
import {$authHost, $host} from "../../http";

export const createCategory = (name: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(creatingSlice.actions.creation())
        await $authHost.post('api/category', {name})
        dispatch(creatingSlice.actions.creationSuccess())
    } catch (e) {
        dispatch(creatingSlice.actions.creationError())
    }
}
export const createBrand = (name: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(creatingSlice.actions.creation())
        await $authHost.post('api/brand', {name})
        dispatch(creatingSlice.actions.creationSuccess())
    } catch (e) {
        dispatch(creatingSlice.actions.creationError())
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
            dispatch(creatingSlice.actions.creation())
            await $authHost.post('api/item', item)
            dispatch(creatingSlice.actions.creationSuccess())
        } catch (e) {
            dispatch(creatingSlice.actions.creationError())
        }
    }

export const createSubcategory = (name: string, category: ICategory) => async(dispatch: AppDispatch) => {
    try {
        dispatch(creatingSlice.actions.creation())
        await $authHost.post('api/subcategory', {name, category})
        dispatch(creatingSlice.actions.creationSuccess())
    } catch (e) {
        dispatch(creatingSlice.actions.creationError())
    }
}

export const createAvailability = (name: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(creatingSlice.actions.creation())
        await $authHost.post('api/availability', {name})
        dispatch(creatingSlice.actions.creationSuccess())
    } catch (e) {
        dispatch(creatingSlice.actions.creationError())
    }
}
export const commentCreate = (item: IItem, comment: string, mark: number ) => async(dispatch: AppDispatch) => {
    try {
        dispatch(creatingSlice.actions.creation())
        await $host.post('api/comment', {item, comment, mark})
        dispatch(creatingSlice.actions.creationSuccess())
    } catch (e) {
        dispatch(creatingSlice.actions.creationError())
    }
}

export const deleteItem = (id: number) => async(dispatch: AppDispatch) => {
    try {
        dispatch(creatingSlice.actions.creation())
        const {data} = await $authHost({method:'DELETE', url:`api/item/${id}`});
        console.log(data)
        dispatch(creatingSlice.actions.creationSuccess())
    } catch (e) {
        dispatch(creatingSlice.actions.creationError())
    }
}
