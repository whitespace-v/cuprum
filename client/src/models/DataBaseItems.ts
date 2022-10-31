export interface ICategory{
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}
export interface ISubcategory{
    id: number;
    name: string;
    categoryId: number;
    createdAt: string;
    updatedAt: string;
}
export interface IAvailability{
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface IBrand{
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}
export interface IImages{
    id: number;
    img: string;
    createdAt: string;
    updatedAt: string;
}
export interface IItem {
    id: number;
    categoryId: number;
    subcategoryId: number;
    brandId: number;
    availability: string;
    name: string;
    vendor: string;
    description: string;
    price: number;
    oldPrice: number;
    mark: number;
    marksCount: number
    image: string;
    images: IImages[];
    createdAt: string;
    updatedAt: string;
    itemAvailabilityId: null;    //by mistake in relations
    itemBrandId: null;           //by mistake in relations
    itemCategoryId: null;        //by mistake in relations
    itemSubcategoryId: null;     //by mistake in relations
}
export interface IItems {
    count: number;
    rows: IItem[];
}
export interface ISorting{
    name: string;
    rus: string
}

