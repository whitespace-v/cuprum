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
import ClearFiltersBar from "../../Components/ClearFiltersBar";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ItemCardsLoader from "../../Components/Loaders/ItemCardsLoader";
import Loader from "../../Components/Loaders/Loader";


const Shop = () => {
    const {user, itemsLoading, subcategoryLoading} = useAppSelector(state => state.categoryReducer)
    return (
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
            <Layout>
                <NavBar/>
                <SearchBar/>
                <CategoryBar/>
                {subcategoryLoading ? <Skeleton width={400} height={40}/> : <SubcategoryBar/> }
                <ExtendingBarsLayout>
                    <SortingBar/>
                    <AvailabilityBar/>
                    <BrandBar/>
                    <ClearFiltersBar/>
                </ExtendingBarsLayout>
                {user === 'Admin' && <ItemCreationTool/> }
                {itemsLoading ? <ItemCardsLoader/> : <ItemCards/>}
                <PageBar/>
            </Layout>
        </SkeletonTheme>
    );
};

export default Shop;