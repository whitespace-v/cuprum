import React from 'react';
import CategoryBar from "../../Components/Bars/CategoryBar";
import SubcategoryBar from "../../Components/Bars/SubcategoryBar";
import AvailabilityBar from "../../Components/Bars/ExtendingBars/AvailabilityBar";
import BrandBar from "../../Components/Bars/ExtendingBars/BrandBar";
import ExtendingBarsLayout from "../../Components/Bars/ExtendingBars/ExtendingBarsLayout";
import ItemCreationTool from "../../Components/ItemCreationTool";
import ItemCards from "../../Components/ItemCards";

const Admin = () => {

    return (
        <div>
            <CategoryBar/>
            <SubcategoryBar/>
            <ExtendingBarsLayout>
                <AvailabilityBar/>
                <BrandBar/>
            </ExtendingBarsLayout>
            <ItemCreationTool/>
            <ItemCards/>
        </div>
    );
};

export default Admin;