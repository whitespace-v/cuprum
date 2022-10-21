export interface IItem {
    category: string,
    subcategory: string,
    brand: string,
    model: string,
    description: string,
    color: string,
    size: string,
    material: string,
    availability: 'под заказ' | 'Владивосток',
    images: object | object[],
}