import React, {useState} from 'react';
import CategoryBar from "../../Components/CategoryBar";
import SubcategoryBar from "../../Components/SubcategoryBar";

const Admin = () => {

    return (
        <div>
            <CategoryBar/>
            <SubcategoryBar/>
        </div>
    );
};

export default Admin;