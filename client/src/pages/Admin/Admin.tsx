import React, {useState} from 'react';
import {
        createAvailability,
        createBrand,
        createCategory,
        createColor, createMaterial,
        createModel,
        createSize,
        createSubcategory
} from "../../http/itemsAPI";

const Admin = () => {
        const [category, setCategory] = useState<string>('')
        const [brand,setBrand] = useState<string>('')
        const [model,setModel] = useState<string>('')
        const [size,setSize] = useState<string>('')
        const [color,setColor] = useState<string>('')
        const [availability,setAvailability] = useState<string>('')
        const [material, setMaterial] = useState<string>('')

        return (
            <div>
                    <div style={{display: 'flex'}}>
                            <input type="text" value={category} onChange={e => setCategory(e.target.value)}/>
                            <p onClick={() => createCategory(category)}>Создать Категорию</p>
                    </div>

                    <div style={{display: 'flex'}}>
                            <input type="text" value={brand} onChange={e => setBrand(e.target.value)}/>
                            <p onClick={() => createBrand(brand)}>Создать Бренд</p>
                    </div>
                    <div style={{display: 'flex'}}>
                            <input type="text" value={model} onChange={e => setModel(e.target.value)}/>
                            <p onClick={() => createModel(model)}>Создать Модель</p>
                    </div>
                    <div style={{display: 'flex'}}>
                            <input type="text" value={size} onChange={e => setSize(e.target.value)}/>
                            <p onClick={() => createSize(size)}>Создать Размер</p>
                    </div>
                    <div style={{display: 'flex'}}>
                            <input type="text" value={color} onChange={e => setColor(e.target.value)}/>
                            <p onClick={() => createColor(color)}>Создать Цвет</p>
                    </div>
                    <div style={{display: 'flex'}}>
                            <input type="text" value={material} onChange={e => setMaterial(e.target.value)}/>
                            <p onClick={() => createMaterial(material)}>Создать Материал</p>
                    </div>
                    <div style={{display: 'flex'}}>
                            <input type="text" value={availability} onChange={e => setAvailability(e.target.value)}/>
                            <p onClick={() => createAvailability(availability)}>Создать Наличие</p>
                    </div>

                    <p>Создать товар</p>


                    <p>Удалить категорию</p>
                    <p>Удалить подкатегорию</p>
                    <p>Удалить товар</p>
            </div>
        );
};

export default Admin;