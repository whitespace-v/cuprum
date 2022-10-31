import React from 'react';
import CategoryBar from "../../Components/Bars/ExtendingBars/CategoryBar";
import SubcategoryBar from "../../Components/Bars/SubcategoryBar";
import AvailabilityBar from "../../Components/Bars/ExtendingBars/AvailabilityBar";
import BrandBar from "../../Components/Bars/ExtendingBars/BrandBar";
import ExtendingBarsLayout from "../../Components/Bars/ExtendingBars/ExtendingBarsLayout";
import ItemCreationTool from "../../Components/ItemCreationTool";
import ItemCards from "../../Components/ItemCards";
import Layout from "../../UIKIT/Layout";
import SortingBar from "../../Components/Bars/SortingBar";

const Admin = () => {

    return (
        <Layout>
            <CategoryBar/>
            <SubcategoryBar/>
            <ExtendingBarsLayout>
                <SortingBar/>
                <AvailabilityBar/>
                <BrandBar/>
            </ExtendingBarsLayout>
            <ItemCreationTool/>
            <ItemCards/>
        </Layout>
    );
};

export default Admin;