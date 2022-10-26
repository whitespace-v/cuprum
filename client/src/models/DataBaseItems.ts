export interface ICategory{
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}
export interface ISubcategory{
    id: number;
    name: string;
    category_id: number;
    createdAt: string;
    updatedAt: string;
}
export interface IBrand{
    id: number;
    name: string;
    categories_id: number[];
    subcategories_id: number[];
    createdAt: string;
    updatedAt: string;
}
export interface IItem {
    category: string;
    subcategory: string;
    brand: string;
    model: string;
    description: string;
    color: string;
    size: string;
    material: string;
    price: number;
    availability: 'под заказ' | 'Владивосток';
    images: object | object[];
}