import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import App from "./App";
import Shop from "./pages/Shop/Shop";
import {setupStore} from "./store/store";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="admin" element={<Admin/>}/>
            <Route path="shop" element={<Shop/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={setupStore()}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
