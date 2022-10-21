import {IItem} from "../models/IItem";
import {$authHost, $host} from "./index";

export const createCategory = async (category: string) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const createSubCategory = async (subCategory: string) => {
    const {data} = await $authHost.post('api/subcategory', subCategory)
    return data
}

export const createItem = async (item: IItem) => {
    const {data} = await $authHost.post('api/manufacturer', item)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/manufacturer')
    return data
}

export const fetchSubCategories = async () => {
    const {data} = await $host.get('api/manufacturer')
    return data
}

export const fetchItems = async () => {
    const {data} = await $host.get('api/manufacturer')
    return data
}