import React, {useEffect, useState} from 'react';
import Admin from "./pages/Admin/Admin";
import {
    createSubcategory,
    fetchAvailability,
    fetchBrand,
    fetchCategories, fetchColor, fetchMaterial,
    fetchModel,
    fetchSize,
    fetchSubcategories
} from "./http/itemsAPI";

const App = () => {
    const [categories, setCategories] = useState<object[]>()
    const [subcategories, setSubCategories] = useState<object[]>()
    const [brands,setBrands] = useState<object[]>()
    const [models,setModels] = useState<object[]>()
    const [sizes,setSizes] = useState<object[]>()
    const [colors,setColors] = useState<object[]>()
    const [availabilities,setAvailabilities] = useState<object[]>()
    const [materials, setMaterials] = useState<object[]>()

    const [selectedCategory, setSelectedCategory] = useState<object>()
    const [typedSubcategory, setTypedSubcategory] = useState<string>('')

    useEffect(() => {
        fetchCategories().then(data => setCategories(data))
        //@ts-ignore
        fetchSubcategories(selectedCategory).then(data => setSubCategories(data))
        fetchBrand().then(data => setBrands(data))
        fetchModel().then(data => setModels(data))
        fetchMaterial().then(data => setMaterials(data))
        fetchColor().then(data => setColors(data))
        fetchAvailability().then(data => setAvailabilities(data))
        fetchSize().then(data => setSizes(data))
    }, [])
    const selectHandler = (i: object) => {
        setSelectedCategory(i)
        //@ts-ignore
        fetchSubcategories(selectedCategory).then(data => setSubCategories(data))
        console.log(i, typeof i)
    }
    return (
        <div>
            <Admin/>
            <div>
                <b>Категории:</b>
                {categories?.map((i: any) => (
                    <p key={i.id}
                       onClick={() => selectHandler(i)}
                    >{i.name}</p>
                ))}
            </div>
            <div>
                <div style={{display: 'flex'}}>
                    <input type="text" value={typedSubcategory} onChange={e => setTypedSubcategory(e.target.value)}/>
                    {/*@ts-ignore*/}
                    <p onClick={() => createSubcategory(typedSubcategory, selectedCategory)}>Создать Подкатегорию</p>
                </div>
                <b>Подкатегории:</b>
                {subcategories?.map((i: any) => (
                    <p key={i.id}>{i.name}</p>
                ))}
            </div>
            <div>
                <b>Бренд:</b>
                {brands?.map((i: any) => (
                    <p key={i.id}>{i.name}</p>
                ))}
            </div>
            <div>
                <b>Модель:</b>
                {models?.map((i: any) => (
                    <p key={i.id}>{i.name}</p>
                ))}
            </div>
            <div>
                <b>Цвет:</b>
                {colors?.map((i: any) => (
                    <p key={i.id}>{i.name}</p>
                ))}
            </div>
            <div>
                <b>Материал:</b>
                {materials?.map((i: any) => (
                    <p key={i.id}>{i.name}</p>
                ))}
            </div>
            <div>
                <b>Наличие:</b>
                {availabilities?.map((i: any) => (
                    <p key={i.id}>{i.name}</p>
                ))}
            </div>
            <div>
                <b>Размер:</b>
                {sizes?.map((i: any) => (
                    <p key={i.id}>{i.name}</p>
                ))}
            </div>
        </div>
    );
};

export default App;