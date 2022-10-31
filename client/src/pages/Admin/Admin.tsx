import React from 'react';
import CategoryBar from "../../Components/SortingBars/ExtendingBars/CategoryBar";
import SubcategoryBar from "../../Components/SortingBars/SubcategoryBar";
import AvailabilityBar from "../../Components/SortingBars/ExtendingBars/AvailabilityBar";
import BrandBar from "../../Components/SortingBars/ExtendingBars/BrandBar";
import ExtendingBarsLayout from "../../Components/SortingBars/ExtendingBars/ExtendingBarsLayout";
import ItemCreationTool from "../../Components/ItemCreationTool";
import ItemCards from "../../Components/ItemCards";
import Layout from "../../UIKIT/Layout";
import SortingBar from "../../Components/SortingBars/SortingBar";
import PageBar from "../../Components/SortingBars/PageBar";

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
            <PageBar/>
        </Layout>
    );
};

export default Admin;