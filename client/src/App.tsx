import React from 'react';
import Admin from "./pages/Admin/Admin";
import Shop from "./pages/Shop/Shop";
import {Outlet, Route, Routes} from "react-router-dom";
import Layout from "./UIKIT/Layout";

const App = () => {
    return (
        <Layout>
            <Outlet/>
        </Layout>
    );
};

export default App;