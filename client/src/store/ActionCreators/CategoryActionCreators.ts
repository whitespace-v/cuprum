import {AppDispatch} from "../store";
import {IAvailability, IBrand, ICategory, ISubcategory} from "../../models/DataBaseItems";
import {categorySlice} from "../slices/CategorySlice";
import {$host} from "../../http";

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
export const fetchItems = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(categorySlice.actions.fetching())
        const {data} = await $host.get('api/item')
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
export const setCurrentSubcategory = (subcategory: ISubcategory) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.subcategorySet(subcategory))
}
export const setCurrentAvailability = (availability: IAvailability) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.availabilitySet(availability))
}
export const setCurrentBrand = (brand: IBrand) => (dispatch: AppDispatch) => {
    dispatch(categorySlice.actions.brandSet(brand))
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