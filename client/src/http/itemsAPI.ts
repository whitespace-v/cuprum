import {IItem} from "../models/IItem";
import {$authHost, $host} from "./index";

export const createCategory = async (name: string) => {
    const {data} = await $host.post('api/category', {name}) //authost !
    return data
}
export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createSubcategory = async (name: string, category: object) => {
    const {data} = await $host.post('api/subcategory', {name, category}) //authost !
    return data
}
export const fetchSubcategories = async (category: object) => {
    const {data} = await $host.get('api/subcategory', {params: category})
    return data
}

export const createBrand = async (name: string) => {
    const {data} = await $host.post('api/brand', {name}) //authost !
    return data
}
export const fetchBrand = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createModel = async (name: string) => {
    const {data} = await $host.post('api/model', {name}) //authost !
    return data
}
export const fetchModel = async () => {
    const {data} = await $host.get('api/model')
    return data
}

export const createColor = async (name: string) => {
    const {data} = await $host.post('api/color', {name}) //authost !
    return data
}
export const fetchColor = async () => {
    const {data} = await $host.get('api/color')
    return data
}

export const createMaterial = async (name: string) => {
    const {data} = await $host.post('api/material', {name}) //authost !
    return data
}
export const fetchMaterial = async () => {
    const {data} = await $host.get('api/material')
    return data
}

export const createSize = async (name: string) => {
    const {data} = await $host.post('api/size', {name}) //authost !
    return data
}
export const fetchSize = async () => {
    const {data} = await $host.get('api/size')
    return data
}

export const createAvailability = async (name: string) => {
    const {data} = await $host.post('api/availability', {name}) //authost !
    return data
}
export const fetchAvailability = async () => {
    const {data} = await $host.get('api/availability')
    return data
}