import React from 'react';
import ItemCards from "../../Components/ItemCards";
import SortingBar from "../../Components/SortingBars/SortingBar";
import AvailabilityBar from "../../Components/SortingBars/ExtendingBars/AvailabilityBar";
import BrandBar from "../../Components/SortingBars/ExtendingBars/BrandBar";
import ExtendingBarsLayout from "../../Components/SortingBars/ExtendingBars/ExtendingBarsLayout";
import PageBar from "../../Components/SortingBars/PageBar";
import Layout from "../../UIKIT/Layout";
import CategoryBar from "../../Components/SortingBars/CategoryBar";
import SubcategoryBar from "../../Components/SortingBars/SubcategoryBar";
import NavBar from "../../Components/NavBar";
import SearchBar from "../../Components/SearchBar";
import ItemCreationTool from "../../Components/ItemCreationTool";
import {useAppSelector} from "../../hooks/redux";

const Shop = () => {

    const {user} = useAppSelector(state => state.categoryReducer)

    return (
        <Layout>
            <NavBar/>
            <SearchBar/>
            <CategoryBar/>
            <SubcategoryBar/>
            <ExtendingBarsLayout>
                <SortingBar/>
                <AvailabilityBar/>
                <BrandBar/>
            </ExtendingBarsLayout>
            {user === 'Admin' &&  <ItemCreationTool/> }
            <ItemCards/>
            <PageBar/>
        </Layout>
    );
};

export default Shop;