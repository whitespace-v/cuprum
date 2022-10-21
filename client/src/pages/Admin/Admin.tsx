import React from 'react';
import {createCategory} from "../../http/itemsAPI";

const Admin = () => {
    return (
        <div>
            <p
                onClick={() => createCategory('1')}
            >Создать категорию</p>
            <p>Создать подкатегорию</p>
            <p>Создать товар</p>


            <p>Удалить категорию</p>
            <p>Удалить подкатегорию</p>
            <p>Удалить товар</p>
        </div>
    );
};

export default Admin;